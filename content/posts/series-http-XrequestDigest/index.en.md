---
title: "Blog series - HTTP calls to SharePoint - Why do I need X-request-digest?"
subtitle: ""
date: 2025-02-20T09:27:14Z
lastmod: 2025-02-20T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["SharePoint HTTP series"]
categories: ["SharePoint"]


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
# What is it, and why do I need it?


Think of it as a type of token, that allows you, or permits you, to modify files on SharePoint through an HTTP request.

When you use POST as your method, and need to use Merge in your header, you also need to include a request digest value.

Without it, you're not authorized to do this action.

 {{< img src="httpcall.png" caption="Http call" height="288" width="619">}}

What it will look like to use it in a call;

 {{< img src="httpcall2.png" caption="Http call" height="250" width="619">}}

And 

 {{< img src="httpcall3.png" caption="Http call" height="100" width="650">}}

# To obtain the X-RequestDigest value, you need to make a POST request to the SharePoint REST API endpoint _api/contextinfo. 

This endpoint returns a form digest value that you can use in subsequent requests to authenticate and authorize your actions.

# Here is how you can do it:

```markdown
HTTP Method: POST
URI: https://<your-SharePoint-site>/_api/contextinfo
Headers:
  Accept: application/json;odata=verbose
```
Example Request
```http
POST https://<your-SharePoint-site>/_api/contextinfo
Accept: application/json;odata=verbose
```

Example Response
```json
{
  "d": {
    "GetContextWebInformation": {
      "FormDigestTimeoutSeconds": 1800,
      "FormDigestValue": "0x123456789ABCDEF...",
      "LibraryVersion": "16.0.0.12345",
      "SiteFullUrl": "https://<your-SharePoint-site>",
      "SupportedSchemaVersions": {
        "results": ["14.0.0.0", "15.0.0.0"]
      },
      "WebFullUrl": "https://<your-SharePoint-site>"
    }
  }
}
```

The response will include the FormDigestValue which you can use as the X-RequestDigest header in your subsequent requests.

# Extracting the FormDigestValue
You need to extract the FormDigestValue from the response. Here is an example of how you can do this in Power Automate:

Send an HTTP Request to SharePoint:

```http
Method: POST
URI: _api/contextinfo
Headers:
  Accept: application/json;odata=verbose
```

# Parse the Response

Use a "Parse JSON" action to parse the response and extract the FormDigestValue.

# Use the FormDigestValue

Use the extracted FormDigestValue as the X-RequestDigest header in your subsequent requests.
Example in Power Automate

  ```json
  {
    "method": "POST",
    "uri": "_api/contextinfo",
    "headers": {
      "Accept": "application/json;odata=verbose"
    }
  }
  ```


  1. Parse JSON Action:

Schema:
```json
{
  "type": "object",
  "properties": {
    "d": {
      "type": "object",
      "properties": {
        "GetContextWebInformation": {
          "type": "object",
          "properties": {
            "FormDigestValue": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

# Extract FormDigestValue:

Use the following expression to extract the FormDigestValue:

```json
body('HTTP_Request_to_Get_Form_Digest_Value')?['d']?['GetContextWebInformation']?['FormDigestValue']
```

# Use the FormDigestValue in Subsequent Requests:

Set the X-RequestDigest header in your subsequent requests using the extracted FormDigestValue.

By following these steps, you can obtain the X-RequestDigest value and use it in your HTTP requests to SharePoint.

