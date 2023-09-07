---
title: "Quick tip! Using QuickChart.IO with dynamic values (Canvas app edition)"
subtitle: "How to use Quickchart.IO with variables and collections"
date: 2023-04-12T14:27:14Z
lastmod: 2023-04-12T14:27:14Z
draft: false
authors: [nathalieleenders]
description: "How to use quickchart.IO to get charts in your Canvas App and display dynamic information"

tags: ["QuickChartIO", "CanvasApps"]
categories: ["Canvas Apps"]


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

(This is lengthy for a quick tip, whoops, scroll all the way down to quickly check the fix)

First of all, FULL credit goes to Pen Warner who graciously shared his QuickchartIO code with me that he used for his app. His app is awesome, check that out here.

He’s on Twitter here: @p3nf0ld
His Blog

I was trying to do dynamic data into a quickchart.IO code, which I learned how to do in Kristine’s video here
Go check her out as well, she’s awesome!

But, getting the chart in my canvas app, I couldn’t figure out how to add in values from variables or collections as the EncodeURL command uses plain text, and my values are not.

I reached out on Twitter, tagged Kristine, and Pen responded, and very graciously decided to offer me his code.
I’ve asked him if I could share, and he said yes, so here’s how to edit your Chart to add in variables, collections and more.

Add in Basic chart (courtesy of Kristine’s video):

- Go to QuickChart.IO
- Choose the chart you want
- In your Canvas app, add in an image.
- In the Image property, type the following:

`  "https://quickchart.io/chart?c="& EncodeUrl(" ")`


- Between your `" "` you’ll want to paste the code from the chart URL (don’t copy `/chart?c=` as you already have that before your EncodeURL)

- Modify the data labels, datasets, backgrounds etc and that works (Takes some practice)

(If you get a token error, check for any characters that may be in the wrong place, or missing brackets etc)

Here’s where the “Quick Tip" comes in and why I needed help.

If you try and type in your collection, or variable in data it won’t recognize it.

You need to wrap it as follows:

Old:

```
data:[1,2,3,4,5]
```

New:

```
    data:["& First(Col1).Value & ",
            "& First(Col2).Value & ",
            "& First(Col3).Value & ",
            "& First(Col4).Value & ",
            "& First(Col5).Value & "]
```

**So use `"&  your variable/collection &"`**
