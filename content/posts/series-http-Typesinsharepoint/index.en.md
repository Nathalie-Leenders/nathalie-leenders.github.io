---
title: "Blog series - HTTP calls to SharePoint - Types in SharePoint"
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
# Using the SharePoint REST API to Update Metadata Fields

When working with SharePoint REST API, you might need to update a metadata field that originates from a content type. To do this, you first need to get the type value from your library. This type value is essential for making the correct HTTP call to update the metadata field. I dont fully understand the inner workings of SharePoint, but without this field being accurate your call wont work.

# Step 1: Get the Library Type Value
After making a GET request to your library API, you will receive a response body that contains various details about your library. One of the key values you need to extract is the type, which is usually in the format SP.Data.listname. This type value is required to update the metadata field.

For example, if your list name is 01Firstlist, the type value might look like SP.Data.01Firstlistitem. However, to ensure accuracy and avoid hardcoding, it's best to dynamically retrieve this value using an HTTP call.

# Step 2: Set the Type Value in a Variable
Once you have retrieved the type value, you can store it in a variable. In this example, we will use a variable named varType of type string.

# Step 3: Use the Type Value in Your HTTP Call
Now that you have the type value stored in varType, you can use it in your HTTP call to update the metadata field. Here is an example of how your request body should look:
```json
{
  "__metadata": {
    "type": "@{variables('varType')}"
  },
  "Name": "Yes"
}
```

Example Code
Here is a complete example of how you can achieve this:

Make a GET request to retrieve the library details:

```http
GET https://yourSharePointsite/_api/web/lists/getbytitle('YourListName')
```


Extract the type value from the response:
```json
{
  "d": {
    "__metadata": {
      "type": "SP.Data.01Firstlistitem"
    }
  }
}
```

Store the type value in a variable:

```javascript
var varType = response.d.__metadata.type;
```

Make a POST request to update the metadata field using the type value
```http
POST https://yourSharePointsite/_api/web/lists/getbytitle('YourListName')/items(1)

{
  "__metadata": {
    "type": "@{variables('varType')}"
  },
  "Name": "Yes"
}
```

By following these steps, you can dynamically retrieve the type value and use it to update metadata fields in SharePoint. This approach ensures that your code is flexible and can handle different list names without hardcoding the type value.


When working with the SharePoint API, handling folders can sometimes be tricky, especially when dealing with deeply nested structures. In this post, we'll explore how to dynamically grab the file location regardless of how deep it is in the root or folder structure. We'll also cover how to handle common issues like permission errors.

### Dynamically Grabbing the File Location

To work with folders in the SharePoint API, you need to use the full path. This ensures that you can dynamically grab the file location, no matter how deep it is within the root or folder structure. Here's a step-by-step guide:

### Get the Path Output from the Body

When you make a request to the SharePoint API, the response body will contain the path information. This includes the root name, folder name, and other relevant details. Extract this path information from the response body.

### Use the Path in Your HTTP Requests

Once you have the path, you can use it in your subsequent HTTP requests. This allows you to navigate through the folder structure dynamically. Here's an example of how to do this:

```http
GET https://your-SharePoint-site/_api/web/GetFolderByServerRelativeUrl('/sites/your-site/Shared Documents/FolderName')/Files
```

In this example, replace '/sites/your-site/Shared Documents/FolderName' with the path you extracted from the response body.

### Check the File Path

Ensure that the file path is correct. Double-check for any extra slashes (/) or missing segments in the path.

### Verify Permissions

Make sure that you have the necessary permissions to access the folder or file. If you're using an app or service account, ensure that it has the appropriate permissions.

If you encounter a permission error, it's most likely a mistake in your path. Carefully review the path and make sure it's accurate.
