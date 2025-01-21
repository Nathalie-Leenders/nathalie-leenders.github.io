---
title: "Dynamic content not displaying my action"
subtitle: "Quick tip to get your action to appear in the dynamic content"
date: 2023-06-08T00:27:14Z
lastmod: 2023-06-08T00:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Power Automate", "Microsoft Teams", "Adaptive cards", "Data operations"]
categories: ["Power Automate"]

hiddenFromHomePage: false
hiddenFromSearch: false

hero: "power-autoamte-vs-flow.png"
featuredImagePreview: "power-autoamte-vs-flow.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

I came across this today and wanted to share. I couldnt figure out why my output from the teams adaptive card was not an option to select in my Compose (no body or anything available). :sob:

### Scenario: 

You have an action in your flow, for example a teams adaptive card, and want to use the output somewhere. Whether thats in a compose, set variable, update row, doesnt matter. What you try and do, it wont show.

<!--more-->

{{< alert type=info title="Fix" open=true >}}
What I found, is that if you remove the dynamic content from your card (don't worry, you can re-add later, or copy/paste your json in a notepad file just in case) it will show!
{{< /alert >}}


So any dynamic content in an action, could stop your action from being shown as dynamic content itself.

Very frustrating, but at least with this workaround you'll be able to add your next step and use the output, just make sure to re-add your dynamic content in your action :grin: