// Workspace and Report Analysis Script

// Your 17 workspaces
const workspaces = [
  { "Workspaceid": "cb309f19-a108-49b8-88ea-53a86c6b0f6d" },
  { "Workspaceid": "57004d42-29c4-4f39-a819-5577a6674dae" },
  { "Workspaceid": "c9c71b5b-0234-4fea-84ce-c354c238d072" },
  { "Workspaceid": "64f65247-f25c-461d-92bc-4b5621eebe1d" },
  { "Workspaceid": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2" },
  { "Workspaceid": "f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb" },
  { "Workspaceid": "f53e32c6-b02d-4529-8d0b-94d35eb4bfe8" },
  { "Workspaceid": "b596e5d3-a0fc-4216-8bdd-8e7183fe4330" },
  { "Workspaceid": "892fa701-1bcc-4ba0-a97c-26654b4ff278" },
  { "Workspaceid": "2ef179c8-7f69-48ef-b431-47fd19c0a693" },
  { "Workspaceid": "3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18" },
  { "Workspaceid": "1ef770b4-8137-4dea-a94b-75f494ca4a1c" },
  { "Workspaceid": "9f44e37a-002b-47f6-850b-6ddd0d1ebb12" },
  { "Workspaceid": "f559012c-e25a-4a38-a075-a5ba4b5ba547" },
  { "Workspaceid": "619abd8b-b15f-49a3-8ca4-5137c635f4f1" },
  { "Workspaceid": "0f764942-ac5f-40c6-84b9-4d053bb2e002" },
  { "Workspaceid": "bf21a4ed-7834-4aca-96dd-b8286b6b0c0c" }
];

// Your reports data (I'll extract the workspaceId from each report)
const reports = {
  "@odata.context": "https://wabi-west-europe-b-primary-redirect.analysis.windows.net/v1.0/myorg/admin/$metadata#reports",
  "@odata.count": 162,
  "value": [
    // Reports will be added here - using the data you provided
  ]
};

// Create a Set of valid workspace IDs for fast lookup
const validWorkspaceIds = new Set(workspaces.map(ws => ws.Workspaceid));

// Function to analyze reports
function analyzeReports(reportsData) {
  const analysis = {
    totalReports: reportsData.value.length,
    reportsWithValidWorkspace: 0,
    reportsWithInvalidWorkspace: 0,
    invalidWorkspaceReports: [],
    workspaceDistribution: {},
    uniqueWorkspaceIds: new Set()
  };

  reportsData.value.forEach(report => {
    const workspaceId = report.workspaceId;
    
    // Add to unique workspace IDs
    analysis.uniqueWorkspaceIds.add(workspaceId);
    
    // Count workspace distribution
    if (!analysis.workspaceDistribution[workspaceId]) {
      analysis.workspaceDistribution[workspaceId] = 0;
    }
    analysis.workspaceDistribution[workspaceId]++;
    
    // Check if workspace ID is valid
    if (validWorkspaceIds.has(workspaceId)) {
      analysis.reportsWithValidWorkspace++;
    } else {
      analysis.reportsWithInvalidWorkspace++;
      analysis.invalidWorkspaceReports.push({
        reportId: report.id,
        reportName: report.name,
        workspaceId: workspaceId
      });
    }
  });

  return analysis;
}

// Function to display results
function displayResults(analysis) {
  console.log("=== POWER BI WORKSPACE ANALYSIS ===\n");
  
  console.log(`Total Reports: ${analysis.totalReports}`);
  console.log(`Reports with Valid Workspace IDs: ${analysis.reportsWithValidWorkspace}`);
  console.log(`Reports with Invalid Workspace IDs: ${analysis.reportsWithInvalidWorkspace}`);
  console.log(`Total Unique Workspace IDs found in reports: ${analysis.uniqueWorkspaceIds.size}\n`);
  
  console.log("=== WORKSPACE DISTRIBUTION ===");
  Object.entries(analysis.workspaceDistribution)
    .sort((a, b) => b[1] - a[1]) // Sort by count descending
    .forEach(([workspaceId, count]) => {
      const isValid = validWorkspaceIds.has(workspaceId) ? "✅ VALID" : "❌ INVALID";
      console.log(`${workspaceId}: ${count} reports ${isValid}`);
    });
  
  if (analysis.invalidWorkspaceReports.length > 0) {
    console.log("\n=== REPORTS WITH INVALID WORKSPACE IDs ===");
    analysis.invalidWorkspaceReports.forEach(report => {
      console.log(`- ${report.reportName} (ID: ${report.reportId}) - Workspace: ${report.workspaceId}`);
    });
  }
  
  console.log("\n=== YOUR VALID WORKSPACES ===");
  workspaces.forEach(ws => {
    const count = analysis.workspaceDistribution[ws.Workspaceid] || 0;
    console.log(`${ws.Workspaceid}: ${count} reports`);
  });
}

// Since this is a demonstration, I'll manually add some sample data
// In a real scenario, you would replace this with your actual reports data

// For now, let's create a simple analysis function that you can run
function quickAnalysis() {
  console.log("Your 17 Valid Workspace IDs:");
  workspaces.forEach((ws, index) => {
    console.log(`${index + 1}. ${ws.Workspaceid}`);
  });
  
  console.log(`\nTotal valid workspaces: ${workspaces.length}`);
}

// Export functions for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { analyzeReports, displayResults, validWorkspaceIds, workspaces };
} else {
  // Browser environment
  window.analyzeReports = analyzeReports;
  window.displayResults = displayResults;
  window.validWorkspaceIds = validWorkspaceIds;
  window.workspaces = workspaces;
}

// Run quick analysis
quickAnalysis();
