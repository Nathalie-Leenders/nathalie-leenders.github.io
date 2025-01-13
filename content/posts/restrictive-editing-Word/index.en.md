---
title: "Setting restrictive security on a Word Template while leaving sections open (Restrictive editing)"
subtitle: "Working with Restrictive editing from the Developer Tools in MS Word"
date: 2023-04-07T14:27:14Z
lastmod: 2023-04-07T14:27:14Z
draft: false
authors: [nathalieleenders]
description: "This explains how to set security on a Word document, restrict the editing, but allow forms to be filled out, and certain sections to be edited. For example, to add in attachments or images."

tags: ["MSWord", "Security"]
categories: ["MSWord"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "Microsoft-Word-Logo.png"
featuredImagePreview: ""

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

# Another Word tip, oh my… #

This explains how to set security on a Word document, restrict the editing, but allow forms to be filled out, and certain sections to be edited. For example, to add in attachments or images.

It’s the most frustrating process, but I hope I can explain it clearly.

If you find you cannot add a continuous break, but it does a page break, check out this article, or redo your document (that’s what I did)

## setting Section breaks ##

- On the Layout tab in Word, you’ll find section breaks. You need these to identify the start and end of a protected section.
  (it wont tell you start-end, you’ll have to test by enabling protection, but we’re getting ahead of ourselves here)

> **Scenario**
>
> Let’s say you want this to be edited.
>
> And this to be read only.

You do as follows:

- Insert Continuous Section break (Start)
- Let's say you want this to be read only.
- Insert Continuous Section break (End)

This section is now protected.

And this to be edited.

If you leave it open it can be edited

{{< img src="RestrictEditing-11.png" caption="Breaks start and End" height="1562" width="2400">}}

I make it easier for myself by giving the Section break it’s own line, so it’s easier to see where they are.

> **Scenario**
>
> Lets say you want this to be read only.
>
> Question read only.
>
> And this to be the answer section or adding attachments.

Do the following:

    Insert Continuous Section break (Start)
    Lets say you want this to be read only.
    Insert Continuous Section break (End)

    Insert Continuous Section break (Start)
    Question read only
    Insert Continuous Section break (End)
    And this to be the answer section or adding attachments

    Insert Continuous Section break (Start)

With me so far?

This example shows how that’s enabled, perhaps that helps. (With enabled security)

{{< img src="RestrictEditing-3.png" caption="Start and End of Protective sections" height="1562" width="2400">}}

Now to enable the protection

- Go to Review
- Click on Restrict Editing
- On the right-side pane, Select Filling in Forms
- Click on Select Sections
- In this part, each continuous break Start-End is a section, these section numbers aren’t reflected in the document, so you’ll have to check by enabling off and on the sections,
- Set the security
- Enable a password (don’t forget it!)
- Check if the start-end is reflected OK.

{{< img src="RestrictEditing-2png.png" caption="Restrictive editing" height="800" width="300">}}

Not working? Check your continuous breaks, and your sections.

Good luck!

P.s, I did read through a few articles figuring this out, here are they:

<https://www.extendoffice.com/documents/word/508-word-lock-parts-of-document.html>
<https://www.pcmag.com/how-to/how-to-protect-your-microsoft-word-documents>
<https://support.microsoft.com/en-us/office/allow-changes-to-parts-of-a-protected-document-187ed01c-8795-43e1-9fd0-c9fca419dadf>
