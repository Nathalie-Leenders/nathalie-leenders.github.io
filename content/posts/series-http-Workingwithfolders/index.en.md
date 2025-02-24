---
title: "Blog series - HTTP calls to SharePoint - Working with folders"
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
# Working with folders and the SharePoint API

When working with the SharePoint API, handling folders can sometimes be tricky, especially when dealing with deeply nested structures. In this post, we'll explore how to dynamically grab the file location regardless of how deep it is in the root or folder structure. We'll also cover how to handle common issues like permission errors.

# Dynamically Grabbing the File Location

To work with folders in the SharePoint API, you need to use the full path. This ensures that you can dynamically grab the file location, no matter how deep it is within the root or folder structure. 

# Get the Path Output from the Body

When you make a request to the SharePoint API, the response body will contain the path information. This includes the root name, folder name, and other relevant details. Extract this path information from the response body.

# Use the Path in Your HTTP Requests

Once you have the path, you can use it in your subsequent HTTP requests. This allows you to navigate through the folder structure dynamically. Here's an example of how to do this:

```http
GET https://your-SharePoint-site/_api/web/GetFolderByServerRelativeUrl('/sites/your-site/Shared Documents/FolderName')/Files
```

In this example, replace '/sites/your-site/Shared Documents/FolderName' with the path you extracted from the response body.

You can either select Path or Full Path from your output. I've used Fullpath before, and it worked in querying my data.
