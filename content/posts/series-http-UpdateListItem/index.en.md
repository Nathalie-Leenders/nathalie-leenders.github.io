---
title: "Blog series - Post - Fetching a Specific Item from a SharePoint List by Title and Item ID?"
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
### Scenario 
Fetching a Specific Item from a SharePoint List by Title and Item ID
### Objective
You want to retrieve the details of a specific item from a SharePoint list based on the list title and item ID.

### Steps:

This call is very similar to getting the list item information, but instead of using Get, we use Post, to be able to update our item.

In the body, you can then specify what you want to update.

Take note, the URI is identical to a Get call, but whats in the headers and body is the most important. For a Get, you wont need the X-RequestDigest.

Do the Post, and in your body, type the metadata field, and which column value you want to update.

```markdown
### Method: POST
```
```http
Uri: _api/web/lists/getbytitle('<your-list-title>')/items(<item-id>)

Headers:
  Accept: application/json;odata=verbose
  Content-Type: application/json;odata=verbose
  X-RequestDigest: <form-digest-value>

Body
  {
  "__metadata": { "type": "SP.Data.<your-list-title>ListItem" },
  "Title": "<new-title>"
}
```


 {{< img src="list.png" caption="Http call" height="283" width="610">}}
