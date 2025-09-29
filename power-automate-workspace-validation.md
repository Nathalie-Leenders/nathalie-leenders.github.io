# Power Automate: Power BI Workspace Validation Flow

This guide shows you how to create a Power Automate flow that validates Power BI reports against approved workspaces, similar to our JavaScript analysis.

## 🎯 Flow Overview

The flow will:
1. Get all Power BI reports from your tenant
2. Get your list of valid workspace IDs
3. Filter reports that match valid workspaces
4. Export results to Excel/SharePoint/Email

## 🛠️ Step-by-Step Implementation

### Step 1: Create a New Flow

1. Go to **Power Automate** (flow.microsoft.com)
2. Click **Create** → **Instant cloud flow**
3. Name: "Power BI Workspace Validation"
4. Trigger: **Manually trigger a flow**

### Step 2: Add Power BI Connector - Get Reports

```yaml
Action: Power BI - Get reports
Parameters:
  - Group Id: (leave empty to get all reports from all workspaces you have access to)
```

**Alternative for specific workspaces:**
```yaml
Action: Initialize variable
Name: ValidWorkspaceIds
Type: Array
Value: [
  "cb309f19-a108-49b8-88ea-53a86c6b0f6d",
  "57004d42-29c4-4f39-a819-5577a6674dae",
  "c9c71b5b-0234-4fea-84ce-c354c238d072",
  "64f65247-f25c-461d-92bc-4b5621eebe1d",
  "1e2026f6-e4ab-44f5-a157-02264fd0b0b2",
  "f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb",
  "f53e32c6-b02d-4529-8d0b-94d35eb4bfe8",
  "b596e5d3-a0fc-4216-8bdd-8e7183fe4330",
  "892fa701-1bcc-4ba0-a97c-26654b4ff278",
  "2ef179c8-7f69-48ef-b431-47fd19c0a693",
  "3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18",
  "1ef770b4-8137-4dea-a94b-75f494ca4a1c",
  "9f44e37a-002b-47f6-850b-6ddd0d1ebb12",
  "f559012c-e25a-4a38-a075-a5ba4b5ba547",
  "619abd8b-b15f-49a3-8ca4-5137c635f4f1",
  "0f764942-ac5f-40c6-84b9-4d053bb2e002",
  "bf21a4ed-7834-4aca-96dd-b8286b6b0c0c"
]
```

### Step 3: Initialize Variables

```yaml
# Variable for valid workspaces
Action: Initialize variable
Name: ValidWorkspaces
Type: Array
Value: [your workspace IDs array from above]

# Variable for matching reports
Action: Initialize variable  
Name: MatchingReports
Type: Array
Value: []

# Variable for summary data
Action: Initialize variable
Name: SummaryData
Type: Object
Value: {
  "totalReports": 0,
  "validReports": 0,
  "invalidReports": 0,
  "validationRate": 0
}
```

### Step 4: Get All Reports from All Workspaces

Since Power BI connector might require workspace-specific calls, you'll need to:

```yaml
# Option A: If you have admin rights
Action: Power BI - Get reports as admin
Parameters:
  - $top: 1000

# Option B: Loop through each valid workspace
Action: Apply to each
Select: variables('ValidWorkspaces')
Actions inside loop:
  - Power BI - Get reports
    Group Id: items('Apply_to_each')
  - Append to array variable
    Name: AllReports
    Value: body('Get_reports')?['value']
```

### Step 5: Filter and Validate Reports

```yaml
Action: Apply to each
Select: outputs from previous step (all reports)
Actions inside loop:
  - Condition
    Left operand: contains(variables('ValidWorkspaces'), items('Apply_to_each')?['workspaceId'])
    Operator: is equal to
    Right operand: true
    
    If Yes:
      - Append to array variable
        Name: MatchingReports
        Value: {
          "id": "@{items('Apply_to_each')?['id']}",
          "name": "@{items('Apply_to_each')?['name']}",
          "workspaceId": "@{items('Apply_to_each')?['workspaceId']}",
          "webUrl": "@{items('Apply_to_each')?['webUrl']}",
          "status": "Valid"
        }
```

### Step 6: Calculate Summary Statistics

