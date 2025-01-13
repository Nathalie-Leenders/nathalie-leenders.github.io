---
title: "How to get a PowerBI report in an adaptive card (the hard way) - Update!"
subtitle: "Explaining how to do this without native support"
date: 2023-10-17T09:27:14Z
lastmod: 2023-10-17T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["PowerBI", "Microsoft Teams","Adaptive Cards"]
categories: ["Power Automate"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "powerbireport.png"
featuredImagePreview: "powerbireport.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## Usecase

You want to show a report in Microsoft Teams, or when someone requests a sales overview of 2022, a card appears with that report in it. You can also of course set up Powerbi alerts as a trigger.

Right now, natively, dynamic reports do not work in cards. However, at MPPC they did announce this is possibly coming!

For now though, here is a way to make this possible.


## What do I need?

- Specific bookmarks you can call
- PowerBI Premium License
- Export to image enabled in PowerBI Admin center
- Azure blob storage (not OneDrive)
- Make sure the image is 25KB Max

## How to do this:

### Prepare your PowerBI Report

- Create bookmarks to call
- Create filters and set the bookmarks accordingly

- Set up Azure BLOB Storage so you can leverage it in your flow

### Create a Power Automate Flow
- Trigger: When a keyword is mentioned in Power Automate

- Actions:
    - Get Message Details for Teams, grabbing the trigger message ID
    - Export to file (PNG) for Power BI Reports
    - Set bookmark Name and State
    - Save as image on Azure Blog Storage
    - Create a Teams Adaptive card in adaptivecard.IO Designer
    - Reply with adaptive card designer that responds to the keyword Get me, and Sales overview of 2023

Save and test your flow!

Oh and don't forget to pray, don't include your trigger word in your reply, and troubleshoot your JSON code if it doesnt work. 

Good luck!

{{< img src="sales.png" caption="PowerBI Report in an Adaptive Card" height="600" width="800">}}

After I posted this blog, I got in touch with Luuk Postuma, who had been trying to get this to work, and he has shared his feedback so we can all learn from it:

I attended Nathalie’s session at MPPC 2023 and cam home very excited to try this out.  But, when it came to the details, I immediately ran into issues and bombarded Nathalie with a bunch of emails.  The main issue I was having (among others) was that I only have a Power BI Premium-Per-User license and I just could not get it to work.  I also have a Fabric 60-day trial, and figured that should be enough for me to use the “Export To File for Power BI Reports” 

{{< img src="luuk.png" caption="I kept getting this error" height="600" width="800">}}

Based on some Google searches, it appeared that I would need a full Power BI Premium license, but after some more digging and trial and error, I learned that I was wrong!

You can use “Export to File for Power BI Reports” with a Premium-Per-User license and a Fabric Trial license!!

Here is the step I missed:
-  You have to create a Power BI Workspace that uses the Fabric Trial capacity.  To do this, go to your app.powerbi.com, select the settings gear at the top right and then select “Admin portal”, then select “Workspaces”.

{{< img src="luuk2.png" caption="I kept getting this error" height="600" width="800">}}

{{< img src="luuk3.png" caption="Find your workspace in the list, click on the dots and select “Reassign workspace”:" height="600" width="800">}}

Then, select the Trial option:

{{< img src="luuk4.png" caption="" height="600" width="800">}}

At this point, you should be good to test the solution until your Fabric Trial runs out.  What I’ll do then depends on how much money my company wants to spend 😉

Now, for a few notes on using the “Export to File for Power BI Reports” action.  Let me explain my simple test flow first.  It goes like this:
If a keyword (in this case ‘revenue’) is used in a specific Teams channel, I want it to export my Power BI revenue report to a .png file and then send it as an attachment in an email.
At a high level, it looks like this:

{{< img src="luuk5.png" caption="" height="600" width="800">}}

In the right branch, Teams simply responds to say “You will receive an email with the report in a minute” (because for me it typically takes 40 to 60 seconds).
The left branch takes care of the .png export and emailing.  The first part (Export to File….) looks like this:

{{< img src="luuk7.png" caption="" height="600" width="800">}}

The Workspace value should be a workspace that you enabled as your Fabric (or Fabric Trial) workspace.
The Report is the Report in that workspace.
The Export Format can be PDF, PPTX or PNG.  For an image, choose PNG.

I also wanted to include a filter, and that took a bit of Googling too.  But you can find a decent reference here (which relates to urls but work in this context too – instead of using URL?filter=Table/Field eq ‘value’ just use Table/Field eq ‘value’):

Filter a report using query string parameters in the URL - Power BI | Microsoft Learn
(https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-url-filters)

One note on this is that if you already have filters in your report, the filter you define in the Export to File settings will not work.

Another thing I could not get to work was extracting just a visual from the report.  Nathalie suggested just taking the visual, copying it to a new page, and then referencing that page instead.  If you leave the filter off the new page and use a filter as I’ve shown in the Export to File settings, this will work best.

Another thing to be aware of is that your table name (if used in the ReportLevelFilters Filter expression) should not contain spaces.  At first (using the example above) I was using my ‘Date Table’, but after it didn’t work right, I changed the table name in my PBIX file to ‘DateTable’ and then the filter started working.

For the Pages pageName section, do not use the actual display name for the report.  Instead, you will find that in the URL of your report.

In the next step, I used the Send an email (V2) to send the image as an attachment, using the ‘Body’ result from the “Export to File from Power BI” step:

{{< img src="luuk8.png" caption="" height="600" width="800">}}

Finally, when this is all done, I post another reply to the Teams channel indicating that the file has been sent as shown here:

{{< img src="luuk9.png" caption="" height="600" width="800">}}

And that’s it!

Would I use this flow in real life?  I would definitely make some improvements – for example, using an adaptive card to ask for the date parameters and then passing that on to the ReportLevelFilters Filter expression in the “Export to File from Power BI” section.  I would also need to capture the name/email address of the user that posted in Teams so that the email would go to them (I only tested with myself).  And, I might not reply to the messages in Teams per se, as anyone in the channel would see them and I wouldn’t want everyone to be inundated with those message.

I hope this helps!

_____

I really thank Luuk for his dedication in making this work, and we hope it helps somebody!