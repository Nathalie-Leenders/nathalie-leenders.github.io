---
title: "Adding a count to your Power Automate Flow (Integer/Increment variable)"
subtitle: "How to use an Integer variable"
date: 2023-01-03T14:27:14Z
lastmod: 2023-01-03T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Variables", "Power Automate"]
categories: ["Power Automate"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "varcount step 1.png"
featuredImagePreview: "varcount step 1.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

Starting with an intro to variables, I want to explain how you can use a very simple counter to your Power Automate flow.
Let’s say you have an Apply to each, like 5 entries, and after this you email your client with the combined data from those 5 entries.

Add the following steps:

- On top of your flow, add an Initialize Variable
- Choose a name
- Select Type Integer
- Leave Initial value blank (or select a starting count)
- In your Apply to each, add an Increment Variable (Increment means to add/change the count)
- Increment the variable you’ve created on top with 1 in the value.

Add the variable after your Apply to each step wherever you want, and it will give you the count.

{{< img src="increment step 2.png" caption="Count per Apply to Each with 1" height="800" width="800">}}

