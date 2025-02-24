---
title: "Blog series - HTTP calls to Sharepoint - Call a flow from a button"
subtitle: ""
date: 2025-02-20T09:27:14Z
lastmod: 2025-02-20T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Sharepoint - HTTP series"]
categories: ["Sharepoint"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: ""
featuredImagePreview: ""

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
# JSON formatting on a sharepoint list?

In this blog post, we'll explore the powerful capabilities of JSON list formatting in SharePoint. JSON formatting allows you to customize the appearance of your lists and libraries, making them more user-friendly and visually appealing. We'll cover how to get a flow identifier, add a column, set JSON formatting code, and additional button formatting options such as showing/hiding based on fields and permissions.

## Get Flow Identifier

To begin, you'll need to get the flow identifier for the specific flow you want to use. This identifier is essential for linking your JSON formatting to the flow. You can find the flow identifier in the URL of your flow in Power Automate. Simply navigate to your flow, and copy the identifier from the URL. Or click on Export, Get flow identifier.

## Add a Column

Next, you'll need to add a column to your SharePoint list. This column will be used to apply the JSON formatting. To add a column, follow these steps:

- Go to your SharePoint list.
- Click on the "Add column" button.
- Choose the type of column you want to add (Text works best in my opinion).
- Give your column a name and configure any additional settings as needed.
- Click "Save" to add the column to your list.

## Set JSON Formatting Code

Now that you have your column, it's time to set the JSON formatting code. JSON formatting allows you to define how the column should be displayed based on its value. Here's an example of JSON formatting code:

```json
{
  "elmType": "div",
  "txtContent": "@currentField",
  "style": {
    "background-color": "=if(@currentField == 'Completed', '#d4f4dd', '#f4d4d4')",
    "padding": "5px"
  }
}
```

This code sets the background color of the column based on its value. If the value is "Completed," the background color will be green; otherwise, it will be red.

## Additional Button Formatting - Show/Hide Based on Fields

You can also use JSON formatting to show or hide buttons based on the values of other fields. Here's an example:

```json
{
  "elmType": "button",
  "txtContent": "Approve",
  "style": {
    "display": "=if([$Status] == 'Pending', 'inline-block', 'none')"
  },
  "customRowAction": {
    "action": "setValue",
    "actionInput": {
      "Status": "Approved"
    }
  }
}
```

In this example, the "Approve" button will only be displayed if the "Status" field is set to "Pending."

## Show/Hide Based on Permissions

You can also control the visibility of buttons based on user permissions. Here's an example:

```json
{
  "elmType": "button",
  "txtContent": "Delete",
  "style": {
    "display": "=if([$UserPermissions] == 'FullControl', 'inline-block', 'none')"
  },
  "customRowAction": {
    "action": "delete"
  }
}
```

In this example, the "Delete" button will only be displayed if the user has "FullControl" permissions.

## Visual example:

{{< img src="list.png" caption="HTTP call" height="250" width="610" >}}

Or with a red background -

```json
"style": {
  "border": "none",
  "background-color": "red"
}
```

{{< img src="list1.png" caption="HTTP call" height="250" width="610" >}}

## Final call:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "children": [
    {
      "elmType": "div",
      "style": {
        "visibility": "visible"
      }
    },
    {
      "elmType": "button",
      "txtContent": "Nameofbutton",
      "customRowAction": {
        "action": "executeFlow",
        "actionParams": "{\"id\":\"v1/identifier\",\"method\":\"POST\",\"headers\":{\"Content-Type\":\"application/json\"},\"body\":{\"site\":\"@currentWeb\",\"itemId\":\"@{ID}\"}}"
      },
      "style": {
        "background-color": "#0078d4",
        "color": "white",
        "cursor": "pointer",
        "display": "=if([Status] == 'new', 'block', 'none')"
      }
    }
  ]
}
```