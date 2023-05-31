---
title: "Business Process Flow - How to automate moving through different stages"
subtitle: "How to automate the steps in a BPF"
date: 2023-04-05T14:27:14Z
lastmod: 2023-04-05T14:27:14Z
draft: false
authors: [nathalieleenders]
description: "This explains how to set security on a Word document, restrict the editing, but allow forms to be filled out, and certain sections to be edited. For example, to add in attachments or images."

tags: ["MSWord", "Security"]
categories: ["MSWord"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "power-autoamte-vs-flow.webp"
featuredImagePreview: ""

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---

## How to move stages automatically (BPF) using Power Automate (no http calls needed)

Quick summary: You need to grab data from 3 different tables, link them using lookup columns, capture ID's, and add in conditions and use Data operations to shape the data into usable steps. Then add in a switch depending on your stage names, and add final actions updating your BPF table.

Sounds easy enough right?…..

{{< image src="download.gif" caption="Beaker's head on fire" height="400" width="150">}}

I hope this helps, and I tried explaining it clearly, please let me know in case of any questions, feedback, other methods etc. For me this worked.

## Table structures needed

- Main Table
- Business process flow table (automatically created once you add a Process and save it, bring into your solution)
- Process Stages table (In Default Solution)

## Set relationship by doing lookup fields

In Main Table; set lookup columns:

- Active Stage
- Admin_Request

In BPF table; set lookup columns:

- New_request
- (GUID ID of your Main Table)

Identify process steps

- Trigger: When a row is added, modified or deleted (Dataverse)
- Added or Modified -  Business process flow table
- Initialize variables for; number of stages you have
- (use a compose to check outputs if needed)

Getting the data from your tables

- Get Record
- List rows – Table: Main Table
- Row ID: `triggerOutputs()?['body/_bpf_new_requestid_value']`

## Search for your request ID in the BPN table (using the lookup columns)

{{< image src="Process Stages screenshot 2.png" caption="Beaker's head on fire" height="800" width="500">}}

- Get Process Stages (Gets active stage)
- List rows – Table:Process Stages (This exists in the Default Solution)
- Row ID: `triggerOutputs()?['body/_activestageid_value']`
- List rows – All Process Stages (or use an Http request)
- List rows – Table: Process Stages
- Filter Rows: `_processid_value eq outputs('Get_process_Stages')?['body/_processid_value']`

  {{< image src="process stages Screenshot 3.png" caption="Beaker's head on fire" height="800" width="500">}}

## Get all process stage names

- Set an Apply to each
- Output:  `outputs('List_rows_-_all_process_stages')?['body/value']`
- Compose action: get all body from process stages
- Inputs: `items('Apply_to_each')`
- Put a terminate – successful and run your flow, grab the output from the body of your Compose – get all body from Process Stages
- Go back into Edit
- Continue with the steps (re) move the terminate
- Parse JSON
- Content: `outputs('Compose_-_get_all_body_from_Process_Stages')`
- Schema: Click on Generate from Sample, and use the output body as grabbed in the earlier step

## Setting your variables to capture the Process ID's

- Create a Scope – Set variables
- Append your string variables with the following code:

  ```PowerFx
  if(equals(body('Parse_JSON')?['stagename'],'New Stage'),body('Parse_JSON')?['processstageid'],'')
  ```

  {{< image src="screenshot 5.png" caption="Beaker's head on fire" height="800" width="500">}}

### What does this do?

It checks in each apply to each, if the name matches the stagename, and then appends the ID into your string variable.

Switch for each Stage – On: `outputs('Get_process_Stages')?['body/stagename']`

- Add per stage your case
- Equals – your stage name
- Update a row
- Your BPF Table
- Row ID: `triggerOutputs()?['body/businessprocessflowinstanceid']`
- On the Active Process stage: `/processstages/@{variables('NewStage')}`
- Completed On: `utcNow()`

  {{< image src="screenshot 6.png" caption="Beaker's head on fire" height="800" width="500">}}


### What does this do?

This identifies the current stage, and moves it to the next using the process ID which you specified in your variable, date now.

You can of course add in conditions, if it has the correct data, but in essence, this is how it moves (for me).

Open to any and all suggestions.