---
title: "Combine data from multiple apply to each into a single output file (Variables and compose)"
subtitle: "Using variables and apply to each to combine data"
date: 2023-01-03T14:27:14Z
lastmod: 2023-01-03T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Variables", "Power Automate"]
categories: ["Power Automate"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: ""
featuredImagePreview: ""

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

This was a tricky one to figure out, took me a few hours and failed attempts.

I have log entries, and my flow is triggered to email them all that were submitted the day prior, at 8am.
Getting the data into the email pulls it into an apply to each (which makes sense, but is not what I want)

So, there is a way around the apply to each, but I’ll not get into that here.

Lets say, you have an Apply to each, it can be 3 instances, 10, 15 etc.

All the data you want combined and a single email sent.

## How to do this?

In your Apply to each, do the following:

- On top of your flow, initialize a string variable
- Add a Compose step
- Add the data you need
- After each line, add `<br>` (break)
- One `<br>` is a line break, `<br><br>` is a new paragraph
- Append to string variable
- Select the Output from your Compose, and add 2x `<br>`

By using append, it adds onto the variable, so each time the action is selected it adds to it, and adding a new paragraph.

Now add the variable wherever you want (email, teams card, update rows etc)

{{< image src="variable.png" caption="Combining data" height="800" width="800">}}
