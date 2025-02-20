---
title: "Blog series - Post - HTTP Update list item term store?"
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
### Scenario: 
Validating and Updating a Specific Item in a SharePoint List

###  Objective: 
You want to validate and update the details of a specific item in a SharePoint list based on the list name and item ID stored in variables.

# Steps

### Identify the List and Item

You have a SharePoint site with multiple lists, and you need to validate and update a specific item in a list. The list name and item ID are stored in variables VarListname and VarItemID respectively.

### Construct the HTTP Request

Use the SharePoint REST API to validate and update the item details by specifying the list name and item ID in the URL.

### Execute the HTTP Request 

Make an HTTP POST request to the SharePoint REST API endpoint with the appropriate query parameters and payload.

```markdown
Method: POST
Uri: _api/web/lists/getbytitle('@{variables('VarListname')}')/items(@{variables('VarItemID')})/validateUpdateListItem
```

```json
Body: 
{
 "formValues": [
  {
      "FieldName": "Name_Status",
      "FieldValue": "itemlabel|@{body('Filter_array')[0]?['id']}"
  }
 ]
}
```




 {{< img src="list.png" caption="Http call" height="283" width="610">}}
