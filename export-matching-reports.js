// Export matching reports - Power BI Workspace Analysis
// This script will identify and export all reports that have valid workspace IDs

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

// All reports from your data (extracted from the JSON you provided)
const allReports = [
  {
    "id": "1efe3dbc-9c99-4e75-afde-8bd9c55986b1",
    "name": "Report Usage Metrics Report",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "e85eb971-26fe-45d9-8f5b-6a23162f4efe",
    "name": "Usage Metrics Report",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "0e2fcf77-9a89-4b0b-bdb5-222494d8af9d",
    "name": "aantal in kaart",
    "workspaceId": "75c284d7-e4a7-4d8e-9e9e-ddc751cbd3cf"
  },
  {
    "id": "3b4ea9a7-dc66-4030-ad64-6b6b402c5bec",
    "name": "aantallen en leges per behandelaar en plaats",
    "workspaceId": "75c284d7-e4a7-4d8e-9e9e-ddc751cbd3cf"
  },
  {
    "id": "2b673a3a-3a54-420c-a957-8cc3e65b0297",
    "name": "GemeenteHardenberg_Vastgoed 1.0",
    "workspaceId": "57004d42-29c4-4f39-a819-5577a6674dae"
  },
  {
    "id": "102d50a4-b7d5-488a-9176-0e6819e98dc1",
    "name": "[App] GemeenteHardenberg_Vastgoed 1.0",
    "workspaceId": "57004d42-29c4-4f39-a819-5577a6674dae"
  },
  {
    "id": "7f21910c-c88b-40aa-a0aa-42dfcda7a5ae",
    "name": "GemeenteHardenberg_Vastgoed 1.0",
    "workspaceId": "d269a4ac-a454-4913-9f6d-0e3d514fd088"
  },
  {
    "id": "2eb0d69c-4253-413f-8818-62b71444dee2",
    "name": "Hardenberg SD",
    "workspaceId": "6ddda6b6-2800-470f-b2a5-d8b8836b461e"
  },
  {
    "id": "3074e2ef-09ab-4610-b28f-d36e6111e34f",
    "name": "Test",
    "workspaceId": "88432e17-2143-4190-a66d-07924cdf8fa5"
  },
  {
    "id": "7be14358-e113-45e4-b729-28cb79da87e8",
    "name": "Report Usage Metrics Report",
    "workspaceId": "57004d42-29c4-4f39-a819-5577a6674dae"
  },
  {
    "id": "7cfe8d0c-c2e8-4fe6-81dd-058f0f892c6b",
    "name": "Usage Metrics Report",
    "workspaceId": "57004d42-29c4-4f39-a819-5577a6674dae"
  },
  {
    "id": "9acd07e7-a52a-42ce-b7af-3f789c9af798",
    "name": "Report Usage Metrics Report",
    "workspaceId": "d269a4ac-a454-4913-9f6d-0e3d514fd088"
  },
  {
    "id": "8bcee2ad-1a4a-491e-92d5-a1c4340da3b9",
    "name": "[App] Sociaal Domein",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "3faca8e2-87fd-418a-9b0f-07db1bfab533",
    "name": "[App] Toegang",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "840ce793-25c5-47fd-bce1-8a15424757c1",
    "name": "[App] CEO dashboard",
    "workspaceId": "64f65247-f25c-461d-92bc-4b5621eebe1d"
  },
  {
    "id": "17bbd839-4f3a-48ec-9543-198632ae1562",
    "name": "Report Usage Metrics Report",
    "workspaceId": "64f65247-f25c-461d-92bc-4b5621eebe1d"
  },
  {
    "id": "d35febf6-24b7-4dc7-81d1-fa72e4074d5f",
    "name": "Naamloze scorecard",
    "workspaceId": "e852415f-4007-4006-bee0-5c8795a6d2d6"
  },
  {
    "id": "eec371c2-c948-4b50-bce9-4bf81d7ca71e",
    "name": "Contractmanagement v2",
    "workspaceId": "6ddda6b6-2800-470f-b2a5-d8b8836b461e"
  },
  {
    "id": "f1f6fdc1-c4f1-43dc-9663-12b50b10ecc0",
    "name": "Contractmanagement SP",
    "workspaceId": "6ddda6b6-2800-470f-b2a5-d8b8836b461e"
  },
  {
    "id": "1121499c-c2f5-4bde-becd-0bef22ae3bc4",
    "name": "Naamloze scorecard",
    "workspaceId": "71a5c6ad-6f14-4e34-9a57-862a5674c56c"
  },
  {
    "id": "2aeee58d-3d02-445d-9e94-491f423c983f",
    "name": "Usage Metrics Report",
    "workspaceId": "64f65247-f25c-461d-92bc-4b5621eebe1d"
  },
  {
    "id": "dec28c78-da53-4b70-8b5f-ba7a62c585b6",
    "name": "Competensys - GGM mapping",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "835798fc-60e4-4c1a-9cd6-76d37d6249a8",
    "name": "Competensys - Rapport",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "c1135117-d760-4e98-b83c-2d67534e892f",
    "name": "Competensys - GGM mapping filters herstelbestand",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "e3fb9fe7-04f7-4ad7-a20e-bd056d158ad9",
    "name": "Contractmanagement PCA",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "1f75ccc2-0063-486c-a3d6-379aa3eeb33a",
    "name": "2 Clienten Dashboard Werk & Participatie",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "3247c037-0ee6-4651-aaed-22fc889e0584",
    "name": "[App] 2 Clienten Dashboard Werk & Participatie",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "19dd5b57-76dd-4c6d-8b33-b4d2df842c1d",
    "name": "2 Clienten Dashboard Werk & Participatie - Acceptatie",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "336e6b4d-c3e3-45f9-b32e-39b3a9d62585",
    "name": "[App] 2 Clienten Dashboard Werk & Participatie - Acceptatie",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "d2e7ee02-abd9-4335-9714-ff9e145eb6d4",
    "name": "2 Clienten Dashboard Werk & Participatie - Niels",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "0affb9f9-1531-4637-ba78-d167b8c2baa9",
    "name": "Kopie Niels - Clienten Overzicht",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "e11fbe53-db22-46ea-bcb8-f41a81a13c51",
    "name": "Acceptatie 1 - Niels",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "7d83f2b2-b94f-4b42-944b-bfd3ffe3a58b",
    "name": "Acceptatie 2 - Niels",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "d2639ad6-03db-4d9b-8011-30c0bc80df2b",
    "name": "Linkedin Sales Navigator",
    "workspaceId": "f53e32c6-b02d-4529-8d0b-94d35eb4bfe8"
  },
  {
    "id": "d74d802d-d590-4ca7-9745-be1d1f866bc5",
    "name": "[App] Linkedin Sales Navigator",
    "workspaceId": "f53e32c6-b02d-4529-8d0b-94d35eb4bfe8"
  },
  {
    "id": "18500f4d-5b19-4abc-ac12-49b495f38915",
    "name": "Power BI Apps on AppSource",
    "workspaceId": "b596e5d3-a0fc-4216-8bdd-8e7183fe4330"
  },
  {
    "id": "5b7cd27f-82d4-4afb-a504-117d7bf4de67",
    "name": "[App] Power BI Apps on AppSource",
    "workspaceId": "b596e5d3-a0fc-4216-8bdd-8e7183fe4330"
  },
  {
    "id": "1663d67a-bb0f-4255-a6e5-989984413e78",
    "name": "2 Clienten Dashboard Werk & Participatie",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "bb0027e3-5c0b-49ed-91e9-a85c52cebdbe",
    "name": "2 Clienten Dashboard Werk & Participatie - 181023",
    "workspaceId": "1e2026f6-e4ab-44f5-a157-02264fd0b0b2"
  },
  {
    "id": "d0168365-894a-4da9-931c-1aeca28bbae7",
    "name": "2 Clienten Dashboard Werk & Participatie - 181023",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "67df6897-3549-43ac-b762-f4e94867cfc7",
    "name": "Datamart IB",
    "workspaceId": "6ddda6b6-2800-470f-b2a5-d8b8836b461e"
  },
  {
    "id": "9c31d257-d726-408b-8476-c2630c14fc70",
    "name": "Datamart IB",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "9844edd0-d1f0-4c8a-bff5-8987cebffa74",
    "name": "Dashboard backoffice",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "b893d67c-4c47-431c-9e78-e2f609b5824a",
    "name": "1 Power BI Report - Power Apps Test",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "de41ffc4-2628-466c-8903-963bfaf5a2c5",
    "name": "Staat van Hardenberg - Acceptatie",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "e0862afb-3dbf-4b64-8c3a-ce96ccd0bc04",
    "name": "Datamart Hardenberg SP",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "dbf213f0-e2d0-46df-a940-9690fda1afd3",
    "name": "Particpatie",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "7fa91dee-f498-47da-b1b3-04baf5f6e945",
    "name": "Test",
    "workspaceId": "c37fef70-c961-4101-b686-44c9393b1ca8"
  },
  {
    "id": "c95465fe-e01c-47b7-8859-ed770784db2a",
    "name": "Artificial Intelligence Sample",
    "workspaceId": "8ccd0ced-642e-4298-8dd7-5fe7b3d470a1"
  },
  {
    "id": "0206c017-c992-472c-8a47-7593d420385b",
    "name": "Regional Sales Sample",
    "workspaceId": "8ccd0ced-642e-4298-8dd7-5fe7b3d470a1"
  },
  {
    "id": "539c0f7e-74ff-4906-8524-70d26857f0a0",
    "name": "PGB DashboardV2",
    "workspaceId": "892fa701-1bcc-4ba0-a97c-26654b4ff278"
  },
  {
    "id": "61d9d8dd-9f73-4958-8610-236bb9e63109",
    "name": "Report Usage Metrics Report",
    "workspaceId": "892fa701-1bcc-4ba0-a97c-26654b4ff278"
  },
  {
    "id": "173cfcc9-0ac3-41c4-93ee-d040aabe7143",
    "name": "Datamart Hardenberg SP",
    "workspaceId": "6ddda6b6-2800-470f-b2a5-d8b8836b461e"
  },
  {
    "id": "36070a1f-9a89-4b6f-9ee1-16334781598b",
    "name": "Dashboard finance",
    "workspaceId": "892fa701-1bcc-4ba0-a97c-26654b4ff278"
  },
  {
    "id": "72379929-0d40-43e2-a553-7d8970f39473",
    "name": "test",
    "workspaceId": "892fa701-1bcc-4ba0-a97c-26654b4ff278"
  },
  {
    "id": "24313cde-4884-4d1d-a494-19e993dda0b9",
    "name": "Management",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "7eb8b006-9a57-4fac-b52b-5034fed1896f",
    "name": "Financieel",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "1e9c0811-310a-49be-add5-084a45e65435",
    "name": "Store Sales",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "457fead9-d896-4938-b3b3-994dbb63985d",
    "name": "Regional Sales Sample",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "cc1c8bf3-37c8-4e2e-bd9e-53b166263a0f",
    "name": "Sales and Marketing Sample",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "a289a3a0-dea8-4538-8461-ee0b972d3870",
    "name": "Procurement Analysis Sample",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "02743924-c352-40ea-ad0f-bc8225973947",
    "name": "Revenue Opportunities",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "65f930b9-0f3c-4f1a-bc11-dbbbc7f0faa7",
    "name": "Revenue Opportunities",
    "workspaceId": "8c7105c3-94fc-4e52-9d7d-58111922430a"
  },
  {
    "id": "f3994e4e-486f-4b20-89b5-75b3d87d2db1",
    "name": "Personeelsbegroting 2025",
    "workspaceId": "593df8c4-e5c0-40eb-b305-29377c09823b"
  },
  {
    "id": "308c484d-dfa9-4843-adc8-9878d8956e84",
    "name": "H2-voorbeeld 2-5",
    "workspaceId": "2df18a44-32c7-49a3-87a7-b9d5f131d1f8"
  },
  {
    "id": "729370c0-4ab0-4b6c-8b3b-7d4cc817fd03",
    "name": "Dashboard Warmtetransitie 2 - DEGO",
    "workspaceId": "8c7105c3-94fc-4e52-9d7d-58111922430a"
  },
  {
    "id": "dc93e691-2104-44c2-a519-27a29b9042e3",
    "name": "CoEDashboard",
    "workspaceId": "633e1009-a1b6-4529-b37b-3d870df5d30d"
  },
  {
    "id": "9019e832-a23e-43f1-976a-ba184a703c70",
    "name": "Revenue Opportunities",
    "workspaceId": "8ccd0ced-642e-4298-8dd7-5fe7b3d470a1"
  },
  {
    "id": "9cbff00c-2ae7-4045-886a-eb819998417e",
    "name": "Revenu Opportunities",
    "workspaceId": "8ccd0ced-642e-4298-8dd7-5fe7b3d470a1"
  },
  {
    "id": "104fc52d-2e55-44d8-a16e-596f5fcf55e5",
    "name": "DivDash",
    "workspaceId": "c37fef70-c961-4101-b686-44c9393b1ca8"
  },
  {
    "id": "9ee7fcb7-3363-49af-8595-dd7c4d14722e",
    "name": "GemeenteHardenbergWerkdrukmeter",
    "workspaceId": "633e1009-a1b6-4529-b37b-3d870df5d30d"
  },
  {
    "id": "ca20552b-cfc9-4db1-aeda-d212626ee692",
    "name": "GemeenteHardenbergWerkdrukmeter",
    "workspaceId": "2ef179c8-7f69-48ef-b431-47fd19c0a693"
  },
  {
    "id": "7a5139bf-ab1b-43e1-8e59-d0ac6431d90e",
    "name": "Template Stylessheet v3_5_1",
    "workspaceId": "3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18"
  },
  {
    "id": "502f31be-f235-4d83-a20e-e3362647a999",
    "name": "DashboardGemeentelijkVastgoed",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "6dcd3072-96a7-4446-9782-c561ed7b4737",
    "name": "Sociaal Domein SP",
    "workspaceId": "cb309f19-a108-49b8-88ea-53a86c6b0f6d"
  },
  {
    "id": "70675919-28e0-4246-9458-8ddb8a821120",
    "name": "Kwaliteit- en procesmonitor WOZ-BAG V10",
    "workspaceId": "9f44e37a-002b-47f6-850b-6ddd0d1ebb12"
  },
  {
    "id": "a5495477-68bb-41f0-8bd2-52561bff9297",
    "name": "Getting Started in Power BI",
    "workspaceId": "1824dd1f-882d-4aef-b408-68c8eae2c3f4"
  },
  {
    "id": "9ec8425c-bd34-46af-a1c4-e36c22b79fd0",
    "name": "Getting Started in Power BI",
    "workspaceId": "55399e25-6e8b-4816-b408-159de5286e6c"
  },
  {
    "id": "f8dda87b-e7e6-4da9-b536-7ebe2464f771",
    "name": "Revenue Opportunities",
    "workspaceId": "75c284d7-e4a7-4d8e-9e9e-ddc751cbd3cf"
  },
  {
    "id": "ae2288a3-3777-4e9a-8a15-ff4855b1327c",
    "name": "Kwaliteit- en procesmonitor WOZ-BAG datafundament",
    "workspaceId": "9f44e37a-002b-47f6-850b-6ddd0d1ebb12"
  },
  {
    "id": "987ab0c3-fca1-46f7-9b22-ef26727d0066",
    "name": "DashboardGemeentelijkVastgoed_2",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "59414f46-3be2-4451-8766-56cfe166dcbb",
    "name": "Getting Started in Power BI",
    "workspaceId": "80782a7f-296f-4717-ac9f-5a653ba6fc42"
  },
  {
    "id": "444e6109-c851-4273-8939-086554aba38b",
    "name": "test ympkje",
    "workspaceId": "3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18"
  },
  {
    "id": "de80f589-9f33-4e6a-89a6-56af24272ce3",
    "name": "Inwoners scorecard",
    "workspaceId": "3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18"
  },
  {
    "id": "421a7e72-0c27-4b65-a058-fa33f12e38d2",
    "name": "test inwoners",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "1d1368fc-5a89-40bc-a3fe-58f6c9f9c5ee",
    "name": "Getting Started in Power BI",
    "workspaceId": "e082d3bb-60aa-4b88-a671-4a589429cc14"
  },
  {
    "id": "22ce8870-b8a0-45d1-b537-21f766bb3242",
    "name": "Data Jeugdzorg Hardenberg",
    "workspaceId": "892fa701-1bcc-4ba0-a97c-26654b4ff278"
  },
  {
    "id": "3ce4a70d-dbae-4be1-b1af-15e9e0ce850b",
    "name": "Getting Started in Power BI",
    "workspaceId": "a3356726-202d-4eca-9e9d-bad2de6343cc"
  },
  {
    "id": "d54a0cf6-8bee-45a5-905d-5da8bab4c53d",
    "name": "Getting Started in Power BI",
    "workspaceId": "a3356726-202d-4eca-9e9d-bad2de6343cc"
  },
  {
    "id": "24100ae1-51b7-4dbf-844d-f46fec6526e9",
    "name": "Getting Started in Power BI",
    "workspaceId": "a3356726-202d-4eca-9e9d-bad2de6343cc"
  },
  {
    "id": "e1516ec5-cb5a-41c4-9cff-0032fc1d2f8b",
    "name": "Artificial Intelligence Sample",
    "workspaceId": "8ff425a0-e0f2-4243-afe1-6b0374766a40"
  },
  {
    "id": "19412a11-eaa8-46f5-861b-4a212ec95557",
    "name": "Staat van Hardenberg",
    "workspaceId": "f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb"
  },
  {
    "id": "79d3b44d-b063-4e93-a766-778a4f4dccde",
    "name": "DashboardGemeentelijkVastgoed_Fase2_Ontwikkel",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "0f554b00-13d6-42e2-846c-bef76ea0ed1f",
    "name": "DashboardGemeentelijkVastgoed_Fase2_Ontwikkel 311024",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "a4548758-bf03-4f07-8575-e5229d993be6",
    "name": "Gepagineerd rapport test",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "e428c96e-fefe-4498-9a83-d7ec0265028c",
    "name": "Gepagineerd rapport test",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "0237f08b-a561-416f-8de0-41a35a9af0fb",
    "name": "Naamloze scorecard",
    "workspaceId": "8cbed24e-af3e-4504-ad13-2b1d5090069c"
  },
  {
    "id": "c102f9ed-ebce-4ae5-bb4b-e82a3e8c2cdf",
    "name": "test rapport",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "02aca23a-70ec-4c86-8547-ebe20df9a02b",
    "name": "DashboardGemeentelijkVastgoed_Fase2_Ontwikkel 041124",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "068d620d-3b76-4a8f-9aea-738126fc8cd6",
    "name": "Gepagineerd rapport test 2",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "dee597ff-0209-422b-ab74-7bea24e56e7c",
    "name": "Rapport portefeuille algemeen",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "873fb0d9-b1e5-414b-a9df-a646f6702566",
    "name": "Sprint planning & organisatie v2",
    "workspaceId": "f559012c-e25a-4a38-a075-a5ba4b5ba547"
  },
  {
    "id": "3c198dca-d11f-45f8-ba20-928a18401de5",
    "name": "Getting Started in Power BI",
    "workspaceId": "0a405f7b-3542-4a65-8e6c-ce0ab8556a9d"
  },
  {
    "id": "cead3866-e5aa-4f58-8254-f4f9f59b08db",
    "name": "Conceptrapportage PowerBI Meldingen en pentest V0.6",
    "workspaceId": "619abd8b-b15f-49a3-8ca4-5137c635f4f1"
  },
  {
    "id": "9151eb5c-14bb-4088-9e4f-3d5a406ae25d",
    "name": "Getting Started in Power BI",
    "workspaceId": "3dfdb282-0cbe-4723-ad64-3cb8e2066734"
  },
  {
    "id": "4c0a61c7-b4dd-4c3d-9569-5da706495d71",
    "name": "Getting Started in Power BI",
    "workspaceId": "95ffa566-0a9f-4d43-ba52-d41be4f54342"
  },
  {
    "id": "77a910e7-7255-4e13-8247-4df18ba9a0eb",
    "name": "Getting Started in Power BI",
    "workspaceId": "84cce0b5-1767-477c-a337-406c0d3f8b0c"
  },
  {
    "id": "cef47565-a8c4-4385-8652-f75d0b444c7b",
    "name": "Getting Started in Power BI",
    "workspaceId": "ee16629f-3291-445b-8285-6e645fa7fb41"
  },
  {
    "id": "5095567f-6109-4ae2-ba29-63812170c06b",
    "name": "Getting Started in Power BI",
    "workspaceId": "620e4720-519d-4460-b850-ba90f9c49d54"
  },
  {
    "id": "69dfb52b-bb00-46cc-bcdb-63b22744ce29",
    "name": "Getting Started in Power BI",
    "workspaceId": "d3785d19-08cc-48c4-8520-2892da2bc5c7"
  },
  {
    "id": "58ca37a5-790e-4a15-a058-0cb944c6e0ef",
    "name": "Kwaliteit- en procesmonitor fase 2.5",
    "workspaceId": "9f44e37a-002b-47f6-850b-6ddd0d1ebb12"
  },
  {
    "id": "392c75d1-9730-491c-9003-31bd80459b81",
    "name": "Kwaliteit- en procesmonitor fase 2.6",
    "workspaceId": "9f44e37a-002b-47f6-850b-6ddd0d1ebb12"
  },
  {
    "id": "96323433-cc64-4489-b0b1-b6abc44d45eb",
    "name": "Kwaliteit- en procesmonitor feedback Poula en Els",
    "workspaceId": "9f44e37a-002b-47f6-850b-6ddd0d1ebb12"
  },
  {
    "id": "b60d4878-6691-4e3e-ac98-3ce230163423",
    "name": "DEMO kwaliteit en procesmonitor WOZBAG",
    "workspaceId": "9f44e37a-002b-47f6-850b-6ddd0d1ebb12"
  },
  {
    "id": "0e2e7533-2f14-46ab-bf61-eec5045da56b",
    "name": "Gantt 2.0",
    "workspaceId": "633e1009-a1b6-4529-b37b-3d870df5d30d"
  },
  {
    "id": "b47d35d9-3347-430b-a3f5-75a1a944bfb2",
    "name": "Gantt 2.0",
    "workspaceId": "0f764942-ac5f-40c6-84b9-4d053bb2e002"
  },
  {
    "id": "3b33748e-e17b-470b-9222-6ccfc2fbfd0e",
    "name": "Getting Started in Power BI",
    "workspaceId": "ee58a403-6212-47ea-9f58-0c6b45dc4b80"
  },
  {
    "id": "778abb84-cfb9-4fb3-9e8a-2d7f13151ac5",
    "name": "Getting Started in Power BI",
    "workspaceId": "9bb09fec-82ae-4bbf-aab0-e0da7d1b25f8"
  },
  {
    "id": "9c1194cd-7109-463d-9bf0-c3558100190e",
    "name": "Data WMO",
    "workspaceId": "892fa701-1bcc-4ba0-a97c-26654b4ff278"
  },
  {
    "id": "32596649-d15b-4018-88b9-c918987aa83e",
    "name": "Kwaliteit- en procesmonitor fase 3.0 Ontwikkel",
    "workspaceId": "9f44e37a-002b-47f6-850b-6ddd0d1ebb12"
  },
  {
    "id": "1396c843-765f-48fa-b53f-4ed092e0d349",
    "name": "Sprint planning & organisatie - Team Data",
    "workspaceId": "f559012c-e25a-4a38-a075-a5ba4b5ba547"
  },
  {
    "id": "f57b83d5-ae4e-4148-bf12-0284ff402e8b",
    "name": "Hardenberg Gantt PRD",
    "workspaceId": "0f764942-ac5f-40c6-84b9-4d053bb2e002"
  },
  {
    "id": "9cecbb41-08ce-402b-bcad-417fd59e0995",
    "name": "Staat van Hardenberg - Ontwikkel",
    "workspaceId": "f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb"
  },
  {
    "id": "35c73af1-7867-4d56-bfa1-412c28ce4f94",
    "name": "Report Usage Metrics Report",
    "workspaceId": "f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb"
  },
  {
    "id": "10b9b883-386b-493a-87c3-7e549d5b607e",
    "name": "Report Usage Metrics Report",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "0ae7f60d-aa35-4249-a781-ec5028034930",
    "name": "Hardenberg Gantt PRD_YW",
    "workspaceId": "3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18"
  },
  {
    "id": "21dfcc2d-7f5f-4266-b887-73fb67b05d25",
    "name": "Hardenberg Gantt PRD_130325",
    "workspaceId": "3e459af9-d0fc-4eb6-96a5-ad4eb38f3d18"
  },
  {
    "id": "613f23fd-74ce-42b5-ae53-49e486fef02d",
    "name": "Hardenberg Gantt PRD_130325",
    "workspaceId": "0f764942-ac5f-40c6-84b9-4d053bb2e002"
  },
  {
    "id": "3ded9b63-73fe-4567-9d36-aa6ef61496ab",
    "name": "test Ympkje",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "2ccd6fa4-900e-4d79-bac9-03ec5b045011",
    "name": "PGB DashboardV2",
    "workspaceId": "64bd14e5-73eb-4d26-812e-b017b5c9bbed"
  },
  {
    "id": "77abe231-4637-4487-9256-3cada57b0312",
    "name": "VVV bonnen",
    "workspaceId": "9b7a4371-744f-45bc-828e-8db5fe7051d3"
  },
  {
    "id": "4ce6852b-a036-4d8f-b786-ad374ef24e44",
    "name": "Test1",
    "workspaceId": "633e1009-a1b6-4529-b37b-3d870df5d30d"
  },
  {
    "id": "ce1e323d-23e8-4df2-9f87-9c5e861157df",
    "name": "test2",
    "workspaceId": "633e1009-a1b6-4529-b37b-3d870df5d30d"
  },
  {
    "id": "3ae49b52-d361-421e-8f07-a624e5dd104d",
    "name": "Usage Metrics Report",
    "workspaceId": "1ef770b4-8137-4dea-a94b-75f494ca4a1c"
  },
  {
    "id": "0f808384-3997-46aa-88c5-94af95af76c7",
    "name": "Report Usage Metrics Report",
    "workspaceId": "0f764942-ac5f-40c6-84b9-4d053bb2e002"
  },
  {
    "id": "f542d455-bb4d-4151-91fd-7cd39f7a54f8",
    "name": "Usage Metrics Report",
    "workspaceId": "0f764942-ac5f-40c6-84b9-4d053bb2e002"
  },
  {
    "id": "02c5bd1f-ceb6-42b2-a8c9-6bceb5866c79",
    "name": "Hardenberg Gantt PRD_170425",
    "workspaceId": "0f764942-ac5f-40c6-84b9-4d053bb2e002"
  },
  {
    "id": "a8aadd0d-a122-46bb-a4d3-7d6ffddbce5d",
    "name": "WMO zorg gemeente Hardenberg",
    "workspaceId": "64bd14e5-73eb-4d26-812e-b017b5c9bbed"
  },
  {
    "id": "3b8cdd07-f817-4707-a8d3-aa3a68e55dfc",
    "name": "Getting Started in Power BI",
    "workspaceId": "819cd146-ccd5-4ba0-9288-036286e5bd91"
  },
  {
    "id": "e6e9ad79-767e-4124-93a3-4019602e12e3",
    "name": "CEO dashboard Hardenberg CM v2",
    "workspaceId": "64f65247-f25c-461d-92bc-4b5621eebe1d"
  },
  {
    "id": "c350186e-1bc8-4f2f-816c-7c5ee14c7360",
    "name": "Getting Started in Power BI",
    "workspaceId": "04846eed-c5e5-4383-87dd-44d44f98d4f7"
  },
  {
    "id": "59dce105-aad7-4fea-ae8c-7c8a7cd0f17d",
    "name": "Getting Started in Power BI",
    "workspaceId": "fed0c004-8c2c-4e03-b4d6-a4cf1b9c1d8a"
  },
  {
    "id": "f5d82a7e-1f04-47ed-99bf-449efbf2da71",
    "name": "Getting Started in Power BI",
    "workspaceId": "47854a3d-7812-4646-8026-7089296000cb"
  },
  {
    "id": "bee6f5fd-f741-48e5-be34-e401689e3232",
    "name": "2 Clienten Dashboard Werk & Participatie new design v5.3",
    "workspaceId": "f559012c-e25a-4a38-a075-a5ba4b5ba547"
  },
  {
    "id": "8048a1a1-4968-423d-a359-b6ccebd262d6",
    "name": "open melingen",
    "workspaceId": "df7ab19c-daf6-42ea-be5f-c360e65ac30f"
  },
  {
    "id": "cd098b1e-9cd4-45e9-b818-867c819d5023",
    "name": "Getting Started in Power BI",
    "workspaceId": "eb3ee1fe-9f70-4750-b1c5-2d3cf14e6eea"
  },
  {
    "id": "00d1a918-04ff-4a6e-967a-25f78e112f91",
    "name": "Hardenberg Gantt TST",
    "workspaceId": "0f764942-ac5f-40c6-84b9-4d053bb2e002"
  },
  {
    "id": "451aef12-e5a8-461c-80e5-ba472f232a70",
    "name": "Hardenberg Gantt (TEST)",
    "workspaceId": "0f764942-ac5f-40c6-84b9-4d053bb2e002"
  },
  {
    "id": "ee28a3b3-bb10-4549-8cd1-dcb922de6485",
    "name": "Staat van Hardenberg - Ontwikkel - nieuw design",
    "workspaceId": "f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb"
  },
  {
    "id": "20f41b8b-a059-4db4-b144-5d4d50dbf767",
    "name": "Content Sharing",
    "workspaceId": "e8b592fa-e94b-49db-a93d-de8c56d51b3b"
  },
  {
    "id": "48544397-1ba2-4bd4-ae0e-c8a4b2c19094",
    "name": "Jeugdzorg gebruik gemeente Hardenberg",
    "workspaceId": "64bd14e5-73eb-4d26-812e-b017b5c9bbed"
  },
  {
    "id": "77a4ef3b-619e-48bc-be6c-afebdb9156e7",
    "name": "Jeugdzorg gebruik gemeente Hardenberg - nieuwe stijl - 210725 DB",
    "workspaceId": "64bd14e5-73eb-4d26-812e-b017b5c9bbed"
  },
  {
    "id": "dcdc25be-95cb-43f2-a8e9-cabe87d4d64a",
    "name": "Fitheidsscan",
    "workspaceId": "64bd14e5-73eb-4d26-812e-b017b5c9bbed"
  },
  {
    "id": "63d53169-575c-4649-8653-8a026559f61a",
    "name": "Getting Started in Power BI",
    "workspaceId": "509cc5e5-bffd-4358-8478-407bd0c96069"
  },
  {
    "id": "52179548-bcf0-4d0d-8292-5ba78393b4f4",
    "name": "Data Bedrijfsvoering",
    "workspaceId": "1c985bad-e77a-40f5-badc-8d399122b55f"
  },
  {
    "id": "9b0af237-91b2-4197-935c-7849c9c86251",
    "name": "WMO zorg gemeente Hardenberg - nieuwe stijl - 290725 DB",
    "workspaceId": "64bd14e5-73eb-4d26-812e-b017b5c9bbed"
  },
  {
    "id": "9cfd562e-164f-45dd-91e7-2088b00ede0d",
    "name": "Getting Started in Power BI",
    "workspaceId": "1c985bad-e77a-40f5-badc-8d399122b55f"
  },
  {
    "id": "e7b6908e-0170-4091-a3b2-32fa92837b49",
    "name": "Getting Started in Power BI",
    "workspaceId": "0208b28a-812b-4d4c-a0ee-fb5918d09d65"
  },
  {
    "id": "446f9b82-2f44-42b6-9798-fed8b8764da8",
    "name": "Staat van Hardenberg - Ontwikkel - nieuw design_20250818_met nieuwe kaart",
    "workspaceId": "f32fa36e-ae6a-4bf5-bd74-5f61bdde89bb"
  },
  {
    "id": "863b538a-d5ab-490f-923a-a7a6e3f2d882",
    "name": "Getting Started in Power BI",
    "workspaceId": "b6914967-08f5-481a-8cfd-ee325232d4ff"
  }
];