```yaml
Action: Set variable
Name: SummaryData
Value: {
  "totalReports": "@{length(variables('AllReports'))}",
  "validReports": "@{length(variables('MatchingReports'))}",
  "invalidReports": "@{sub(length(variables('AllReports')), length(variables('MatchingReports')))}",
  "validationRate": "@{mul(div(length(variables('MatchingReports')), length(variables('AllReports'))), 100)}"
}
```

## 📊 Export Options

### Option 1: Export to Excel Online

```yaml
Action: Excel Online - Create table
Parameters:
  - Location: SharePoint Site
  - Document Library: Documents  
  - File: "PowerBI-Workspace-Validation.xlsx"
  - Table name: "MatchingReports"
  - Table range: A1
  - Table: variables('MatchingReports')
```

### Option 2: Export to SharePoint List

```yaml
Action: Apply to each
Select: variables('MatchingReports')
Actions:
  - SharePoint - Create item
    Site Address: [Your SharePoint site]
    List Name: "Power BI Report Validation"
    Title: items('Apply_to_each')?['name']
    ReportId: items('Apply_to_each')?['id']
    WorkspaceId: items('Apply_to_each')?['workspaceId']
    Status: "Valid"
```

### Option 3: Send Email Report

```yaml
Action: Send an email (V2)
To: [your email]
Subject: "Power BI Workspace Validation Report - @{utcNow()}"
Body: "
<h2>Power BI Workspace Validation Results</h2>
<p><strong>Total Reports:</strong> @{variables('SummaryData')?['totalReports']}</p>
<p><strong>Valid Reports:</strong> @{variables('SummaryData')?['validReports']}</p>
<p><strong>Invalid Reports:</strong> @{variables('SummaryData')?['invalidReports']}</p>
<p><strong>Validation Rate:</strong> @{variables('SummaryData')?['validationRate']}%</p>

<h3>Matching Reports:</h3>
<table border='1'>
<tr><th>Report Name</th><th>Workspace ID</th><th>Report URL</th></tr>
@{join(
  select(
    variables('MatchingReports'),
    concat('<tr><td>', item()?['name'], '</td><td>', item()?['workspaceId'], '</td><td><a href=\"', item()?['webUrl'], '\">Open Report</a></td></tr>')
  ),
  ''
)}
</table>
"
```

## 🔄 Advanced Features

### Scheduled Validation

```yaml
Trigger: Recurrence
Frequency: Weekly
Interval: 1
Start time: Monday 9:00 AM
```

### Error Handling

```yaml
# Add to main flow
Configure run after: 
  - is successful
  - has failed
  - is skipped
  - has timed out

Action: Condition
If flow failed:
  - Send email notification
    Subject: "Power BI Validation Flow Failed"
    Body: "Error details: @{workflow()?['run']?['error']}"
```

### Dynamic Workspace Management

Store valid workspace IDs in:
- **SharePoint List**: Easy to manage via UI
- **Azure Key Vault**: Secure storage
- **Dataverse Table**: Enterprise-grade solution

```yaml
# Get from SharePoint List
Action: SharePoint - Get items
Site Address: [your site]
List Name: "Valid Workspaces"
Select columns: WorkspaceId

# Extract to array
Action: Select
From: body('Get_items')?['value']
Map: item()?['WorkspaceId']
```

## 🚀 Advanced Power BI API Integration

For more comprehensive data, use HTTP actions with Power BI REST API:

```yaml
Action: HTTP
Method: GET
URI: https://api.powerbi.com/v1.0/myorg/admin/reports
Headers:
  Authorization: Bearer [token]
  Content-Type: application/json
```

## 📋 Flow Template Summary

**Triggers:** Manual, Scheduled, or SharePoint item creation
**Connectors Used:**
- Power BI
- Excel Online (Business)
- SharePoint
- Office 365 Outlook
- HTTP (for advanced scenarios)

**Key Benefits:**
- ✅ Automated validation
- ✅ Scheduled monitoring  
- ✅ Multiple export formats
- ✅ Email notifications
- ✅ Error handling
- ✅ Audit trail

## 🎯 Next Steps

1. **Test with sample data** first
2. **Set up error handling** for production use
3. **Configure notifications** for stakeholders
4. **Schedule regular validation** runs
5. **Create dashboard** in Power BI to visualize results

This Power Automate approach gives you the same validation functionality as our JavaScript solution, but with automation, scheduling, and integration capabilities!
