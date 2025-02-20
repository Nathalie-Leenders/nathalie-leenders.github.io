---
title: "Blog series - HTTP calls to Sharepoint - Fetching Specific List Information"
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
# Scenario
Fetching Specific List Information

# Objective
You want to retrieve the ID and Title of a specific SharePoint list whose title matches a given name.

# Steps:

  - Identify the List Title: You have a SharePoint site with multiple lists, and you need to fetch the ID and Title of a list named "Project Documents".
  - Construct the HTTP Request: Use the SharePoint REST API to filter the lists by title and select only the ID and Title fields.
  - Execute the HTTP Request: Make an HTTP GET request to the SharePoint REST API endpoint with the appropriate query parameters.


```markdown
Method: GET

Uri: _api/web/lists?$filter=Title eq 'name'&$select=Id,Title

Headers:
  Accept: application/json;odata=verbose
```

 {{< img src="list.png" caption="Http call" height="610" width="283">}}
