---
title: "How to repeat words in Microsoft Word (XML Mappings)"
subtitle: "Use XML Mappings in the Header or Footer"
date: 2023-04-04T14:27:14Z
lastmod: 2023-04-04T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["MSWord", "XMLMappings"]
categories: ["MSWord"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: ""
featuredImagePreview: ""

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

I know I usually only do Power Platform, but Microsoft Word is bound to be in your project needs someday, or combining with Power Automate, so I figured why not?

Ever had the request to have certain words repeated, lets say in a header or footer?
It can be anything, a date, name, product title, Business Unit etc etc.

This can be achieved using XML Mapping in Microsoft Word.
To get to the XML mapping, you must first have the Developer Tab activated.

- Go to File
- Options
- Customize this ribbon
- Enable the Developer (check the checkbox)
- Save

{{< image src="xmlmapping screenshot1.png" caption="Developer tab" height="600" width="800">}}

Now you’re able to open the Developer Tab, and in the middle you’ll find the XML Mapping.
Here is where the fun starts.

XML Mapping, as the name says, uses an XML file to map the words.

- Open NotePad, and copy/paste the following:

  ```xml
  <?xml version=”1.0” encoding=”UTF-8” standalone=”no”?>
  <DemoXMLNode xmlns=”http://CustomDemoXML.htm”>
  <Name></Name>
  <Insertnewasyouwant></Insertnewasyouwant>
  </DemoXMLNode>
  ```

  (I got this code off of someones blog a while ago, if I remember who it was I will post it here, I promise)

- Use the `<>` and `</>` to map your XML names.
- Save as .XML file.
- Now in Microsoft Word, on the XML Mapping pane, go to the dropdown, and click on (Add a new Part…)
- Select your file.
- It will show up as the following:

  {{< image src="xmlmapping screenshot2.png" caption="Breaks start and End" height="600" width="800">}}

I’ve used Word1 and Word2, but you can of course specify your own naming in the XML.

Next step is binding this to something on your form or document.

- Make sure you’re using a content control (under the developer tab, next to the XML Mapping, you’ll find the Rich Text, Plain Text, Dates, Checkboxes etc.)
- Insert a Text content control
- Place the text in this content control
- Select in your Word file what you want to have repeated (The content control)
- Right click on `Word1`
- Select Map to selected Content control

  {{< image src="xmlmapping screenshot3.png" caption="XML Mappings" height="1000" width="800">}}

You have now mapped that content control, to `Word1`

- Now in your header, footer or where ever you want, Right click on `Word1`, Insert content control, and in this case `Word1` as Plain text, and it will appear and be a repeated text from where you’re changing it.

It might take a few seconds to reflect.

Hope this helps.
