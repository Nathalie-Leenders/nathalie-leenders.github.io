---
title: "How to get submitted values from your Choices/optionset column in Dataverse"
subtitle: "Use Compose and combine with append to string variable"
date: 2023-03-07T14:27:14Z
lastmod: 2023-03-07T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Power Automate", ""]
categories: ["Power Automate"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "power-autoamte-vs-flow.webp"
featuredImagePreview: ""

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

## Ever noticed that when you select your columnname, in the dynamic data, it doesnt give you the result and it stays blank?

I’d like to explain how you can get the value for your dropdown.

**There is a difference between the display name, and the actual name of that value.
Dataverse often uses `@OData.Community.Display.V1.FormattedValue` instead of the previous `new_value_label`.**

In your Power automate flow, either run the flow and check the body, or add a Compose step after your Get Items/Update Item etc. step for Dataverse.

## How to do this?

- In your Compose, add the value of your dataverse action.
- Run your flow
- Copy the contents of your compose into notepad

  {{< img src="compose step.png" caption="Compose example" height="800" width="600">}}

- Check out the values for the column you want, for example I have a simple dropdown for City.

  ```json
  "cr215_city@OData.Community.Display.V1.FormattedValue": "New York"
  "cr215_city": 941200000
  ```
  
- These 2 entries represent the dataverse value for the choice/optionset, and the actual name.

- In your flow, copy the selected step
- Paste in notepad and it will look similar to this: `@{items('Apply_to_each')?['cr215_city']}`

- Remove the @{, and the } at the end.
- Modify the cr215_city  into cr215_city@OData.Community.Display.V1.FormattedValue
- Paste into the expression area, where you want the value to come into.

{{< img src="old.png" caption="Old" height="1000" width="800">}}

{{< img src="new.png" caption="New" height="1000" width="800">}}

- Run your flow and it should display the correct name/value for you.

If not, check if it’s correct based on your output from the dataverse action.
