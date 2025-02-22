---
title: "Blog series - Post - Copying a File to a New Location in SharePoint?"
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
Copying a File to a New Location in SharePoint

### Objective
You want to copy a file from one location to another within a SharePoint site. The source file URL and the destination file URL are known or in variables to use.

### Steps:

### Construct the HTTP Request
Use the SharePoint REST API to copy the file by specifying the source file URL and the destination file URL in the URL.

### Execute the HTTP Request
Make an HTTP POST request to the SharePoint REST API endpoint with the appropriate query parameters.


```markdown
Method: Post
URI: _api/web/GetFileByServerRelativeUrl('<source-file-url>')/copyto(strnewurl='<destination-file-url>',boverwrite=true)

Accept: application/json;odata=verbose
Content-Type: application/json;odata=verbose
X-RequestDigest: <form-digest-value>
```
In this request I choose to overwrite if the file already exists, you can do a check beforehand, and then choose which relevant action (overwrite or not, i.e new or existing) you'll want to do.

 {{< img src="list.png" caption="Http call" height="610" width="283">}}
