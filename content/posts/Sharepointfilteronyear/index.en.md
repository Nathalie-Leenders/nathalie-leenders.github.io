---
title: "Filter on date column with random years on SharePoint"
subtitle: "How do I filter on a list, for example for birthdays?"
date: 2024-02-20T09:27:14Z
lastmod: 2024-02-20T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["SharePoint"]
categories: ["SharePoint"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "SharePointlogo.png"
featuredImagePreview: "SharePointlogo.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## Usecase

You have a SharePoint list with birthdays, on a date column, but dont know how to filter on them to show the last few days or upcoming few days if someone has (had) their birthday.

I couldnt figure out how to do this, and then a colleague of mine Remco Bruijstens (thank you!) suggested this method, and after testing it worked. 
Kudos to him, and I wanted to share with you how to accomplish this.

## Step 1 - Create a calcucated column
 There is no way to filter on the existing date column, using ` [Today] ` with something like `([Today]-8,"MMDD")`
 It seems reasonable, but it wont work.

 So you'll need to create a calculated column, with the following code:

`=DATE(2024;MONTH(Datum);DAY(Datum))`

Datum in this case is the Date column of which my birtday dates are in.

{{< img src="calculatedcolumn.png" caption="Example of a calculated column called Jarig with Datum as the Birthday column" height="600" width="800">}}

## what does this do?

This creates a column, with your Month and Day from the Birthday column, with the (current) year 2024 in it. This way you can use `[Today]` as it uses this year.

## Step 2 - Set your filter

Go to your list settings, to the view, and on filtering add the following:

{{< img src="filter.png" caption="Example of a filter with Jarig as the columnname" height="600" width="800">}}

Show when items when column:

* Your column name on the first dropdown
* is greater than or equal to
    `[Today]`
    AND
* Your column name
* is less than
    `[Today]+8`

This gives you the current day birthdays, including the upcoming 8 days.

{{< img src="filterresult.png" caption="The completed view, with upcoming 8 birthdays" height="600" width="800">}}

And there you have it, kind of a workaround, but it does the trick.

I forgot to add, make sure to update the 2024 part of the formula on Jan 1st to 2025, it wont do it automatically.