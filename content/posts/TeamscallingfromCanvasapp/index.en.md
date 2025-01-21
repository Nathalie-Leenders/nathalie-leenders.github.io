---
title: "Calling a number in Teams from a Canvas app"
subtitle: "How do I call from my app?"
date: 2023-09-07T09:27:14Z
lastmod: 2023-09-07T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Canvasapps", "MicrosoftTeams"]
categories: ["CanvasApp"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "callfromcanvas.png"
featuredImagePreview: "callfromcanvas.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## How do I call someone in Teams, from a canvas app?

I have a use case, where someone wants to press a button or phone icon, and that teams calls a specific person, how do I do this?

There are a few ways to call someone: 
* To a defined global, context, or environment variable
* Specific persons
* Pre-defined phone number

Use the Launch command to launch a website that in turn launches MS Teams

## To a prefined variable

- Use the concatenate function to create the string, for example:

`Launch(Concatenate(https://teams.microsoft.com/l/call/0/0?users=4:,VarPhonenumber))`

VarPhonenumber in this case holds the number

## Environment variables

- You can also use environment variables for the number, easy to maintain once the app had launched.
- Add to your data sources: Environment variable definitions and Environment Variable Values
- On your onstart of the app - add this command:

`Set(varyourvarname, LookUp('Environment Variable Definitions', 'Display Name'="YourEnvVarName").'Default Value');`

This looks up the variable, and retrieves the default value. You can also grab the current value if you want.

Then do the same as for the predefined variable and add your variable there.

## To a specific user

`Launch(https://teams.microsoft.com/l/call/0/0?users=user1,user2)`

{{< alert type=tip title="Tip" open=true >}}
Take note of your organization setting with prefixes, if they already have a +1 prefix through teams (or your other area number) you dont need to add this in your code/variable
{{< /alert >}}