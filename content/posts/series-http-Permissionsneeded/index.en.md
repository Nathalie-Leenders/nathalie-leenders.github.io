---
title: "Blog series - HTTP calls to SharePoint - Permissions"
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
# Permissions needed

During my testing, I had SharePoint administrator access with full control on the lists, so I could do anything. For most of the calls, I recommend getting SharePoint administrator access to avoid any issues.

### Known Error: 
If the API call throws an error indicating that you're not authorized, it doesn't always mean you don’t have the correct permissions. It could mean you're attempting to make an API call to an area of SharePoint that’s not allowed to be called. For example, if you've made a typo somewhere or aren't using the correct type of call. 

So, double-check your permissions and then the URI that you're calling to, and make sure that’s correct.
