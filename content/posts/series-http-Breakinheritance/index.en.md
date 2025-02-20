---
title: "Blog series - Post - Breaking Role Inheritance for a Specific Item in a SharePoint List"
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
### Scenario
Breaking Role Inheritance for a Specific Item in a SharePoint List

**Objective:**
You want to break the role inheritance for a specific item in a SharePoint list, copying the existing role assignments and clearing subscopes.

**Steps:**

1. **Identify the List and Item:**
   You have a SharePoint site with multiple lists, and you need to break the role inheritance for a specific item in a list. The list name and item ID are stored in variables `VarListname` and `VarItemID` respectively.

2. **Construct the HTTP Request:**
   Use the SharePoint REST API to break the role inheritance by specifying the list name and item ID in the URL, and setting the parameters to copy role assignments and clear subscopes.

3. **Execute the HTTP Request:**
   Make an HTTP POST request to the SharePoint REST API endpoint with the appropriate query parameters.

**HTTP Request:**
```http
POST https://your-sharepoint-site-url/_api/web/lists/getbytitle('@{variables('VarListname')}')/items(@{variables('VarItemID')})/BreakRoleInheritance(copyRoleAssignments=true, clearSubscopes=true)
```

**Example Code (JavaScript):**
```javascript
const siteUrl = "https://your-sharepoint-site-url";
const listName = "Project Documents"; // Example list name
const itemId = 1; // Example item ID

fetch(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items(${itemId})/BreakRoleInheritance(copyRoleAssignments=true, clearSubscopes=true)`, {
  method: "POST",
  headers: {
    "Accept": "application/json;odata=verbose",
    "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value
  }
})
.then(response => {
  if (response.ok) {
    console.log('Role inheritance broken successfully');
  } else {
    return response.json().then(error => {
      throw new Error(error.error.message.value);
    });
  }
})
.catch(error => console.error('Error breaking role inheritance:', error));
```

**Explanation:**
- The `fetch` function sends an HTTP POST request to the SharePoint REST API endpoint.
- The `getbytitle` method is used to specify the list by its title.
- The `items` method is used to specify the item by its ID.
- The `BreakRoleInheritance` method is used to break the role inheritance for the item, with parameters to copy existing role assignments and clear subscopes.
- The `X-RequestDigest` header is required for POST requests to SharePoint REST API to prevent cross-site request forgery (CSRF) attacks.
- The response is checked for success, and the result is logged to the console.

This scenario demonstrates how to use the SharePoint REST API to break the role inheritance for a specific item in a list, copying the existing role assignments and clearing subscopes.


Method: POST
Uri: _api/web/lists/getbytitle('@{variables('VarListname')}')/items(@{variables('VarItemID')})/BreakRoleInheritance(copyRoleAssignments=true, clearSubscopes=true)

Headers:	Accept	application/json
  Content-Type	application/json

