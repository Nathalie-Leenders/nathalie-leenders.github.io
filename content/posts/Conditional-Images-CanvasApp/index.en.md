---
title: "How to get conditional images in your Canvas app"
subtitle: "Use variables for dynamic images"
date: 2022-11-07T14:27:14Z
lastmod: 2022-11-07T14:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Variables", "Images"]
categories: ["Power Automate"]
series: [how-to-doit]

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

# Ever had a scenario, where someone wanted to have images in their app, but also pull them from a source somewhere?

Let’s say, you want to reflect their office image in your app. But you also want to possibility to overwrite/upload your own instead.

You can do this by using an If statement and some variables, let’s look at the following scenario.

- You work for a company called Powerplatform with their email domain @Powerplatform.com
- You want to reflect the office uploaded image in your app when someone submits something.
- Add a button that searched for someone from your company, so you can switch between uploading your own image, or using their office picture.

- Add an editform to your app with an image control and textfield for email
- Add a button
- On your datasources, add Office365Users to your app
- On your Onselect from the button, add this statement:

  ```PowerFx
  If(!IsBlank(Find("@Powerplatform.com",DataCardValue1.Text)),

  Set(VarOfficeImage,true),Set(VarOfficeImage,false));
  ```

Make sure your datacardvalue matches the one in your email field. The variable will error but that’s fine as we’ll set that up now.

What this does, is if you have for example `Janedoe@Powerplatform.com` it sets your variable, I will now explain how this variable works.

- On your image datacard, find the image1 field, and go to the Image Property.
- Paste the following code to your Image property:

  ```PowerFx
  If(Form.Mode = FormMode.Edit,

  Parent.Default,

  VarOfficeImage=true,Office365Users.UserPhotoV2(DataCardValue1),

  AddPicture1.Media)
  ```

What this does, if that if you’re in edit mode modifying someone, it grabs the parent (existing) image, otherwise if the variable for your office image is true (if you pushed the button) to grab the user photo for the person you have specified in your email address field.

If that variable is false (there is no match in the email field) you can add your own image through the regular image card.

## Test your functionality, and save the app

I understand this seems very tricky, let me know if you have any questions.
