// Power BI Workspace and Report Analysis
// Based on your provided data

// Your 17 valid workspace IDs
const validWorkspaceIds = new Set([
  'cb309f19-a108-49b8-88ea-53a86c6b0f6d',
  '57004d42-29c4-4f39-a819-5577a6674dae', 
  'c9c71b5b-0234-4fea-84ce-c354c238d072',
  '64f65247-f25c-461d-92bc-4b5621eebe1d',
  '1e2026f6-e4ab-44f5-a157-02264fd0b0b2',
  'f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb',
  'f53e32c6-b02d-4529-8d0b-94d35eb4bfe8',
  'b596e5d3-a0fc-4216-8bdd-8e7183fe4330',
  '892fa701-1bcc-4ba0-a97c-26654b4ff278',
  '2ef179c8-7f69-48ef-b431-47fd19c0a693',
  '3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18',
  '1ef770b4-8137-4dea-a94b-75f494ca4a1c',
  '9f44e37a-002b-47f6-850b-6ddd0d1ebb12',
  'f559012c-e25a-4a38-a075-a5ba4b5ba547',
  '619abd8b-b15f-49a3-8ca4-5137c635f4f1',
  '0f764942-ac5f-40c6-84b9-4d053bb2e002',
  'bf21a4ed-7834-4aca-96dd-b8286b6b0c0c'
]);

