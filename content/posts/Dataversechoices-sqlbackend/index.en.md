---
title: "Dataverse Choices to SQL backend- Update!"
subtitle: "How to get choices/dropdowns with a virtual table - SQL backend"
date: 2023-02-14T14:27:14Z
lastmod: 2023-02-14T14:27:14Z
draft: false
authors: [nathalieleenders]
description: "A 3-part blog to display the struggles I had in making this work"

tags: ["SQL", "Virtual Tables"]
categories: ["Model Driven Apps", "Virtual Tables"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "powerapps-logo.png"
featuredImagePreview: "powerapps-logo.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

<!--more-->

{{< alert type=warning title="Warning" open=true >}}
This is a lenghty tale of the whole adventure getting this to work
{{< /alert >}}

Yannick Reekmans has helped me tremendously!! :pray:

We tested plugins, to make sure the form doesnt see the choice field, then map using either a java script or business rule to the value field, but even if we tell the plugin to ignore the attribute for the choice field, it would still try and submit it, and throw the error the virtual entity needed to be updated for the optionset. :upside_down_face:

{{< alert type=success title="Success" open=true >}}
This shows how to get around the whole issue, recap, choices arent supported

Yannick proposed I use a PCF Component, to wrap around the value field, to make it behave like a dropdown.
I used https://pcf.gallery/csv-dropdown-control/ from https://pcf.gallery/authors#ivan_ficko

- Import the Managed Solution
- Go to your components menu on the left, 
- Add in the component
- On your value field, in classic mode, open the properties
- Go to Controls
- Under the properties add in your csv values (use delimiter ; ) (I had to dive into the .js code for that one)

Now it’s a value field, that behaves like a dropdown, but is still being seen as the value field, and not a foreign body trying to be updated.
{{< /alert >}}

**Now onto the fun part:**

# Old content - Disclaimer - This does not work!

{{< alert type=warning title="Warning" open=true >}}
Hold on, scratch that, ignore all below. This does not work!
{{< /alert >}}




I’ve consulted with Microsoft support. and currently SQL virtual connector does not support choice options…

I’ll try and find a way around this, and let you know once I do. Microsoft will change their documentation to reflect this…

{{< img src="zoe-muppets.gif" caption="Bummer!" height="800" width="600">}}

#### Old content - Disclaimer - This does not work! Old blogpost for reference only, or, how to use business rules to fill a field value ####

I’m developing a solution with a SQL data backend. Using Virtual Tables I’ve mapped my SQL DB’s to Dataverse.
I need quite a lot of dropdown/optionsets in my forms, but my SQL column is NVARCHAR (string/text)
There is no choice column in SQL available.

So how do I go around this?

I’ve started thinking about the good old ‘Patch’ capability, to have a stand alone dropdown, patch the value to a field and that works.

A colleague found an old optionset D365 blog post, and this is how we solved the issue:

- Create a choice in your solution. For this I’ll go with City1
- Add the values you need to that choice (City1)
- In your form, add the column you need (City2)
- Add a new field, choice, choose from the existing Optionset you created in the first step
- Double click on this new field
- Go to Business Rules
- Add a new rule
- If City1 field value matches “New York”
- Update Field Value for City2 to “New York”

{{< img src="business rules.png" caption="Business rule - Set Field Value" height="800" width="600">}}


- Hide the City2 field as it’s not needed to show, City1 will have the dropdown, City2 will do the actual upload.

  Now when you select New York from the dropdown in City1, it automatically does the same for City2 which is where the historical data also resides.

This might be a bit convoluted, if you have another way please let me know :pray: .