---
title: "How to use parameters in an embedded Power BI link"
subtitle: "Or: A quick overview - how to use parameters"
date: 2024-07-01T14:27:14Z
lastmod: 2024-07-01T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Canvas App", "Power BI"]
categories: ["Power BI"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "powerbitile2.png"
featuredImagePreview: "powerbitile2.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## My scenario:

This is an addition to my earlier blog, and with a few more parameters you can use. Credits go to https://community.fabric.microsoft.com/t5/Service/All-possible-Power-BI-Service-embed-URL-parameters/m-p/3053763 but I did want to share as well.

I'm struggeling to fit a canvas app with a powerbi tile that has an embedded report into a teams app (gotta love it) and my report wont fully fit. I'm trying to find the magic combo of these parameters.

## How do I use these parameters?

Get the embedded URL from your report (Go to export, and copy the embed link)

You will see it already has 2 parameters in there. The parameter string starts with ?, followed by the parameter name and value. If you want to add another one, use the & sign.

Example: https://app.powerbi.com/reportEmbed
?
reportId=REPORTIDHERE
&
autoAuth=true
&
ctid=IDHERE

See how I've split it up so you can see the parameters? 
It starts with the ? and uses the & to add new parameters to the string.

## The parameters

These are the ones from the blog, if you know of any others please dont hesitate to let me know!

# reportSection: 
This parameter allows you to navigate to a specific report page by providing the page name.

Example: ?reportSection=ReportSectionName

# filter: 
You can apply filters directly within the URL to display only certain data when the report loads.

Example: ?filter=TableName/FieldName eq 'value'

# bookmark: 
Navigate to a specific bookmark in the report by specifying the bookmark name.

Example: ?bookmark=BookmarkName

# pageName: 
Similar to reportSection, it allows you to open a report to a specific page.

Example: ?pageName=ReportPageName

# pageView: 
This parameter controls the view mode of the page, such as "FitToWidth" or "ActualSize."

Example: ?pageView=FitToWidth

# navContentPaneEnabled: 
This parameter shows or hides the navigation pane.

Example: ?navContentPaneEnabled=false

# filterPaneEnabled: 
Shows or hides the filter pane.

Example: ?filterPaneEnabled=false

# fullscreen: 
Opens the report in full-screen mode.

Example: ?fullscreen=true

# autoplay: 
Sets the report to automatically play through pages.

Example: ?autoplay=true

# chromeless: 
Opens the report without the Power BI navigation chrome.

Example: ?chromeless=1

# ctid: 
The tenant ID, which can be used when you want to embed a report for users from a specific tenant.

Example: ?ctid=tenantGUID

# groupId: 
Specifies the workspace where the report is located.

Example: ?groupId=workspaceGUID

# config: 
Allows passing in a configuration string that can control visual configuration settings.

Example: ?config=configurationString

# actionBarEnabled
Hides or shows the action bar

Example: ?actionBarEnabled=false


