---
title: "How do I automatically have a GUID in my field?"
subtitle: "Leveraging a Virtual Table SQL Backend, how do I get a GUID?"
date: 2023-28-11T09:27:14Z
lastmod: 2023-28-11T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["VirtualTable", "Dataverse","Javascript"]
categories: ["Model Driven Apps"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "guidlogo.png"
featuredImagePreview: "guidlogo.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## Usecase

I am creating a Model driven app, with a Virtual Table connected to SQL. In my SQL DB I have an external primary key field. How do I get an automatic GUID? The PowerFX code GUID() is not supported.

So I tried to do something on the ribbon, set the field,

``` PowerFX
With({I:Last(Werknems).TransactionID},Notify( I, NotificationType.Information));
    Patch(
        Werknems,
       Defaults(Werknems), //Row,
        {TransactionID:GUID()
        }
    )
```
However, since my field is mandatory, and it tries to save before it runs this (of course) it was saying the field wasnt filled in. So this didnt work.

Then I tried a Business Rule, setting the field value. However I found out formula is not available.

I called in my awesome friend Cat Schneider, we took a look at it, and realised there was no way to do this without resorting to pro-code.

So that left me with the last option (that I never thought I'd use) which is Javascript.

I knew from my PL400 training, that it was technically possible to run a Javascript, on the Onload form, and make it do a thing.

But how?

We started looking at different scripts online, which opened a call, had many different elements in it, but the function wasnt being recognised. Without having extensive knowledge of Javascript we couldt figure out at that time how to resolve it.

I tried to contact someone else, but of course with it being Thansgiving the following day I gave up for that particular time.

The following day, a friend of mine came over, and I knew he was an experienced pro-coder, so I asked him, how's your Javascript?

We went through the script, and through a shorter version I had. We removed the call, simplified the code, and figured out where to put the function.

Then we tested with just putting a simple word in our field to test if that worked.

(Pro tip, use the logical name of your field, so for example Cr3ae_fieldname)

Once that worked, we came up with this script:

# The solution

In Notepad++ (or any other code editor you use) paste the following code:

 ```Javascript
    // The function name is guifunction, as specified in the first code line.
function guifunction(executionContext)
//We pass through a parameter, executionContext which later on in the second line will be called upon. (it recognises it like this)
{
	//Code to run in the form OnLoad event 
	
    // grab the formcontext (the form)
		var formContext = executionContext.getFormContext(); 

		//Then we do a math equation, which generates a random GUID, returns a 16 character string with numbers and letters.
		function generateGUID() {
		   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
			  var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
			  return v.toString(16);  
			});
		};
		//   We then set that output into a variable.
		var guidvariable = generateGUID();
        // Then on the form, grab your fieldname (logical name) and set the value to your GUID Variable.
        formContext.getAttribute("cr3ae_externalprimarykey").setValue(guidvariable);
        
    }
  ```

Once this is done, save your file.

* Go into your form
* To the Event handlers
* Onload behavior
* Upload this as your Web resource (Javascript) library

{{< image src="eventhandler.png" caption="How I configured mine" height="1000" width="800">}}

Specify the function name as guifunction (or your own name of course)
Enable the setting ; Pass execution context as first parameter

Save, publish, and test your app.

{{< image src="guidfield.png" caption="My working GUID field" height="1000" width="800">}}

So with great help from 2 dear friends, I present to you, how to get a GUID in a Model Driven app using Javascript.