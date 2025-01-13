---
title: "Another quick tip! Removing blank items in a compose"
subtitle: "How to use compose and expressions to remove blanks"
date: 2023-03-29T14:27:14Z
lastmod: 2023-03-29T14:27:14Z
draft: false
authors: [nathalieleenders]
description: "How to use compose and expressions to remove blanks"

tags: ["Power Automate", "Expressions"]
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

This is a follow-up post for my earlier blog, [Combine data from multiple apply to each into a single output file (Variables and compose)](/posts/combinemultipledata/)

[Cat Schneider](https://yerawizardcat.com/) helped me tremendously on this one, full credit to her! Find her blog here

{{< img src="pusheenthankyou.gif" caption="Thank you" height="1000" width="800">}}

Following these steps, results in some empty values also being added.

For example, if there is an empty entry, but the item exists and you specify that item it will show up.

Such as:

**Log Generic -**
**Log Feelings - it was a great day today**
**Log Cats - Pet some kitties**

Using an expression in your compose you can filter out if the log entry is empty, to not display it.

- Go to your compose action item, Dynamic Content, click on Expression, and use the following logic:
If, not empty, your log item, compose Log Generic - with your log entry

  ```PowerFx

  If(not(empty([Item here for the log entry])),concat('Log Generic - ',item here if needed,': ',([log item here]),'<br>'),  '')

  ```

P.s, the expression window is really small, I recommend using something like Notepad ++ to write it, then copy/paste to your expression field.

This statement if applied to all of course, will look like:

**Log Feelings - it was a great day today**
**Log Cats - Pet some kitties**

The empty log entry wont show up.