// Extract all unique workspace IDs from your reports
const reportWorkspaceIds = [
  'cb309f19-a108-49b8-88ea-53a86c6b0f6d', 'cb309f19-a108-49b8-88ea-53a86c6b0f6d', '75c284d7-e4a7-4d8e-9e9e-ddc751cbd3cf',
  '75c284d7-e4a7-4d8e-9e9e-ddc751cbd3cf', '57004d42-29c4-4f39-a819-5577a6674dae', '57004d42-29c4-4f39-a819-5577a6674dae',
  'd269a4ac-a454-4913-9f6d-0e3d514fd088', '6ddda6b6-2800-470f-b2a5-d8b8836b461e', '88432e17-2143-4190-a66d-07924cdf8fa5',
  '57004d42-29c4-4f39-a819-5577a6674dae', '57004d42-29c4-4f39-a819-5577a6674dae', 'd269a4ac-a454-4913-9f6d-0e3d514fd088',
  'cb309f19-a108-49b8-88ea-53a86c6b0f6d', 'cb309f19-a108-49b8-88ea-53a86c6b0f6d', '64f65247-f25c-461d-92bc-4b5621eebe1d',
  '64f65247-f25c-461d-92bc-4b5621eebe1d', 'e852415f-4007-4006-bee0-5c8795a6d2d6', '6ddda6b6-2800-470f-b2a5-d8b8836b461e',
  '6ddda6b6-2800-470f-b2a5-d8b8836b461e', '71a5c6ad-6f14-4e34-9a57-862a5674c56c', '64f65247-f25c-461d-92bc-4b5621eebe1d',
  '8cbed24e-af3e-4504-ad13-2b1d5090069c', '8cbed24e-af3e-4504-ad13-2b1d5090069c', '8cbed24e-af3e-4504-ad13-2b1d5090069c',
  'cb309f19-a108-49b8-88ea-53a86c6b0f6d', '1e2026f6-e4ab-44f5-a157-02264fd0b0b2', '1e2026f6-e4ab-44f5-a157-02264fd0b0b2',
  '1e2026f6-e4ab-44f5-a157-02264fd0b0b2', '1e2026f6-e4ab-44f5-a157-02264fd0b0b2', '1e2026f6-e4ab-44f5-a157-02264fd0b0b2',
  '1e2026f6-e4ab-44f5-a157-02264fd0b0b2', '1e2026f6-e4ab-44f5-a157-02264fd0b0b2', 'f53e32c6-b02d-4529-8d0b-94d35eb4bfe8',
  'f53e32c6-b02d-4529-8d0b-94d35eb4bfe8', 'b596e5d3-a0fc-4216-8bdd-8e7183fe4330', 'b596e5d3-a0fc-4216-8bdd-8e7183fe4330',
  '8cbed24e-af3e-4504-ad13-2b1d5090069c', '1e2026f6-e4ab-44f5-a157-02264fd0b0b2', '8cbed24e-af3e-4504-ad13-2b1d5090069c',
  '6ddda6b6-2800-470f-b2a5-d8b8836b461e', 'cb309f19-a108-49b8-88ea-53a86c6b0f6d', '8cbed24e-af3e-4504-ad13-2b1d5090069c',
  'cb309f19-a108-49b8-88ea-53a86c6b0f6d', 'cb309f19-a108-49b8-88ea-53a86c6b0f6d', 'c37fef70-c961-4101-b686-44c9393b1ca8',
  '8ccd0ced-642e-4298-8dd7-5fe7b3d470a1', '8ccd0ced-642e-4298-8dd7-5fe7b3d470a1', '892fa701-1bcc-4ba0-a97c-26654b4ff278',
  '892fa701-1bcc-4ba0-a97c-26654b4ff278', '6ddda6b6-2800-470f-b2a5-d8b8836b461e', '64f65247-f25c-461d-92bc-4b5621eebe1d',
  '892fa701-1bcc-4ba0-a97c-26654b4ff278', '892fa701-1bcc-4ba0-a97c-26654b4ff278', '8c7105c3-94fc-4e52-9d7d-58111922430a',
  '2df18a44-32c7-49a3-87a7-b9d5f131d1f8', '8c7105c3-94fc-4e52-9d7d-58111922430a', '633e1009-a1b6-4529-b37b-3d870df5d30d',
  '8ccd0ced-642e-4298-8dd7-5fe7b3d470a1', '8ccd0ced-642e-4298-8dd7-5fe7b3d470a1', 'c37fef70-c961-4101-b686-44c9393b1ca8',
  '633e1009-a1b6-4529-b37b-3d870df5d30d', '2ef179c8-7f69-48ef-b431-47fd19c0a693', '3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18',
  '1ef770b4-8137-4dea-a94b-75f494ca4a1c', 'cb309f19-a108-49b8-88ea-53a86c6b0f6d', '9f44e37a-002b-47f6-850b-6ddd0d1ebb12',
  '1824dd1f-882d-4aef-b408-68c8eae2c3f4', '55399e25-6e8b-4816-b408-159de5286e6c', '75c284d7-e4a7-4d8e-9e9e-ddc751cbd3cf',
  '9f44e37a-002b-47f6-850b-6ddd0d1ebb12', '80782a7f-296f-4717-ac9f-5a653ba6fc42', '3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18',
  '3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18', '8cbed24e-af3e-4504-ad13-2b1d5090069c', 'e082d3bb-60aa-4b88-a671-4a589429cc14',
  '892fa701-1bcc-4ba0-a97c-26654b4ff278', 'a3356726-202d-4eca-9e9d-bad2de6343cc', 'a3356726-202d-4eca-9e9d-bad2de6343cc',
  'a3356726-202d-4eca-9e9d-bad2de6343cc', '8ff425a0-e0f2-4243-afe1-6b0374766a40', 'f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb',
  '1ef770b4-8137-4dea-a94b-75f494ca4a1c', '1ef770b4-8137-4dea-a94b-75f494ca4a1c', '8cbed24e-af3e-4504-ad13-2b1d5090069c',
  '1ef770b4-8137-4dea-a94b-75f494ca4a1c', '1ef770b4-8137-4dea-a94b-75f494ca4a1c', '1ef770b4-8137-4dea-a94b-75f494ca4a1c',
  '1ef770b4-8137-4dea-a94b-75f494ca4a1c', 'f559012c-e25a-4a38-a075-a5ba4b5ba547', '0a405f7b-3542-4a65-8e6c-ce0ab8556a9d',
  '619abd8b-b15f-49a3-8ca4-5137c635f4f1', '3dfdb282-0cbe-4723-ad64-3cb8e2066734', '95ffa566-0a9f-4d43-ba52-d41be4f54342',
  '84cce0b5-1767-477c-a337-406c0d3f8b0c', 'ee16629f-3291-445b-8285-6e645fa7fb41', '620e4720-519d-4460-b850-ba90f9c49d54',
  'd3785d19-08cc-48c4-8520-2892da2bc5c7', '9f44e37a-002b-47f6-850b-6ddd0d1ebb12', '9f44e37a-002b-47f6-850b-6ddd0d1ebb12',
  '9f44e37a-002b-47f6-850b-6ddd0d1ebb12', '9f44e37a-002b-47f6-850b-6ddd0d1ebb12', '0f764942-ac5f-40c6-84b9-4d053bb2e002',
  '0f764942-ac5f-40c6-84b9-4d053bb2e002', 'ee58a403-6212-47ea-9f58-0c6b45dc4b80', '9bb09fec-82ae-4bbf-aab0-e0da7d1b25f8',
  '892fa701-1bcc-4ba0-a97c-26654b4ff278', '9f44e37a-002b-47f6-850b-6ddd0d1ebb12', 'f559012c-e25a-4a38-a075-a5ba4b5ba547',
  '0f764942-ac5f-40c6-84b9-4d053bb2e002', 'f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb', 'f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb',
  '3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18', '3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18', '0f764942-ac5f-40c6-84b9-4d053bb2e002',
  '1ef770b4-8137-4dea-a94b-75f494ca4a1c', '64bd14e5-73eb-4d26-812e-b017b5c9bbed', '9b7a4371-744f-45bc-828e-8db5fe7051d3',
  '633e1009-a1b6-4529-b37b-3d870df5d30d', '633e1009-a1b6-4529-b37b-3d870df5d30d', '1ef770b4-8137-4dea-a94b-75f494ca4a1c',
  '0f764942-ac5f-40c6-84b9-4d053bb2e002', '0f764942-ac5f-40c6-84b9-4d053bb2e002', '0f764942-ac5f-40c6-84b9-4d053bb2e002',
  '64bd14e5-73eb-4d26-812e-b017b5c9bbed', '819cd146-ccd5-4ba0-9288-036286e5bd91', '64f65247-f25c-461d-92bc-4b5621eebe1d',
  '04846eed-c5e5-4383-87dd-44d44f98d4f7', 'fed0c004-8c2c-4e03-b4d6-a4cf1b9c1d8a', '47854a3d-7812-4646-8026-7089296000cb',
  'f559012c-e25a-4a38-a075-a5ba4b5ba547', 'df7ab19c-daf6-42ea-be5f-c360e65ac30f', 'eb3ee1fe-9f70-4750-b1c5-2d3cf14e6eea',
  '0f764942-ac5f-40c6-84b9-4d053bb2e002', '0f764942-ac5f-40c6-84b9-4d053bb2e002', 'f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb',
  'e8b592fa-e94b-49db-a93d-de8c56d51b3b', '64bd14e5-73eb-4d26-812e-b017b5c9bbed', '64bd14e5-73eb-4d26-812e-b017b5c9bbed',
  '64bd14e5-73eb-4d26-812e-b017b5c9bbed', '509cc5e5-bffd-4358-8478-407bd0c96069', '1c985bad-e77a-40f5-badc-8d399122b55f',
  '64bd14e5-73eb-4d26-812e-b017b5c9bbed', '1c985bad-e77a-40f5-badc-8d399122b55f', '0208b28a-812b-4d4c-a0ee-fb5918d09d65',
  'f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb', 'b6914967-08f5-481a-8cfd-ee325232d4ff'
];

