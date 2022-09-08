import { createNotebookTool } from "./NotebookTool";

export const notebookTools = {
  jupyter: createNotebookTool({
    name: "Jupyter",
    id: "jupyter",
    description:
      "Project Jupyter exists to develop open-source software, open-standards, and services for interactive computing across dozens of programming languages. There's a number of vendors offering Jupyter notebooks as a managed service.",
    lastUpdatedAt: "2022-09-07T23:40:01.819Z",
    features: {
      setupManaged: [{ type: "no" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [{ type: "jupyterDataSources" }],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],

      managementCollaborativeEditing: [
        { type: "fileBased" },
        { type: "jupyterRealtime" },
      ],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementReproducability: [{ type: "effortful" }],
      managementVersioning: [{ type: "fileBased" }],

      licensingLicense: [{ type: "openSource", ossLicense: "BSD" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  deepnote: createNotebookTool({
    name: "Deepnote",
    id: "deepnote",
    description:
      "Deepnote is a new kind of data science notebook. Jupyter-compatible with real-time collaboration and running in the cloud. Oh, and it's free.",
    lastUpdatedAt: "2022-09-07T23:40:01.819Z",
    features: {
      setupManaged: [
        {
          type: "yes",
          setupTime: "minutes",
        },
      ],
      setupSelfHost: [
        {
          type: "no",
        },
      ],
      featuresJupyterCompatible: [
        {
          type: "yes",
        },
      ],
      featuresLanguages: [
        {
          type: "jupyterLanguages",
        },
        {
          type: "language",
          language: "sql",
        },
      ],
      featuresDataSources: [
        {
          type: "jupyterDataSources",
        },
        {
          type: "dataWarehouses",
          examples: "AWS, GCP, etc.",
        },
        {
          type: "databses",
          examples: "Postgres, MongoDB, etc.",
        },
      ],
      featuresReactivity: [
        {
          type: "none",
        },
      ],
      featuresDataVisualization: [
        {
          type: "jupyterVisualization",
        },
        {
          type: "ui",
        },
      ],

      managementCollaborativeEditing: [
        {
          type: "realtime",
        },
      ],
      managementNotebookOrganization: [
        {
          type: "wiki",
        },
      ],
      managementReproducability: [
        {
          type: "environment",
        },
        {
          type: "containers",
        },
      ],
      managementVersioning: [
        {
          type: "built-in",
        },
      ],

      licensingLicense: [
        {
          type: "proprietary",
        },
      ],
      licensingPrice: [
        {
          type: "freeTier",
        },
        {
          type: "payForCompute",
        },
        {
          type: "payPerUser",
        },
      ],
    },
  }),

  observable: createNotebookTool({
    name: "Observable",
    id: "observable",
    lastUpdatedAt: "2022-09-07T23:40:01.819Z",
    description: "",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [{ type: "language", language: "js" }],
      featuresDataSources: [
        { type: "js" },
        { type: "databses", examples: "MySQL, Postgres" },
        { type: "dataWarehouses", examples: "BigQuery, Snowflake" },
      ],
      featuresReactivity: [{ type: "full" }],
      featuresDataVisualization: [{ type: "js" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducability: [
        { type: "environment" },
        { type: "execution" },
      ],
      managementVersioning: [{ type: "built-in" }],

      licensingLicense: [],
      licensingPrice: [],
    },
  }),
};

const _dummyExampleNotebookTool = createNotebookTool({
  name: "",
  id: "",
  lastUpdatedAt: "",
  description: "",
  features: {
    setupManaged: [],
    setupSelfHost: [],

    featuresJupyterCompatible: [],
    featuresLanguages: [],
    featuresDataSources: [],
    featuresReactivity: [],
    featuresDataVisualization: [],

    managementCollaborativeEditing: [],
    managementNotebookOrganization: [],
    managementReproducability: [],
    managementVersioning: [],

    licensingLicense: [],
    licensingPrice: [],
  },
});
