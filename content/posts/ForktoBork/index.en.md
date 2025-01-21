---
title: "Changing the button for “Fork” into “Bork!” for Github"
subtitle: ""
date: 2023-01-13T14:27:14Z
lastmod: 2023-01-13T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Github", "Muppets"]
categories: ["Github"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "swedish-chef-bork.gif"
featuredImagePreview: "swedish-chef-bork.gif"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

This has to be the best thing to come out of 2023 (and yes, it’s only January so that’s saying something)

My longest blog post and read to date, but I promise you it’s worth it!


I was on the First Time Contributor training yesterday, one of the Sharing is Caring sessions led by David Warner and Hugo Bernier. (<3) M365 & Power Platform | Sharing Is Caring (pnp.github.io)

In this training they explain how Github works, and how to edit an existing item using the Branches, Forks, Committing changes and how a Pull Request works. (I can highly recommend their sessions if you want to learn, there’s no recordings and it’s a safe space for all to ask questions and interrupt)

Mind you, it was getting late for me, after a full workday (perks of being in The Netherlands and different timezones) so my mind kept reverting to Bork! instead of Fork. I couldn’t unhear it.

So of course I shared this in the chat.

{{< img src="Microsoft-Teams image.png" caption="Chat excerpt from the Sharing is Caring session" height="500" width="300">}}


David Warner started quoting Swedish Chef, and Hugo posted that he’d make a browser extension out of it. Of course I didn’t think he’d actually do it.

After the training I did a post on Twitter how awesome this training was.

**Then this happened.**

{{< tweet user="NathLeenders" id="1613818231600340993" >}}

So, without further ado, with full credit to Hugo Bernier for being awesome, since we were both geeking out over this, he shared with me how he did this and it’s sooo easy!

- Go to refined-github/refined-github: Browser extension that simplifies the GitHub interface and adds useful features
- Install your extension suitable for your browser.
- Enable the plugin
- Once you install it, go to Extension Options and scroll to Custom CSS and paste the following CSS:

  ```
  #fork-button::first-line {
  visibility: hidden;
  position: relative;
  }

  #fork-button::after {
  content: “Bork!”;
  visibility: visible;
  position: absolute;
    top: 3px;
    left: 30px;
  }

  #fork-button::first-line {
  background-color: yellow;
  }`
  ```
## And there you have it; the button now says Bork! Enjoy ##

{{< img src="borkbutton.png" caption="Bork!" height="1000" width="800">}}