// Analyze the data
const workspaceCount = {};
let validReports = 0;
let invalidReports = 0;

reportWorkspaceIds.forEach(id => {
  workspaceCount[id] = (workspaceCount[id] || 0) + 1;
  if (validWorkspaceIds.has(id)) {
    validReports++;
  } else {
    invalidReports++;
  }
});

console.log('=== POWER BI WORKSPACE ANALYSIS RESULTS ===\n');
console.log(`Total Reports Analyzed: ${reportWorkspaceIds.length}`);
console.log(`Reports with VALID Workspace IDs: ${validReports}`);
console.log(`Reports with INVALID Workspace IDs: ${invalidReports}`);
console.log(`Percentage of Valid Reports: ${((validReports / reportWorkspaceIds.length) * 100).toFixed(1)}%\n`);

console.log('=== WORKSPACE DISTRIBUTION (Top 10) ===');
const sortedWorkspaces = Object.entries(workspaceCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

sortedWorkspaces.forEach(([id, count]) => {
  const status = validWorkspaceIds.has(id) ? '✅ VALID' : '❌ INVALID';
  console.log(`${id}: ${count} reports ${status}`);
});

console.log('\n=== YOUR VALID WORKSPACES USAGE ===');
Array.from(validWorkspaceIds).forEach(id => {
  const count = workspaceCount[id] || 0;
  console.log(`${id}: ${count} reports`);
});

const totalValidWorkspaces = Array.from(validWorkspaceIds).filter(id => workspaceCount[id] > 0).length;
console.log(`\nWorkspaces with reports: ${totalValidWorkspaces} out of ${validWorkspaceIds.size} valid workspaces`);
