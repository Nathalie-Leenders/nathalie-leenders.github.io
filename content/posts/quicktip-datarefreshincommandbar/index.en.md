---
title: "Quick tip - data refresh in command bar"
subtitle: "How to refresh your data in a MDA command bar"
date: 2025-09-28T14:27:14Z
lastmod: 2025-09-28T14:27:14Z
draft: false
authors: [nathalieleenders]
description: "How to refresh your data in a MDA command bar"

tags: ["Command Bar", "Model Driven App", "Dataverse"]
categories: ["Command Bar", "Model Driven App", "Dataverse"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "screenshot.png"
featuredImagePreview: "screenshot.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

This is the quickest tip ever, but I just spent hours trying to figure this out (ouch) so figured I'd share.

I'm working on a custom button in the command bar in a Model Driven app. I want it to trigger my flow, so I'm doing a Patch to a new column Workflow started. Seems easy enough.

```PowerFX
Patch(
    Datasource,
    Self.Selected.Item,
    {WorkflowStarted: true}
);
Notify("Flow started", NotificationType.Success)
```

Whatever I do, I cannot get it to recognise the column. It kept saying: The specified column doesnt exist.

{{< img src="screenshotcropped.png" caption="Column not recognised." height="197" width="555">}}

No logical name, schema name, display name, with or without ''. It just wont recognise it.

I refreshed the app, published, reloaded, nothing.

Then I realised, eventually, that it creates something in the component library that I had to create in order to create this button.

I loaded the component library, refreshed my data there, and it finally found my column.

I hope this saves someone the time it took me to do this. Oops. But, problem solved.