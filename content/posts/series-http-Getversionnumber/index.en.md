---
title: "Blog series - HTTP calls to SharePoint - Get - Http get version number"
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
## Scenario
Fetching a Specific Item from a SharePoint List

## Objective
Get a specific item from SharePoint, with all the metadata, that you can then re-use in your flow. In my example we're going with version number.

### Steps:

  - Identify the List and Item: You have a SharePoint site with multiple lists, and you need to fetch the details of a specific item from a list. The list name and item ID are stored in variables `VarListname` and `VarItemID` but you can of course use your own naming method.

  - Construct the HTTP Request: Use the SharePoint REST API to get the item details by specifying the list name and item ID in the URL.

  - Execute the HTTP Request: Make an HTTP GET request to the SharePoint REST API endpoint with the appropriate query parameters.

  - Set the value from the needed column in a variable.

```markdown
Method: GET

Uri: _api/web/lists/getbytitle('@{variables('VarListname')}')/items(@{variables('VarItemID')})/

Headers:
  Accept: application/json;odata=verbose
  Content-type: application/json;odata=verbose
```
Short summary, get the list by title, and grab everything from that specific item.

You can then grab the value from the body, for example, nameofyourstep?['body']?['versionnumber']

Bonus, how to do the same in Javascript:

```javascript
const siteUrl = "https://your-SharePoint-site-url";
const listName = "Project Documents"; // Example list name
const itemId = 1; // Example item ID

fetch(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items(${itemId})`, {
  method: "GET",
  headers: {
    "Accept": "application/json;odata=verbose"
  }
})
.then(response => response.json())
.then(data => {
  const item = data.d;
  console.log(`Item ID: ${item.Id}`);
  console.log(`Item Title: ${item.Title}`);
  // Add more fields as needed
})
.catch(error => console.error('Error fetching item:', error));
```

Explanation

The fetch function sends an HTTP GET request to the SharePoint REST API endpoint.
The getbytitle method is used to specify the list by its title.
The items method is used to specify the item by its ID.
The response is parsed as JSON, and the item details are logged to the console.


 {{< img src="list.png" caption="Http call" height="283" width="550">}}