---
title: "Setting conditions on the visible property - Canvas App"
subtitle: "How to hide based on conditions"
date: 2023-07-21T07:27:14Z
lastmod: 2023-07-21T07:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["PowerApps", "Canvas App","Conditions"]
categories: ["Powerapps", "Canvas App"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "powerappslogo.png"
featuredImagePreview: "powerappslogo.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
# Setting conditions on the visible property - Canvas App

How can I hide my items/control based on conditions?

You can of course use an IF statement, or Switch, and work from there.

True - shows the item
False - hides the item

# But how can I do this dynamically? 

You can use Environment Variables. These can be changed when you move between environments (for ALM purposes)
Set an environment variable in your solution, add the desired persons email address(es) and refresh your datasources in the Canvas app.

Add datasource: 
* Environment variable definition
* Environment variable Values
* Office365Users

Now comes the trickier part, how to leverage these?

Go to the Onstart, and type the following code:

Set(varofyourchoice, LookUp('Environment Variable Definitions', displayname="nameofenvvariable").defaultvalue);

On the visible of the field you want to hide; If(Office365Users.MyProfile().Mail in varofyourchoice,true, false)

Now, if the person who is logged in, matches the email address mentioned in the environment variable, it's displayed, if they're not, it wont show.

Neat right?