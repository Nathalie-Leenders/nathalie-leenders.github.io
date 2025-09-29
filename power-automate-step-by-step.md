# Power Automate: Step-by-Step Workspace Validation Flow

Since you already have **getreports** and **getworkspace** actions, here are the exact next steps to complete your validation flow.

## 🎯 Current State
✅ **getreports** action - Gets all your Power BI reports  
✅ **getworkspace** action - Gets your workspace information

## 📋 Step-by-Step Implementation

### Step 1: Initialize Variables (Add after your existing actions)

**Action:** `Initialize variable`
- **Name:** `ValidWorkspaceIds`
- **Type:** `Array`
- **Value:** `[]` (empty for now, we'll populate it)

**Action:** `Initialize variable`
- **Name:** `MatchingReports`
- **Type:** `Array` 
- **Value:** `[]`

**Action:** `Initialize variable`
- **Name:** `ValidationSummary`
- **Type:** `Object`
- **Value:** 
```json
{
  "totalReports": 0,
  "validReports": 0,
  "invalidReports": 0,
  "validationRate": 0
}
```

### Step 2: Extract Valid Workspace IDs

**Action:** `Apply to each`
- **Select:** `body('getworkspace')?['value']` (output from your getworkspace action)
- **Inside the loop:**
  - **Action:** `Append to array variable`
  - **Name:** `ValidWorkspaceIds`
  - **Value:** `items('Apply_to_each')?['id']`

### Step 3: Validate Each Report

**Action:** `Apply to each`
- **Select:** `body('getreports')?['value']` (output from your getreports action)
- **Inside the loop:**

  **Action:** `Condition`
  - **Left operand:** `contains(variables('ValidWorkspaceIds'), items('Apply_to_each_2')?['workspaceId'])`
  - **Operator:** `is equal to`
  - **Right operand:** `true`

  **If YES (Valid Report):**
  - **Action:** `Append to array variable`
  - **Name:** `MatchingReports`
  - **Value:**
  ```json
  {
    "id": "@{items('Apply_to_each_2')?['id']}",
    "name": "@{items('Apply_to_each_2')?['name']}",
    "workspaceId": "@{items('Apply_to_each_2')?['workspaceId']}",
    "webUrl": "@{items('Apply_to_each_2')?['webUrl']}",
    "datasetId": "@{items('Apply_to_each_2')?['datasetId']}",
    "status": "Valid"
  }
  ```

### Step 4: Calculate Summary Statistics

**Action:** `Set variable`
- **Name:** `ValidationSummary`
- **Value:**
```json
{
  "totalReports": "@{length(body('getreports')?['value'])}",
  "validReports": "@{length(variables('MatchingReports'))}",
  "invalidReports": "@{sub(length(body('getreports')?['value']), length(variables('MatchingReports')))}",
  "validationRate": "@{if(greater(length(body('getreports')?['value']), 0), mul(div(length(variables('MatchingReports')), length(body('getreports')?['value'])), 100), 0)}"
}
```

## 📊 Export Options (Choose One or More)

### Option A: Create Excel File

**Action:** `Create table (Excel Online)`
- **Location:** Choose your SharePoint site
- **Document Library:** Documents
- **File:** Create new file: `PowerBI-Validation-Report-@{formatDateTime(utcNow(), 'yyyy-MM-dd')}.xlsx`
- **Table range:** `A1`
- **Table:** `variables('MatchingReports')`

### Option B: Send Email Summary

**Action:** `Send an email (V2)`
- **To:** Your email address
- **Subject:** `Power BI Workspace Validation Report - @{formatDateTime(utcNow(), 'dd/MM/yyyy')}`
- **Body (HTML):**
```html
<h2>🎯 Power BI Workspace Validation Results</h2>

<div style="background-color: #f0f8ff; padding: 15px; margin: 10px 0; border-left: 4px solid #0078d4;">
<h3>📊 Summary Statistics</h3>
<ul>
<li><strong>Total Reports:</strong> @{variables('ValidationSummary')?['totalReports']}</li>
<li><strong>Valid Reports:</strong> @{variables('ValidationSummary')?['validReports']}</li>
<li><strong>Invalid Reports:</strong> @{variables('ValidationSummary')?['invalidReports']}</li>
<li><strong>Validation Rate:</strong> @{variables('ValidationSummary')?['validationRate']}%</li>
</ul>
</div>

<h3>✅ Valid Reports (@{length(variables('MatchingReports'))} found)</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
<tr style="background-color: #0078d4; color: white;">
<th style="padding: 8px;">Report Name</th>
<th style="padding: 8px;">Workspace ID</th>
<th style="padding: 8px;">Action</th>
</tr>
@{join(
  select(
    variables('MatchingReports'),
    concat(
      '<tr>',
      '<td style="padding: 8px;">', item()?['name'], '</td>',
      '<td style="padding: 8px;">', item()?['workspaceId'], '</td>',
      '<td style="padding: 8px;"><a href="', item()?['webUrl'], '" style="color: #0078d4;">Open Report</a></td>',
      '</tr>'
    )
  ),
  ''
)}
</table>

<p><small>Report generated on @{formatDateTime(utcNow(), 'dd/MM/yyyy HH:mm')} UTC</small></p>
```

### Option C: Save to SharePoint List

First, create a SharePoint list with these columns:
- **Title** (Single line of text)
- **ReportId** (Single line of text)  
- **WorkspaceId** (Single line of text)
- **ReportUrl** (Hyperlink)
- **ValidationDate** (Date and Time)

**Action:** `Apply to each`
- **Select:** `variables('MatchingReports')`
- **Inside loop:**
  - **Action:** `Create item (SharePoint)`
  - **Site Address:** Your SharePoint site
  - **List Name:** Your list name
  - **Title:** `items('Apply_to_each_3')?['name']`
  - **ReportId:** `items('Apply_to_each_3')?['id']`
  - **WorkspaceId:** `items('Apply_to_each_3')?['workspaceId']`
  - **ReportUrl:** `items('Apply_to_each_3')?['webUrl']`
  - **ValidationDate:** `utcNow()`

## 🚀 Quick Setup Checklist

### ✅ Actions to Add (in order):
1. ⬜ Initialize variable: `ValidWorkspaceIds` (Array)
2. ⬜ Initialize variable: `MatchingReports` (Array)  
3. ⬜ Initialize variable: `ValidationSummary` (Object)
4. ⬜ Apply to each: Extract workspace IDs
5. ⬜ Apply to each: Validate reports
6. ⬜ Set variable: Calculate summary
7. ⬜ Choose export option (Excel/Email/SharePoint)

### 🔧 Expression Helper

For the validation condition, use this expression:
```
contains(variables('ValidWorkspaceIds'), items('Apply_to_each_2')?['workspaceId'])
```

For the summary calculation percentage:
```
if(greater(length(body('getreports')?['value']), 0), mul(div(length(variables('MatchingReports')), length(body('getreports')?['value'])), 100), 0)
```

## 🎯 Test Your Flow

1. **Save** your flow
2. **Test** with a manual trigger
3. **Check** the email/Excel output
4. **Verify** the numbers match your expected results

## 💡 Pro Tips

- **Name your loops** clearly (Apply_to_each_workspaces, Apply_to_each_reports)
- **Add error handling** with "Configure run after" settings
- **Use parallel branches** if you want multiple export formats
- **Set timeout** values for large datasets

Would you like me to clarify any of these steps or help you with specific expressions?
