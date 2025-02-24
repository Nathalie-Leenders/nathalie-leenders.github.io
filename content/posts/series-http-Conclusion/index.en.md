---
title: "Blog series - Conclusion"
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
### Conclusion
So, there are a lot of HTTP calls that can be done. I've touched upon a few, hopefully you've gained a bit more insight in how these work.

## Some takeaways

If you do a lot of HTTP calls in a single flow, there might be a cache issue poking around, resulting in double updates.

When you use Term Store values to update, it wont show in the version history. (work around is to append them to a multiple line text field, but this results in a double entry in version history)

Each HTTP call, results in a new version on the document on SharePoint.
  
Try and limit your calls, sometimes a call will say it executed but if it quickly succeeds another (quick status changes for example) it wont always display on the item.