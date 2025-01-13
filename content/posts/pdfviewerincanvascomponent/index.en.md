---
title: "How to use the PDF Viewer, to view PDF's in a Model Driven app from an attachment column"
subtitle: "My PDF viewer works in the canvas app, but not when I embed it"
date: 2024-08-12T09:27:14Z
lastmod: 2024-08-12T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Canvas app", "Model Driven app", "Dynamics365"]
categories: ["Canvas app", "Model Driven app", "Dynamics365"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "pdfviewer.png"
featuredImagePreview: "pdfviewer.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## Usecase

My PDF viewer works in the canvas app, but not when I embed it

Show image 0/0 in MDA

## The beginning

I had a need, to display a pdf from a Dataverse attachment column in a Model driven app form.

I had looked at many different PCF Components (which are totally awesome, you should really check them out!)
However these only work on Notes with attachments. My dataverse table/solution uses a files column.

So, I found a blogpost explaining how to do a canvas app component, rather than a custom page, and from there you can 'just' embed the canvas app in a new tab, and all is well.

(If I find the link again I will definately share it for you all)

I created the canvas app, using the appropriate method, however when I loaded the app, I got a 0/0. No error, nothing in the inspect/developer tools, nothing to indicate an error. It does display the canvas app, and the pdf viewer, it just stays on 0/0.
In the canvas app itself it's perfectly fine, and gets the pdf from the [@ModelDrivenFormIntegration].Item.columnname.value

When I was on a call with the amazing Hugo Bernier, I asked him about it, and this error popped up:

{{< img src="troubleshooting1.png" caption="JSON Parsing error: expected 'array' but got 'object'" height="600" width="800">}}

Hugo prompted me to check the array vs object, and that there might be different behavior expected.

In the meantime I also found an article explaining the different security permissions needed, and in particular this one:

{{< img src="security.png" caption="Under custom identities, you need to enable CanvasApp Extended Metadata" height="600" width="800">}}

After doing this I was able to see text labels in my app that I put in as a test, with values, but not yet the actual invoice.

{{< img src="troubleshooting.png" caption="Still getting an error, o/o, but at least it got some values" height="600" width="800">}}

## The solution

Here's the funny bit, so, it was expecting an array, however in the canvas app it needs the value, the object.
1. I had to figure out a way to get the matching to work. I had thought about using First(), however that didnt work. Then did a date table, but that just gave me the columns and values, but not the above blob that I needed.

2. I remembered doing a solution, after watching a video by Shane Young, on uploading attachments from a canvas app, to Power Automate, parsing the blob through, and remembered he used a Gallery.

3. I went back into my canvas app (remember, go to the component and add it there, don't edit straight from the power apps interface, it will mess up the [@ModelDrivenFormIntegration] thing)

4. I created a gallery, and on it, used the following expression:

`Filter(Dataversecolumnname,ThisRecord.GUIDfield = [@ModelDrivenFormIntegration].Item.GUIDfield)`

5. Then on the PDF viewer, I did `Gallery1.Selected.Invoicefiles.Value`

Essentially, I match the GUID field from my datasource, with the value it retrieves through the ModelDrivenFormIntegration.

6. I hid the gallery (Set my visible property to false) published and closed out the app.

Long story short, the PDF viewer in a canvas app works with the single object, that it directly gets from the Canvas UI, using the [@ModelDrivenFormIntegration]. However the Model Driven app, doesnt have this step, and it receives an object, but wants an array, so it misses the thing the canvass app does to translate the data.

Does it make sense? Not really. But remember, the PDF Viewer is still in experimental mode, so this might just not have been noticed until now.