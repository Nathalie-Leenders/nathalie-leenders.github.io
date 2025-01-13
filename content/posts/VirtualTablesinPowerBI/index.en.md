---
title: "Connecting to Virtual Tables in PowerBI"
subtitle: "How can I connect?"
date: 2023-07-07T09:27:14Z
lastmod: 2023-07-07T09:27:14Z
draft: false
authors: [nathalieleenders]
description: ""

tags: ["PowerBI", "Dynamics365CI","Virtual Tables"]
categories: ["PowerBI"]


hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: "Powerbivirtualtables.png"
featuredImagePreview: "Powerbivirtualtables.png"

toc:
  enable: true
  auto: false

code:
    maxShownLines: 100
---
## Connecting to Virtual Tables in PowerBI

When I wanted to connect to the virtual table, my first instinct was to use the Dataverse connector since they are virtual tables, on Dataverse.
Opening up PowerBI, connecting to Dataverse, there were no virtual tables visible.

Of course, the work around would be to connect to the source directly, but I did want to see if I could make it work.

## Virtual tables are only available in PowerBI through the Common Data Service (Legacy) connector.

This connector is available for: 
* Power BI (Datasets)
* Power BI (Dataflows)
* Dynamics 365 Customer Insights

You cannot use the Dataverse connector, it wont display the tables.

When you use the CDS Data connector, you do see the tables. Take note, they will have a prefix, and then table name. Depending in method of importing, it will either be prefix_dbo_name or prefix_name.

{{< img src="VirtualTabletoPowerbi.png" caption="Virtual Table through CDS Connector " height="800" width="600">}}

Power Query Common Data Service (Legacy) connector - Power Query | Microsoft Learn

Check out this Microsoft article on more indepth explanation on it: https://learn.microsoft.com/en-us/power-query/connectors/common-data-service-legacy/?wt.mc_id=DX-MVP-5005318
