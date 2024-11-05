---
title: "Adding a decimal count to your Power Automate Flow (Float/Increment variable)"
subtitle: "How to use a float variable for decimal counting"
date: 2024-11-05T14:27:14Z
lastmod: 2024-11-05T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Variables", "Power Automate"]
categories: ["Power Automate"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "count.png"
featuredImagePreview: "count.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

I've explained how to count in a variable, but how do you count in a decimal?

I had a usecase, where we wanted to create a version number metadata field. We could of course use an integer, count using increment, and upload to the field, however that only does 'major' counts i.e 1.0 to 2.0 to 3.0 etc.

## How do I count in minor, decimals, from 0.1 to 0.2 to 03 or even 0.01 to 0.02?

To do this, you can follow the same logic, but use a float value instead of integer.

I had never used float either, so didnt know that it could do.
Float can be used for decimal values, so 0,01 (or 0.01)

* You initualize a variable for float
* Increment the variable, by 0.01 for a count from 0.01 to 0.02 for example
* Or increment by 0.1, to go up from for example 0.1 to 0.2.

If you wish to up an already existing value, set the variable to that value (perhaps from sharepoint)
Then use the same count method
Then use that variable, to update your column value.

It sounds easy when you put it like that, but it took me a while to figure out.

Hope this helps.