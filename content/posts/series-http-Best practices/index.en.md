---
title: "Blog series - HTTP calls to Sharepoint - Best practises"
subtitle: ""
date: 2025-02-20T09:27:14Z
lastmod: 2025-02-20T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["Sharepoint - HTTP series"]
categories: ["Sharepoint"]


hiddenFromHomePage: false
hiddenFromSearch: false

hero: ""
featuredImagePreview: ""

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
# Best practises

Here are some best practises I found either online or discovered myself.

## Use the Appropriate HTTP Method
Use GET for retrieving data, POST for creating new resources, PUT for updating existing resources, and DELETE for removing resources. 

## Set Proper Permissions
Ensure that you have the necessary permissions for the operations you intend to perform. This includes configuring the appropriate access levels for users and applications. Proper permissions help prevent unauthorized access and maintain data security.

## Include Necessary Headers
HTTP headers play a crucial role in SharePoint calls. Always include essential headers such as Authorization, Accept, and Content-Type. These headers help authenticate requests, specify the expected response format, and indicate the type of data being sent.

## Structure the Request Body Correctly
When making POST or PUT requests, ensure that the request body is being handled by Sharepoint correctly. If not, your request wont get processed, or not in the way you intend it to.

## Error handling
Implement Scopes in your flow, with run after scenarios to capture and send your error data to your account.

## Avoid Deleting Columns with Parse JSON
When working with Parse JSON, try to avoid deleting columns. Your schema will fail, and the step wont produce any output. Instead, adjust your schema to include only the necessary fields. This helps maintain data integrity and prevents potential issues.

## Use Variables in HTTP Calls
Utilize variables for site names, list names, types and other parameters in your HTTP calls. This makes your code more flexible and easier to maintain.

## Reuse HTTP Calls
Minimize the number of HTTP calls by reusing them where possible. If you use too many requests, they might appear as successful, but the data wont be updated.
