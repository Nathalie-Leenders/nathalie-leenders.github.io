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

  - Identify the List Title: You have a SharePoint site with multiple lists, and you need to fetch the ID and Title of a list named 'name' or of course add your own name.
  - Construct the HTTP Request: You can filter on the name, by adding a ?$filter=title to your query. This uses oData filtering.
  You can filter on other things as well, you can use basic filtering such as lt (less than) le (less than or equal) gt (greater then) ge (greater or equal) eq (equal) or ne(not equal).

  Also, `Startswith, substringof, and date time functions are supported.

Check beforehand for any operators supported or not. You also dont want to over complicate the call. You can always filter later in Power Automate if needed.


```markdown
Method: GET

Uri: _api/web/lists?$filter=Title eq 'name'&$select=Id,Title

Headers:
  Accept: application/json;odata=verbose
```

 {{< img src="list.png" caption="Http call" height="610" width="283">}}
