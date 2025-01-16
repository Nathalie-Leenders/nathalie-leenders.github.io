---
title: "Sending an email from a Model Driven App on a command bar button"
subtitle: "Leverage the Command Bar with PowerFX to use the Mailto function"
date: 2023-08-16T14:27:14Z
lastmod: 2023-08-16T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Model Driven App", "Power FX", "Command Bar", "Custom emails"]
categories: ["Model Driven App", "Power FX", "Command Bar"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "imagecommandbar.png"
featuredImagePreview: "imagecommandbar.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

# What is the command bar?
The command bar is the ribbon on top of your Powerapp.

# How do I edit this?
* Go into edit mode for your Model Driven App
* Right click on your table, Edit the Command Bar
* This opens the Command bar editor

# What are the 4 areas?
1. Main Form - This is the one I'm focusing on right now
2. Main Grid 
3. Subgrid View 
4. Associated View 

# Reference material
Scott Durow created this and it has been adopted by Microsoft ever since. If you need any information on all of the functionality, he has awesome video's and sessions on it.

My focus here in the PowerFX side of it to send an email, but it does support JavaScript.

# Use case
I have a business case, where I want to get information from my Model driven app form, open an email thats pre-populated so I can use an add-in we only have in the Outlook client.

# How do I do this?

* Open up the command bar editor.
* Click on New Command
* On the Onselect, you can type your PowerFX code
* On the Action, make sure it says Run Command (Not Run Javascript)

Use the following PowerFX code:
  ```
Launch("mailto:" & "youremailadress" & 
       "?subject=" & "" & 
       Self.Selected.Item.'whateveryouwant' & " : " & Self.Selected.Item.'whateveryouwant'
       & "&body=" & "put your body text here" & " body text " & Self.Selected.Item.'whateveryouwant'
`)`
  ```
Use 
```
"%0D%0A"
``` 
for line breaks. `Char(10)` and `Char(13)` wont work.

If you want to add a cc, do the following:

After the email adres, directly put 
`?cc=ccemail@email.com`


Publish and Save, Play, and test your code!


Oh, and another tip, don't duplicate your button if you have PowerFX into it. It will throw weird errors (like no longer recognising your Self.Selected.Item.something properties) Just click New and re-do what you want.


