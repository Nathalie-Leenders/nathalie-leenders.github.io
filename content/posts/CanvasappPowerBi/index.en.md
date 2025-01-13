---
title: "How to embed a Power BI report into a Canvas app, and hide the nav & filter"
subtitle: "2 quick tips"
date: 2024-06-27T14:27:14Z
lastmod: 2024-06-27T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Canvas App", "Power BI"]
categories: ["Power BI"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "powerbitile.png"
featuredImagePreview: "powerbitile.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## Step 1 - Embed a Power BI report into a canvas app

I dont know about you, but it took me a while to figure out why I couldnt add my report into a Power BI tile in a canvas app.
I knew I did it before, but of course didnt blog about it, so I forgot (lol)

It's actually really easy, and doesnt require you to reupload your pbix, add to tiles or others.

* Go to your Power BI workspace that holds your report
* Open the report
* Go to export
* Click on embed in website
* Copy the URL
* Go to your canvas app
* Add in or use an exisiting Power BI Tile
* In the TileURL, paste your embedded link between the ""

{{< img src="weblink.png" caption="Copy the embedded url, not the one for iFrame" height="800" width="500">}}

And there you go! No Power BI tile not seeing your dashboard, or needing to specify a tile.

{{< img src="initialreport.png" caption="The original report, without hiding the nav and filter" height="800" width="500">}}

You may notice it grabs your navigation and filter. Here's how to hide them:

## Step 2 - How to hide the navigation and filter

* Go back to your TileURL property
* At the end of the url, add the following code: 

```
&navContentPaneEnabled=false&filterPaneEnabled=false
```

The & sign specifies a new parameter, in this case we want to disable the navcontentpane, and the filterpane. We set both to false, and now they don't appear anymore!

{{< img src="initialreportwithoutfilternav.png" caption="Same Tile, but now without the navs and filter." height="800" width="500">}}

I hope these quick tips help.