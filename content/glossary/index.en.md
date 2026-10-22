---
aliases : 
- /glossary
- /Glossary
- /posts/glossary
title: Glossary
date: 2026-10-22
enableToc: false
---

## Disclaimer
This glossary has been made without the use of AI, it's meant as a brief introduction for beginners when you come across a keyword, and very quickly want to learn the meaning of it. It's done at my own discretion. 
If you have any enhancements for it please feel free to let me know. 💜

# [A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Y](#y) | [Z](#z) |

## A

**AI Builder**

Use AI models to enhance your Power Automate Flow or PowerApps, for example extract values (Character recognition) from a pdf upon receiving the file in an email.
[Check out the MS Learn article on AI Builder here](https://learn.microsoft.com/en-us/ai-builder/overview/?wt.mc_id=DX-MVP-5005318)

**Alm (Application Lifecycle Management)**

The ability to move from Dev, Test and Prod (or other defined) environments maintaining edits in a safe manner without (hopefully) breaking production. Official ALM documentation.

**Actions**

Steps in Power Automate that follow up after a trigger, that need to be followed. You can define these actions yourself.
Not to be confused with Github Actions.

**Adaptive Cards** 

A way to present richly formatted content in a card format within Power Platform applications.

**API Management**

A service that allows you to create, publish, and manage APIs.

**Agent**

An (AI) bot which you can set to perform certain tasks, automate things or and-off to a real person.

**Agent Flows**

A workflow that can we run by an agent to perform certain tasks, calls or anything you might need.

**Agent Academy**

Agent Academy is a free, open-source training program for anyone who wants to build with Microsoft Copilot Studio
[Link to the Agent Academy](https://microsoft.github.io/agent-academy/)

**Applied Skills**

A lab based environment to measure your skill level. You are asked to perform a set of tasks, which are evaluated by the lab (AI) and if succesfull gives you that badge of the applied skill.

**Azure AI Foundry**

A platform on Azure where you can work with different AI options such as Computer Vision, Custom Vision, Logic Apps, different Microsoft IQ models and much more. It offers capabilities beyond AI Builders OCR and text recognition. Works with Azure credits. [Much more on Foundry here](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry/?wt.mc_id=DX-MVP-5005318)

**Azure DevOps**

A Platform to collaborate on products by moving them through ALM using specific updates, not the whole package that Pipelines does. You can also work with Devops boards to manage work, Pull requests and more. [Azure Devops](https://learn.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops?view=azure-devops)

## B

**Blog**

Website containing information in different posts, often defined by categories.

**Business Process Flows**

Defined action steps and stages to determine a business Process or follow up flows, data needed to proceed or ability to visually display process steps.

**Business rules**

Rules that can be applied to forms in a Model Driven App to enforce business logic. Not supported in Power Pages (yet)


## C

**Canvas App**

A PowerApp able to have full design privileges, integrate with Power Automate or be embedded in a Model driven app.

**Cards**

Micro apps, holding information you can get through Power Automate or your app. Can be posted in teams as Teams adaptive card or regular card through the Card designer. Can also be made through AdaptiveCard.IO

**Cloud Flow**

Flows that run in Power Automate Cloud (as opposed to Desktop which are RPA Flows)
Different types:

- Automated Flow
    Runs on a trigger
- Instant Flow
    With the press on a button
- Scheduled Flow
    Could be hourly, daily, monthly etc.

**Community**

Global gatherings of likeminded people, whether that's through videos, blogs, forums, conferences and many more.

**Creator toolkit**

Created by the Microsoft CAT team, with custom controls you can leverage in your apps.

**Custom Pages**

Canvas pages that can be integrated within a Model Driven app.

**CSS**

Cascade Style Sheets. With CSS, you can add custom fonts, colors, backgrounds, borders, and other visual effects to your Power Platform applications. Read how that works with Power Apps Portal Studio here.

**Common Data Model (CDM)**

A standardized data model that allows data and its meaning to be shared across applications and business processes.

**Connectors**

Pre-built integrations that allow you to connect to various data sources and services.

**Common Data Service (CDS)**

Former name for Dataverse, still present in the interface sometimes.

**Center of Excellence (CoE) Starter Kit**

A toolkit created by the Power CAT team to support functionality the Power Platform Admin center doesnt natively offer. It has a range of tools, dashboards and more. It's been deprecated since beginning of 2026.

**Child Flows**

A workflow with the trigger instant. The workflow has to be in the same solution to be able to be called through the action "Run a child flow". I've used this to bypass the 30-day timeout from a parent flow, for example if you need approvals run for longer than 30 days. The child flow will also have a 30 day period, and can give information back to it's parent. [Child flows](https://learn.microsoft.com/en-us/power-automate/create-child-flows/?wt.mc_id=DX-MVP-5005318)

**Collections**

Locally stored data from a datasource done by either the Collect or ClearCollect PowerFX code. It stores the information in a collection, to be referenced inside your (canvas) app.

**Command Bar**

The top ribbon bar in a Model Driven app. It has legacy controls such as New, Edit or Close, but you are able to add your own commands to it. [Command Bar](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/use-command-designer/?wt.mc_id=DX-MVP-5005318)

**Component Library**

A reusable set of app components, such as buttons or headers, that can be shared across multiple canvas apps.

**Copilot**

Microsoft's name for it's AI with prompts through chat to help people create, find, or work with information using everyday language.

**Copilot Studio**

Create and managing conversational agents that can answer questions or help complete tasks. Works with Copilot Studio credits, and can interact with different systems.


**Custom Connectors**

If an action is not available through the 1800+ connectors you can create your own. You can import an OpenAPI definition, or through Postman, or create your own API call in the interface. You can define actions, and save and share with your organisation. [Much more here](https://learn.microsoft.com/en-us/training/modules/get-started-custom-connector/?wt.mc_id=DX-MVP-5005318)

## D

**Datasource**

Data backend which can be used to connect in your app or flow.

**Dataverse**

Tables with a (custom) defined column structure, holding data which can be leveraged throughout the Power Platform. Requires security groups to be accessed.

**Dataflows**

ETL (Extract, Transform, Load) processes that allow you to ingest, transform, and load data into Dataverse or other destinations.

**Dax Code**

Programming language used by PowerBI

**Dynamics365**

Same logic as Model Driven apps, it offers integration using Dataverse tables with all other D365 products, and offers the full range from Sales, to Marketing, Finance, Field Service, Supply Chain, Business Central and Customer Service. Former CRM.

**Data Loss Prevention (DLP) Policies**

Rules that help administrators control which connectors and services can be used together, to reduce the risk of sharing business data in unsafe ways.

**Dataverse for Teams**

A version of Dataverse included with Teams that lets teams store and manage data for their apps and workflows.

**Delegation**

When an app asks its data source to do the work of finding or processing records, rather than trying to handle all the records itself.

**Developer Environment**

An environment intended for building and testing apps and workflows before they are shared or used in production.

## E

**Environment**

Area(s) within Office365 tenant which holds all flows, solutions and apps.

**ERD Entity Relationship Diagram**

Entity Relationship Diagrams map out the relationships needed within your data model structure. It can be very useful when designing or architecting a solution for a client.

**Entity**

 A table in Dataverse that stores data.

**Entra ID (formerly Azure AD)**

Microsoft's identity service for managing user accounts and controlling access to apps and services.

**Environment Variables**

Reusable settings in a solution, such as a website address, that can be changed for each environment without editing the app or flow.

**Expressions**

Formulas used in Power Automate to work with values, such as combining text, checking a condition, or formatting a date.

## F

**Forms**

Page used for displaying or inputting information, different forms can be created for different audiences

**Flow**

Workflow created by Power Automate, formerly named as such.

**Function Apps** 

Azure service that allows you to run small pieces of code (functions) in the cloud.

**FetchXML**

A query format used to find and filter records in Dataverse.

**Fusion Teams**

A way of working where people with different skills, such as business users and developers, work together to build a solution.


## G

**Gateway**

A bridge that provides quick data transfer and secure access between on-premises data and Power Platform services.

**Gallery**

A control in a canvas app that displays a list of records, often with the same layout repeated for each item.

**Generative Answers**

AI-generated replies created from information in selected knowledge sources, such as a website or uploaded documents.

**GitHub**

A website and service for storing project files, tracking changes, and working on software with other people.

**GitHub Actions**

An automation service in GitHub that can run tasks when something happens in a project, such as a change being saved.

**GitHub Copilot**

An AI assistant that can suggest code and help explain or write it while you work.

**Governance**

The rules, responsibilities, and processes an organization uses to manage its apps, data, and services safely.

**GUID**

A unique identifier used to distinguish one record or item from all others.

## H

**HTTP request**

A method to interact with web services and APIs. (more information in blog series incoming)

**HTML**

The standard language used to describe the structure and content of web pages.

**Hugo**

A tool that turns content files and templates into a website, such as this blog.

## I

**Integration**

The process of connecting different systems and applications to work together.

**Instructions (Agents)**

The guidance that tells an agent how to respond, what it should help with, and how it should use its knowledge and tools.


## J

**JSON or JavaScript Object Notation**

Semi-structured data that can be used in for example a Teams Adaptive Card, or is an output from a Power Automate Step. You can 'Parse JSON' to get the values, or just use the 'raw json'. It's formatted in name/value pairs, and it not considered a coding language but more a way to transfer data between applications.

**Javascript**

A programming language that can be used to add custom logic to Model Driven Apps.


## K

**Knowledge Sources**

The information an agent can refer to when answering questions, such as documents, websites, or business data.
## L

**Logic-Apps**

Azure service that allows you to automate workflows and integrate apps, data, and services.

**Low Code (No Code)**

Build apps and automations without any prior coding knowledge. The Power Platform offers an intuitive way to directly tell a button or form (or gallery, or image etc etc) what to do without needing to dive into a programming language such as C#, HTML, CSS. It uses PowerFX.

**Licensing**

The permissions and subscription plans that determine which Microsoft services and features a person or organization can use.

**Lookup Column**

A column that links a record to another record, for example linking an order to the customer who placed it.


## M


**M Language**

Coding language used by the Power Query editor. Used for Excel, Powerbi, PowerApps, Power Automate, SQL, Azure Data factory, and Dynamics365 CE. Official documentation.

**Managed solution**

An export of your solution locked so it cannot be edited. Required for ALM (moving from one environment to the other)

**Memes**

Not mandatory, but often found in slides, tweets or even on this website.

{{< img src="meme.jpg" caption="To meme or not to Meme" height="800" width="800">}}

**Microsoft Exams**

Certificates you can achieve that display your level of skill for that subject. Fundamentals are always valid, Associate or Expert need to be renewed every year. Renewal takes place only and is eligible to take 6 months before your expiration date.

**Microsoft Learn**

Microsoft Learn offers challenges, learn paths and other resources to help you upskill or get Microsoft Exam certificates.

**Model Driven App**

Data driven Powerapp, possibility to include Business Process Flows, custom pages and forms and views. Only Dataverse can be used as a DataSource (or Virtual Tables)

**MVP (Microsoft award) Most Valuable Professional.**

Non-Microsoft employee, awarded for their work in the technical community, given in the form of a MVP Award.
Official explanation: The MVP Award is a global program of recognized technology experts and community leaders who actively support technical communities through unique, innovative, and consistent knowledge sharing.

**Managed Environments**

A set of Power Platform features that help administrators apply rules, monitor activity, and manage apps across environments.

**MCP (Model Context Protocol)**

A standard way for AI tools to connect to external data and services through compatible servers.

**MCT (Microsoft Certified Trainer)**

A Microsoft-certified professional who is approved to teach Microsoft courses.

**Microsoft Fabric**

A Microsoft analytics service that brings together tools for preparing, storing, analyzing, and reporting on data.

**Microsoft Graph**

A Microsoft service that provides a common way for apps to work with information from Microsoft 365, such as users, messages, and files.


## N

**Named Formulas**

Reusable Power Fx formulas in a canvas app that can be referred to by name from different parts of the app.


## O

**Office365**

Office365 is a subscription-based online suite of software and services offered by Microsoft that allows users to access popular office tools such as Word, Excel, PowerPoint, and Outlook on the cloud. It also provides tools for online communication, collaboration, file storage, and sharing.

**Oauth**

An open standard for access delegation, commonly used for token-based authentication (like SSO, Single sign-on)

**OData**

A common format for requesting and updating data from online services.

**OnStart**

An app property that runs its formula when a canvas app starts, often to set up values the app needs.


## P

**Pipelines**

Power Platform Pipelines provide low-code access to ALM processes without the need for Azure Dev Ops. Move solutions, environment variables, connections or connection references. (Data within Dataverse tables not included)

**Plugins**

Extensions of code, changing the behavior of an app

**Power Automate**

Create workflows that use triggers and actions to follow a pre-defined path. (I.e. email me when an item gets added, or post to teams)

**PowerBI**

Reporting tool using DAX code, able to read from many connectors and data sources to create reports, dashboards and datasets.

**PowerFX**

Programming language used by the Power Platform. It's a general-purpose, strong-typed, declarative, and functional programming language. Official post here.

**Power Pages (formerly Portal)**

Create an external webpage, similar to SharePoint, but can be viewed by external clients. Official documentation,

**Power Platform Admin Portal**

Full management portal for your entire Office/Power Platform infrastructure. Click here for more information.

**Power Query**

It's a tool with which you're able to transform data before using it in Powerbi, Excel or in a Dataset/DataFlow. It uses M Language. Official documentation.

**Powershell**

A task automation and configuration management framework from Microsoft.

**PAC CLI (Power Platform CLI)**

A command-line tool for working with Power Platform apps and solutions from a terminal.

**Patch**

A Power Fx function used to create or update one or more records in a data source.

**PCF (Power Apps Component Framework)**

A framework developers use to create custom controls that can be added to Power Apps.

**Premium Connectors**

Connectors that require a qualifying Power Apps or Power Automate license to use.

**Process Mining**

A way to analyze records of business activities to see how a process actually runs and where it could be improved.

**Prompts**

Instructions or questions given to an AI system to guide the response or task it produces.


## Q

**Query**

A request for data or information from a database.

**Quick Create Form**

A short form for entering the key details in a Model Driven App of a new record without leaving the current screen.

**Quick View Form**

A read-only section in a form  in an Model Driven App that shows selected details from a related record.

## R

**Relationship types**

You can relate data to each other, linking data tables to show other records. This can be done in Dataverse, PowerBI,through lookup tables in SharePoint or other scenarios.

- One-to-One (1:1)
    One record from a source, matches one record from the other source. For example, one product ID, matches one product in the other table.
- One-To-Many (1:N)
    One record from a source, matches many (multiple) records from the other source. For example, one product ID, matches multiple products from the other table.
- Many-to-One (N:1)
    Many records from a source, match one record from the other source. For example, many product ID's, match with a single product from the other table.
-Many-To-Many (N:N)
    Many records from a source, match many records from the other source. For example, many product ID's, match many products from the other table.

**Ribbon Workbench**

Add-on you can install to customize the ribbon in Dynamics365 or a Model Driven app. Official: The Ribbon Workbench was written to originally to avoid the time consuming task of editing RibbonDiff Xml. Since Dynamics CRM 2011 it has been used by tens of thousands of users to save time and effort on their Dynamics 365/CRM projects. Site.

**RPA or Desktop Flow**

Robotic Process Automation, usually created through Power Automate Desktop (or internal RPA processes) Workflows that can mimic human actions, such as opening a local application and performing actions.

**RAG (Retrieval-Augmented Generation)**

A way for AI to look up relevant information from trusted sources before creating an answer.

**REST API**

A common way for software systems to request information or actions from one another over the web.

**Row-Level Security (RLS)**

Rules that determine which rows of data a person is allowed to see in a report or data model.

## S

**Security Groups**

A security group can be created to determine access to a table (dataverse), business process flow, ability to add attachments and many more. In the Power Platform Admin portal, an Azure AD group can also be added to have access to the security group.

**Solution**

A type of folder in an environment, holding your apps, flows, plugins or anything else pertaining to your design.

**Semantic Model**

A prepared set of data and relationships that makes information easier to explore and use in reports.

**Service Principal**

An identity for an app or automated process, used to sign in to services without using a person's account.

**SharePoint**

Microsoft's service for storing and sharing files and for creating team sites and lists, often used as an internal intranet page. It offers collaboration amongst the organisation or a way to store files to be used on the Power Platform for those without a Power Platform Premium license.

**Site Map**

A navigation structure that shows the pages or areas people can open in an app or website.

**Solution Checker**

A Power Platform tool that checks a solution for common issues and suggests improvements before it is shared.

## T

**Templates**

Pre-built configurations that can be used to quickly create apps, flows, or other components.

**Trigger**

A way to start a Power Automate flow. You can select what 'triggers' the flow to start to then perform it's actions.

**Twitter**

Online social platform, using Hashtags to define subjects and make it easier to search.

For the Power Platform search for example for the following:

- Mvpbuzz - Used by MVPs to chat on MVP events, chatter or announcements amongst MVP's
- communityluv and #communityrocks - Used by the Power Platform Community to share information
- PowerPlatformConnects - Be seen by Hugo Bernier and David Warner to feature your content on their Power Platform Connections show
- Sharingiscaring - Used to share information

**Teams**

Microsoft's collaboration app for chat, meetings, calls, and working together on files and apps.

**Tenant**

An organization's dedicated space for Microsoft cloud services, including its users, settings, and data.

**Term Store**

A shared place to create and manage approved terms that can be used to label and organize content.

**Topics**

In Copilot Studio, topics are conversation paths that help an agent respond to a subject or request.

## U

**Unmanaged layer**

A portion within a managed solution which holds edits, can prevent your app from fully working or edits becoming visible. Needs to be removed in a managed solution.

**Unmanaged solution**

An export from a solution able to be fully edited, only used from one dev environment to another, or import to leverage.

**Unified Interface**

The modern, responsive design used by model-driven apps to provide a consistent experience across devices such as tablets, mobiles or desktops.

**User Groups**

Communities where people meet to share knowledge, learn, and discuss a product or technology.

## V

**Variables**

Storage locations that hold data values which can be used and manipulated in Power Automate flows. In the Power Platform there are many kinds of variables depending on what you need them for.

**Virtual Agents**

Chatbots that can be programmed to provide specified FAQ information.

**Views**

Overview of data consisting of short summary's, making the item clickable to it opens a form to display the full information (or how else defined)

**Virtual Tables**

A virtual Entity or connector, possible to map Dataverse to an existing SQL, Excel or SharePoint list without the need for data migration. (And so, leverage them in a Model Driven App)

**Version Control**

A way to keep a history of file changes so you can see what changed, work with others, or return to an earlier version.
## W

**Web Resources**

A type of file, such as an image, script, or web page, that can be added to and used in a model-driven app.

**Webhook**

A way for one service to notify another automatically when an event happens.

**Workspace**

A place in an app or service where related work, files, reports, or settings are grouped together.

## X

**XRM toolkit**

External created toolkit (by Tanguy Touzard) in which you can leverage the variety of tools and plugins in a model driven app, Dataverse or Dynamics365 environment. Official site

**XML**

A text format for organizing and exchanging structured information using labeled elements.
## Y

**YAML**

Yaml is an easy (easier) to read programming language similar to JSON, but can both be understoond by humands and computers.

## Z
