---
title: "How to embed a Power BI report into a Canvas app, and hide the nav & filter"
subtitle: "Learn how to properly handle dynamic values and untyped objects from the Power BI REST API in Power Apps, plus common Gallery default property gotchas."
date: 2024-06-27T14:27:14Z
lastmod: 2024-06-27T14:27:14Z
draft: true
authors: [nathalieleenders]
description: ""

tags: ["PowerApps", "Power BI", "REST API", "PowerFx", "Untyped Objects", "Troubleshooting"]
categories: ["Power Platform", "PowerApps", "Power BI"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "powerbitile.png"
featuredImagePreview: "powerbitile.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

When working with the Power BI REST API in Power Apps, you'll often encounter untyped objects that can cause frustrating "Invalid argument type (Dynamic). Expecting a Text value instead" errors. In this post, I'll show you how to properly handle these dynamic values and share a common Gallery gotcha that can break your filtering logic.

## The Problem: Untyped Objects

When you call the Power BI REST API using something like `PowerBIRest.GetReports()`, you get back a response that looks like this:

```json
{
  "@odata.context": "https://api.powerbi.com/v1.0/myorg/$metadata#reports",
  "value": [
    {
      "id": "0e2e7533-2f14-46ab-bf61-eec5045da56b",
      "reportType": "PowerBIReport",
      "name": "Gantt 2.0",
      "webUrl": "https://app.powerbi.com/groups/me/reports/...",
      "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=...",
      "isOwnedByMe": true,
      "datasetId": "203221f2-9af8-46c5-8c0e-5ff553f58fab",
      "datasetWorkspaceId": "633e1009-a1b6-4529-b37b-3d870df5d30d"
    }
  ]
}
```

The issue is that Power Apps treats this as an **untyped object** or **dynamic value**. When you try to use these properties in your formulas, Power Apps doesn't know what data type they should be, leading to errors.

## The Solution: Explicit Type Conversion

The key is to explicitly convert each property to its expected data type when creating your collection. Here are several approaches:

### Method 1: Using ParseJSON with Type Conversion (Recommended)

```powerfx
Set(varRawData, PowerBIRest.GetReports());
ClearCollect(
    colUserReports,
    ForAll(
        ParseJSON(JSON(varRawData)).value,
        {
            id: Text(ThisRecord.id),
            reportType: Text(ThisRecord.reportType),
            name: Text(ThisRecord.name),
            webUrl: Text(ThisRecord.webUrl),
            embedUrl: Text(ThisRecord.embedUrl),
            isOwnedByMe: Boolean(ThisRecord.isOwnedByMe),
            datasetId: Text(ThisRecord.datasetId),
            datasetWorkspaceId: Text(ThisRecord.datasetWorkspaceId)
        }
    )
);
```

### Method 2: Direct Conversion with Table Function

```powerfx
ClearCollect(
    colUserReports,
    ForAll(
        Table(PowerBIRest.GetReports()).value,
        {
            id: Text(ThisRecord.id),
            reportType: Text(ThisRecord.reportType),
            name: Text(ThisRecord.name),
            webUrl: Text(ThisRecord.webUrl),
            embedUrl: Text(ThisRecord.embedUrl),
            isOwnedByMe: Boolean(ThisRecord.isOwnedByMe),
            datasetId: Text(ThisRecord.datasetId),
            datasetWorkspaceId: Text(ThisRecord.datasetWorkspaceId)
        }
    )
);
```

### Method 3: Handling Null Values with Coalesce

```powerfx
ClearCollect(
    colUserReports,
    ForAll(
        Table(PowerBIRest.GetReports()).value,
        {
            id: Text(Coalesce(ThisRecord.id, "")),
            reportType: Text(Coalesce(ThisRecord.reportType, "")),
            name: Text(Coalesce(ThisRecord.name, "Unknown")),
            webUrl: Text(Coalesce(ThisRecord.webUrl, "")),
            embedUrl: Text(Coalesce(ThisRecord.embedUrl, "")),
            isOwnedByMe: Boolean(Coalesce(ThisRecord.isOwnedByMe, false)),
            datasetId: Text(Coalesce(ThisRecord.datasetId, "")),
            datasetWorkspaceId: Text(Coalesce(ThisRecord.datasetWorkspaceId, ""))
        }
    )
);
```

## Key Type Conversion Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `Text()` | Convert to string | `Text(ThisRecord.id)` |
| `Value()` | Convert to number | `Value(ThisRecord.reportFlags)` |
| `Boolean()` | Convert to boolean | `Boolean(ThisRecord.isOwnedByMe)` |
| `DateValue()` | Convert to date | `DateValue(ThisRecord.createdDate)` |
| `DateTimeValue()` | Convert to datetime | `DateTimeValue(ThisRecord.modifiedDateTime)` |

## Power BI API Endpoints: Getting All Your Reports

One important thing to note: the `/myorg/reports` endpoint only returns reports from **"My Workspace"** (your personal workspace). If you own reports in other workspaces, you won't see them.

### Getting Reports from All Accessible Workspaces

```powerfx
// First get all workspaces you're a member of
Set(varWorkspaces, PowerBIRest.GetGroups());

// Get reports from each workspace
ClearCollect(colAllReports, 
    ForAll(
        ParseJSON(JSON(varWorkspaces)).value,
        ForAll(
            ParseJSON(JSON(PowerBIRest.GetReportsInGroup(Text(ThisRecord.id)))).value,
            {
                id: Text(ThisRecord.id),
                name: Text(ThisRecord.name),
                webUrl: Text(ThisRecord.webUrl),
                workspaceId: Text(Parent.ThisRecord.id),
                workspaceName: Text(Parent.ThisRecord.name),
                isOwnedByMe: Boolean(ThisRecord.isOwnedByMe)
            }
        )
    )
);

// Also get reports from "My Workspace"
Collect(colAllReports,
    ForAll(
        ParseJSON(JSON(PowerBIRest.GetReports())).value,
        {
            id: Text(ThisRecord.id),
            name: Text(ThisRecord.name),
            webUrl: Text(ThisRecord.webUrl),
            workspaceId: "MyWorkspace",
            workspaceName: "My Workspace",
            isOwnedByMe: Boolean(ThisRecord.isOwnedByMe)
        }
    )
);
```

## Common Gotcha: Gallery Default Property

Here's a sneaky issue that can break your filtering logic. When using a Gallery for selection filtering, you **must** set the `Default` property correctly:

### ❌ Wrong Way
```powerfx
// Default property left empty or set to ""
Default: ""
```

### ✅ Right Way
```powerfx
// Default property set to empty record
Default: {}
// Or alternatively
Default: Blank()
```

Without the proper default, `IsBlank(Gallery9.Selected)` will never return `true`, breaking your conditional logic.

## Complete Filtering Example

Here's how to combine Power BI security filtering with other business logic:

```powerfx
Filter(
    Tiles,
    // Security filter: Only show reports user has access to
    Reportid in colUserReports.id &&
    // Business logic filters
    If(
        varFilter && !IsBlank(Gallery9.Selected),
        Gallery9.Selected.Title2.Text = cr5fc_themanaam,
        If(
            IsEmpty(Filter_input.SelectedItems),
            true,
            Domein in Filter_input.SelectedItems.Value
        )
    )
)
```

## Error Handling Best Practices

Always wrap your API calls in error handling:

```powerfx
IfError(
    // Your Power BI API call and processing logic here
    ClearCollect(colUserReports, /* your formula */),
    // Error handling
    Notify("Failed to load Power BI reports: " & FirstError.Message, NotificationType.Error);
    Set(varDataLoaded, false)
);
```

## Summary

When working with untyped objects from REST APIs in Power Apps:

1. **Always use explicit type conversion** functions (`Text()`, `Boolean()`, `Value()`, etc.)
2. **Handle null values** with `Coalesce()` or `If(IsBlank())`
3. **Set Gallery Default properties** to `{}` or `Blank()`
4. **Remember API endpoint limitations** - `/myorg/reports` only shows "My Workspace"
5. **Implement proper error handling** with `IfError()`

These patterns will save you hours of debugging and make your Power Apps more robust and user-friendly.

Have you encountered other tricky scenarios with untyped objects in Power Apps? Share your experiences in the comments below!

---

*Found this helpful? Consider [buying me a coffee](https://www.buymeacoffee.com/NathalieLeenders) to support more Power Platform content!*