// Filter reports with valid workspace IDs
const matchingReports = allReports.filter(report => 
  validWorkspaceIds.has(report.workspaceId)
);

// Generate different export formats
function generateCSV(reports) {
  let csv = 'Report ID,Report Name,Workspace ID\n';
  reports.forEach(report => {
    csv += `"${report.id}","${report.name}","${report.workspaceId}"\n`;
  });
  return csv;
}

function generateJSON(reports) {
  return JSON.stringify(reports, null, 2);
}

function generateMarkdown(reports) {
  let md = '# Matching Power BI Reports\n\n';
  md += `Total matching reports: **${reports.length}**\n\n`;
  
  // Group by workspace
  const byWorkspace = {};
  reports.forEach(report => {
    if (!byWorkspace[report.workspaceId]) {
      byWorkspace[report.workspaceId] = [];
    }
    byWorkspace[report.workspaceId].push(report);
  });
  
  Object.entries(byWorkspace).forEach(([workspaceId, workspaceReports]) => {
    md += `## Workspace: ${workspaceId}\n`;
    md += `Reports: ${workspaceReports.length}\n\n`;
    
    workspaceReports.forEach(report => {
      md += `- **${report.name}** (ID: ${report.id})\n`;
    });
    md += '\n';
  });
  
  return md;
}

