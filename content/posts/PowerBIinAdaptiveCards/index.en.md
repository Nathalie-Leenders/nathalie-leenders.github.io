---
title: "How to get a PowerBI report in an adaptive card (the hard way)"
subtitle: "Explaining how to do this without native support"
date: 2023-10-18T09:27:14Z
lastmod: 2023-10-18T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["PowerBI", "Microsoft Teams","Adaptive Cards"]
categories: ["Power Automate"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "powerbireport.png"
featuredImagePreview: "powerbireport.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## Usecase

You want to show a report in Microsoft Teams, or when someone requests a sales overview of 2022, a card appears with that report in it. You can also of course set up Powerbi alerts as a trigger.

Right now, natively, dynamic reports do not work in cards. However, at MPPC they did announce this is possibly coming!

For now though, here is a way to make this possible.


## What do I need?

- Specific bookmarks you can call
- PowerBI Premium License
- Export to image enabled in PowerBI Admin center
- Azure blob storage (not OneDrive)
- Make sure the image is 25KB Max

## How to do this:

### Prepare your PowerBI Report

- Create bookmarks to call
- Create filters and set the bookmarks accordingly

- Set up Azure BLOB Storage so you can leverage it in your flow

### Create a Power Automate Flow
- Trigger: When a keyword is mentioned in Power Automate

- Actions:
    - Get Message Details for Teams, grabbing the trigger message ID
    - Export to file (PNG) for Power BI Reports
    - Set bookmark Name and State
    - Save as image on Azure Blog Storage
    - Create a Teams Adaptive card in adaptivecard.IO Designer
    - Reply with adaptive card designer that responds to the keyword Get me, and Sales overview of 2023

Save and test your flow!

Oh and don't forget to pray, don't include your trigger word in your reply, and troubleshoot your JSON code if it doesnt work. 

Good luck!

{{< image src="sales.png" caption="PowerBI Report in an Adaptive Card" height="600" width="800">}}