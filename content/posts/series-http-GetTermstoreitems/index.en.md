---
title: "Blog series - Get term store (for content types)?"
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
Fetching Terms from a Specific Term Set in a Term Store
### Objective
You want to retrieve all terms from a specific term set within a term store in SharePoint. The term store and term set are identified by their unique GUIDs.

Steps:

### Identify the Term Store and Term Set GUIDs
You have a SharePoint site with a managed metadata service, and you need to fetch all terms from a specific term set. The term store GUID is TERMSTOREGUID and the term set GUID is GROUPGUID.

### Construct the HTTP Request
Use the SharePoint REST API to get the terms by specifying the term store and term set GUIDs in the URL.

### Execute the HTTP Request 
Make an HTTP GET request to the SharePoint REST API endpoint with the appropriate query parameters.


If choice field is a content type, grab the content types first through this query



Method: Get
Uri: _api/v2.1/termStore/groups/TERMSTOREGUID/sets/GROUPGUID/terms

Do a filter array on:

```markdown
string(item()?['labels']) contains 'name choice field value'
```

{{< img src="list.png" caption="HTTP call" height="283" width="610" >}}
