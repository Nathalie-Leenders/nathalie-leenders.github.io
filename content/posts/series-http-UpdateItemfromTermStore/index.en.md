---
title: "Blog series - Post - HTTP Update list item term store?"
subtitle: ""
date: 2025-02-20T09:27:14Z
lastmod: 2025-02-20T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["SharePoint HTTP series"]
categories: ["SharePoint"]


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
You have a metadata column you want to update, but how to do this?

###  Objective: 
You want to update the status field, with a new status from that term set.

# Steps

### Identify the List and Item

Like always, I'll use varsitename in the URL, and in the URI Varlistname and VaritemID.

### Execute the HTTP Request 

With this request, I'm updating the name_status field. I will have to have queried the term store before, to get the filter array for the status field I want to have it updated to.

I unfortunately cannot simply say status:newstatus.

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
