---
title: "Custom document link sharing with Sharepoint and Power Automate"
subtitle: "How do I leverage the other permissions, and send a sharing link to external?"
date: 2023-09-11T09:27:14Z
lastmod: 2023-09-11T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["PowerAutomate", "Powershell","Sharepoint"]
categories: ["Sharepoint"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: "Dynamicexternalsharing.png"
featuredImagePreview: "Dynamicexternalsharing.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## Usecase

You need to share a file from sharepoint to an external user, in an automated process. No manual 'create link' actions needed on the sharepoint site. You can then email this link to your external client.

Default on Power automate for a sharing link for sharepoint, is to set the Link Scope to either:
1. Anyone with the link (including anonymous)
2. People in your organization

    This explains how you can use the 'people with existing access' sharing type.


## Step 1 - Make sure security is OK with you doing this!
3. Align with your client/business/security if this is OK because you need to open up external sharing!
You can emphasize this reduces the risk that otherwise you'd have with the 'Anyone with the link (including anonymous)'option.

## Open up external access to your sharepoint site
4. First start with setting up your library, and to have it receive external clients.
5. We had a sharepoint admin who did this for us, check out this article on how this works:

    [Microsoft Learn - External sharing overview](https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview//?wt.mc_id=DX-MVP-5005318)


## Set the Sharepoint Library default permissions
6. Next, add your external user to your sharepoint site and library (make sure to break parent inheritance if you need to set per individual library), (oh and don't remove your own access...lol)

## Add permissions to Library

7. Ask someone with the access, or if you have it yourself, run the following Powershell script:

    `Set-SPOSite -Identity YourSiteURLHere -DefaultLinkToExistingAccess $true`

    This sets the site permissions to by default have the sharing set to People with existing access
    Meaning, if you have added them to your externally shared site, they will be able to open the file

## Create new column to receive the value

8. On your datasource, create a new text column, data type URL
9. You can add this in your canvas/model driven app
10. You can also re-use, or add to the ribbon in an email (see my previous blog post on that)

## Power Automate - create file and get file properties

11. Initialize Variable
12. On Power Automate, create your file
13. Get file properties
14. Append to string variable - Link to Item - 
15. And you need to add the following: `?csf=1&web=1&e=gTrs9z`
16. I'm not sure and havent tested how long these work, but for now this works for any link you share
17. Update row on your datasource
18. Update with your variable to your External URL column


You can now reuse the link, and your sharepoint site has been set up for external access, and you're creating an item thats able to be shared externally!