// Console output
console.log('=== MATCHING REPORTS EXPORT ===\n');
console.log(`Found ${matchingReports.length} reports with valid workspace IDs\n`);

// Group by workspace for summary
const workspaceSummary = {};
matchingReports.forEach(report => {
  if (!workspaceSummary[report.workspaceId]) {
    workspaceSummary[report.workspaceId] = 0;
  }
  workspaceSummary[report.workspaceId]++;
});

console.log('WORKSPACE SUMMARY:');
Object.entries(workspaceSummary)
  .sort((a, b) => b[1] - a[1])
  .forEach(([workspaceId, count]) => {
    console.log(`${workspaceId}: ${count} reports`);
  });

console.log('\n=== DETAILED REPORT LIST ===');
matchingReports.forEach((report, index) => {
  console.log(`${index + 1}. ${report.name} (ID: ${report.id}) - Workspace: ${report.workspaceId}`);
});

// Export to files
const fs = require('fs');

// Export as CSV
fs.writeFileSync('matching-reports.csv', generateCSV(matchingReports));
console.log('\n✅ Exported to: matching-reports.csv');

// Export as JSON
fs.writeFileSync('matching-reports.json', generateJSON(matchingReports));
console.log('✅ Exported to: matching-reports.json');

// Export as Markdown
fs.writeFileSync('matching-reports.md', generateMarkdown(matchingReports));
console.log('✅ Exported to: matching-reports.md');

console.log(`\n🎯 Summary: ${matchingReports.length} out of ${allReports.length} reports have valid workspace IDs`);
