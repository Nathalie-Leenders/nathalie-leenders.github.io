---
title: "Blog series - Post - Fetching a Specific Item from a SharePoint List by Title and Item ID?"
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
### Scenario 
Fetching a Specific Item from a SharePoint List by Title and Item ID
### Objective
You want to retrieve the details of a specific item from a SharePoint list based on the list title and item ID.

### Steps:

Identify the List Title and Item ID: You have a SharePoint site with multiple lists, and you need to fetch the details of a specific item from a list. The list title is known, and the item ID is specified.

### Construct the HTTP Request
Use the SharePoint REST API to get the item details by specifying the list title and item ID in the URL.

### Execute the HTTP Request
Make an HTTP GET request to the SharePoint REST API endpoint with the appropriate query parameters.


```markdown
### Method: POST
```
```http
Uri: _api/web/lists/getbytitle('<your-list-title>')/items(<item-id>)

Headers:
  Accept: application/json;odata=verbose
  Content-Type: application/json;odata=verbose
  X-RequestDigest: <form-digest-value>
```


 {{< img src="list.png" caption="Http call" height="283" width="610">}}
