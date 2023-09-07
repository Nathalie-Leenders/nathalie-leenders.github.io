---
title: "Get output from Adaptive Card choice sets"
subtitle: ""
date: 2022-10-19T14:27:14Z
lastmod: 2022-10-19T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Microsoft Teams", "Adaptive Cards"]
categories: ["Power Automate","Microsoft Teams","Adaptive Cards"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "MS_Teams_logo_ws.png"
featuredImagePreview: "MS_Teams_logo_ws.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

Adaptive cards is the name for the pop-up you can get in Teams, with custom content asking you to confirm something, or to submit a remark.
One way of creating them is through Adaptive card Designer (JSON).

Another way is to use the new Cards (preview) method in PowerApps maker - find out how here: Microsoft Learn Page - <https://learn.microsoft.com/en-us/power-apps/cards/overview/?wt.mc_id=DX-MVP-5005318>

If you want to use your adaptive card as for example an approval, or you want the color choice you need to get the data that the card receives.

- On <https://adaptivecards.io/designer/> design the card the way you want it.
- Make sure on the right-hand side, to add an ID element to your button or choice field.

This ID Element is important so you can recognize your data later on in the PARSE JSON step.

- Once designed you can copy the code from the lower left corner Card Payload Editor into a text editor (to save for later/backup) or paste directly in your Flow.

The new Cards Preview function offers the same functionality, however while I find the UI easier to use, the technical coding backend to it doesn’t give you an error when you don’t specify the ID.

Your flow run will fail as it needs this parameter. To bypass, I copy/paste the code from the Card Preview option, into the Card Payload Editor from Adaptivecards.IO and check for an error there.

## Power Automate

- Once you designed your card, insert it in your Power Automate Flow:
- Add a step, click on Teams, Post an adaptive card and wait for a response.

{{< image src="AdaptiveCard-EmptyBody.png" caption="" height="300" width="700">}}

- Choose your channel or chat option, and in the body copy/paste the code from the designer or adaptive card in your adaptive card message body.

Use cases for adaptive cards:
* Approvals
* Needing information through text output
* Different choices of material, feedback or other choice options

(Optional) I like to add a variable at the top level of my Power Automate Flow, something like VarColor so I can store the information from the output from the Parse JSON. You can of course just keep it as regular dynamic content.
(If you’re using different nested steps a variable may be easier to work with)

{{< image src="AdaptiveCards-CardinTeams.png" caption="" height="500" width="700">}}

- After your Teams card, add an action for Parse JSON (JSON sounds scary but I’ll walk you through it)
- On outputs, type the name of your card step, add _for spaces. Example: `outputs(’Post_adaptive_card_and_wait_for_a_response’)?[’body’]`
- On the schema area type `{}`

{{< image src="AdaptiveCard-parse json filled out.png" caption="" height="450" width="1000">}}

- Run your flow and check the run.

{{< image src="AdaptiveCard-Bodytocopy.png" caption="" height="800" width="600">}}

- Copy the full output of the Teams adaptive card
- Go back into edit, and in your Parse JSON step, click on Generate from Sample
- Paste the whole body there.
- Complete/save

{{< image src="AdaptiveCard-DynamicContentResult.png" caption="" height="450" width="1000">}}

Now the output that’s in your newly generated schema will appear as Dynamic content.

I like to Append to string Variable the Data for Color for example, but of course you can leave this step out.

**Hope this helps, let me know if you have any questions.**
