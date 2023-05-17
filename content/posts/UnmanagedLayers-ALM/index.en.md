---
title: "Quick tip! Unmanaged layers - updates not moving through environments (ALM)"
subtitle: "Handling unmanaged layers"
date: 2023-03-16T14:27:14Z
lastmod: 2023-03-16T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["PowerApps", "PowerAutomate"]
categories: ["Powerapps"]
series: [how-to-doit]

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

I had this issue today and figured I’d write a quick tip for it.

I’ve changed my app, modified flows, everything works fine in Dev, publish customizations, export as managed and move to Test. Verified the client can see the new app version, and asked her to test.

Uh-oh, the flows aren’t reflecting changes.
{{< image src="giphy.gif" caption="XML Mappings" height="1000" width="800">}}

## Issue: Changes made in one environment, don’t reflect in another environment in a managed solution

## Solution/Fix: Check on your Flows, or anything not reflecting the changes, for the Solution Layers

- Go to your flow for example, the ellipsis (…) and check the Solution Layers.
- Check if there is an Unmanaged layer there.
- Remove this layer, and reimport your package.
- Test and it should have updated, if not, check for more unmanaged layers.

## What are unmanaged layers and why do they occur?

If you have a managed solution, and make any edit (could also be just open a flow run and save it) it can create an edited ‘unmanaged’ layer, and this could cause your updates to not go through.

Check out this Microsoft article on more indepth explanation on it: <https://learn.microsoft.com/en-us/power-platform/alm/solution-layers-alm>
