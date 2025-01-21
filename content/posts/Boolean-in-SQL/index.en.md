---
title: "Quick tip! Boolean in SQL"
subtitle: "How to get a boolean value with a SQL backend"
date: 2023-02-15T14:27:14Z
lastmod: 2023-02-15T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["SQL", "Boolean"]
categories: ["Power Automate"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: ""
featuredImagePreview: ""

enableToc: false

code:
    maxShownLines: 100
---

# Are you looking for a boolean column in SQL? Or have a virtual table and need a toggle/checkbox in your app?

If you have just a string/text field with True/False this wont work.

**You need to convert the column in SQL to BIT.**

Bit is an integer data type that can take a value of 0, 1, or NULL
1 for true, 0 for false.

Then reload/refresh your table into your dataverse/virtual table and it can be selected with a checkbox!