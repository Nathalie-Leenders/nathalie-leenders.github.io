---
title: "How to use regex in Power Automate Cloud flows"
subtitle: ""
date: 2024-07-11T14:27:14Z
lastmod: 2024-07-11T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["RegEx", "Power Automate"]
categories: ["Power Automate"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "regex.png"
featuredImagePreview: "regex.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

I had a client scenario, where I needed to grab a 6-digit number from an incoming email subject. It wont always be in the same place, and also possibly not be the only digits. So I couldnt use trim, length or other that I could think off.

Unfortunately, or luckily, depending on how you look at it, my dear friend Cat Schneider introduced me to regex

{{< img src="beakerfunny.gif" caption="When you know you know, regex isnt easy." height="800" width="500">}}

Thankfully someone within my company helped me guide a regex expression I could use, but I do want to share this awesome resource:

[Regex 101, an amazing site with explanations as well](https://regex101.com/)

However, I found out regex doesnt work in Power Automate Cloud. (It does work in RPA desktop flows)

This one took me a while, but I ended up finding this blog post: [Regular Expression Support in Power Automate, via Custom Code Connector](https://steelcutbytes.com/2021/10/04/regular-expression-support-in-power-automate-via-custom-code-connector/)

Full credits to them, I used their swagger, and created a custom connector with it.

Then I added the step in my cloud flow, added in my regex, and I could do regex filtering on my subject!

{{< img src="regexscreenshot.png" caption="The action in Power Automate, able to do my regex" height="800" width="500">}}

I hope this helps, merely sharing for exposure, full credit to Steelcutbytes for this one!