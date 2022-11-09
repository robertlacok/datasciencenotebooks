import { createNotebookTool, NotebookTool } from "./NotebookTool";

import jupyterScreenshot from "./toolScreenshots/jupyter.png";
import deepnoteScreenshot from "./toolScreenshots/deepnote.png";
import observableScreenshot from "./toolScreenshots/observable.png";
import sagemakerScreenshot from "./toolScreenshots/sagemaker.png";
import colabScreenshot from "./toolScreenshots/colab.png";
import databricksScreenshot from "./toolScreenshots/databricks.png";
import cocalcScreenshot from "./toolScreenshots/cocalc.png";
import hexScreenshot from "./toolScreenshots/hex.png";
import kaggleScreenshot from "./toolScreenshots/kaggle.png";
import nextjournalScreenshot from "./toolScreenshots/nextjournal.png";
import dataloreScreenshot from "./toolScreenshots/datalore.png";
import vscodeScreenshot from "./toolScreenshots/vscode.png";
import modeScreenshot from "./toolScreenshots/mode.png";
import noteableScreenshot from "./toolScreenshots/noteable.png";
import polynoteScreenshot from "./toolScreenshots/polynote.png";
import zeppelinScreenshot from "./toolScreenshots/zeppelin.png";
import zeplScreenshot from "./toolScreenshots/zepl.png";
import nteractScreenshot from "./toolScreenshots/nteract.png";
import plutoScreenshot from "./toolScreenshots/pluto.png";
import querymeScreenshot from "./toolScreenshots/query-me.png";
import querybookScreenshot from "./toolScreenshots/querybook.png";
import huspreyScreenshot from "./toolScreenshots/husprey.png";
import jupyterLabScreenshot from "./toolScreenshots/jupyterlab.png";
import workspaceScreenshot from "./toolScreenshots/workspace.png";

export const notebookTools = {
  jupyter: createNotebookTool({
    name: "Jupyter",
    id: "jupyter",
    description:
      "Project Jupyter exists to develop open-source software, open-standards, and services for interactive computing across dozens of programming languages. There's a number of vendors offering Jupyter notebooks as a managed service.",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    screenshot: jupyterScreenshot,
    websiteUrl: "https://jupyter.org/",
    features: {
      setupManaged: [{ type: "no" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [{ type: "jupyterDataSources" }],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "thirdParty" }],

      managementCollaborativeEditing: [{ type: "fileBased" }],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementComments: [
        {
          type: "fileBased",
        },
      ],
      managementReproducibility: [{ type: "effortful" }],
      managementVersioning: [{ type: "fileBased" }],

      licensingLicense: [{ type: "openSource", ossLicense: "BSD" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  observable: createNotebookTool({
    name: "Observable",
    id: "observable",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Make sense of the world with data, together. Explore, visualize, and analyze data. Collaborate with the community. Learn and be inspired. Share insights with the world.",
    screenshot: observableScreenshot,
    websiteUrl: "https://observablehq.com/",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [{ type: "language", language: "js" }],
      featuresDataSources: [
        { type: "js" },
        { type: "databases", examples: "MySQL, Postgres" },
        { type: "dataWarehouses", examples: "BigQuery, Snowflake" },
        { type: "fileStorage" },
      ],
      featuresReactivity: [{ type: "full" }],
      featuresDataVisualization: [{ type: "js" }],
      featuresScheduling: [{ type: "none" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementComments: [
        {
          type: "inNotebook",
        },
      ],
      managementReproducibility: [
        { type: "environment" },
        { type: "execution" },
      ],
      managementVersioning: [{ type: "builtIn" }],

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
          type: "freeTrial",
          length: "1 month",
        },
        {
          type: "payPerUser",
        },
      ],
    },
  }),

  sagemaker: createNotebookTool({
    name: "Amazon Sagemaker",
    id: "sagemaker",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Amazon SageMaker helps data scientists and developers to prepare, build, train, and deploy high-quality machine learning (ML) models quickly by bringing together a broad set of capabilities purpose-built for ML.",
    screenshot: sagemakerScreenshot,
    websiteUrl: "https://aws.amazon.com/sagemaker",
    features: {
      setupManaged: [{ type: "yes", setupTime: "hours" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        { type: "generic", text: "AWS" },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "thirdParty" }],

      managementCollaborativeEditing: [{ type: "none" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [{ type: "none" }],
      managementComments: [{ type: "fileBased" }],
      managementVersioning: [{ type: "fileBased" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [{ type: "freeTier" }, { type: "payForCompute" }],
    },
  }),

  colab: createNotebookTool({
    name: "Google Colab",
    id: "colab",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Colab notebooks allow you to combine executable code and rich text in a single document, along with images, HTML, LaTeX and more.",
    screenshot: colabScreenshot,
    websiteUrl: "https://colab.research.google.com/",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        { type: "generic", text: "Google Drive" },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "none" }],

      managementCollaborativeEditing: [{ type: "none" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [{ type: "none" }],
      managementComments: [{ type: "none" }],
      managementVersioning: [{ type: "none" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [{ type: "freeTier" }, { type: "payPerUser" }],
    },
  }),

  databricks: createNotebookTool({
    name: "Databricks Notebooks",
    id: "databricks",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Collaborate across engineering, data science, and machine learning teams with support for multiple languages, built-in data visualizations, automatic versioning, and operationalization with jobs.",
    screenshot: databricksScreenshot,
    websiteUrl: "https://databricks.com/product/collaborative-notebooks",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        { type: "dataWarehouses", examples: "Databricks" },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [
        { type: "jupyterVisualization" },
        { type: "ui" },
      ],
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [{ type: "environment" }],
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "inNotebook" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [{ type: "freeTier" }, { type: "payForCompute" }],
    },
  }),

  cocalc: createNotebookTool({
    name: "CoCalc",
    id: "cocalc",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description: "Your best choice for teaching remote scientific courses.",
    screenshot: cocalcScreenshot,
    websiteUrl: "https://cocalc.com/",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        { type: "fileStorage" },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "none" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [{ type: "environment" }],
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "none" }],

      licensingLicense: [{ type: "openSource", ossLicense: "GNU AGPLv3" }],
      licensingPrice: [{ type: "freeTier" }, { type: "payForCompute" }],
    },
  }),

  deepnote: createNotebookTool({
    name: "Deepnote",
    id: "deepnote",
    description:
      "Deepnote is a new kind of data notebook that’s built for collaboration — Jupyter compatible, works magically in the cloud, and sharing is as easy as sending a link.",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    screenshot: deepnoteScreenshot,
    websiteUrl: "https://deepnote.com/",
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
          type: "databases",
          examples: "Postgres, MongoDB, etc.",
        },
        { type: "fileStorage" },
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
      featuresScheduling: [
        {
          type: "builtIn",
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
      managementComments: [
        {
          type: "inNotebook",
        },
      ],
      managementReproducibility: [
        {
          type: "environment",
        },
        {
          type: "containers",
        },
      ],
      managementVersioning: [
        {
          type: "builtIn",
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

  jupyterlab: createNotebookTool({
    name: "JupyterLab",
    id: "jupyterlab",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "JupyterLab is the next-generation web-based user interface for Project Jupyter.",
    screenshot: jupyterLabScreenshot,
    websiteUrl: "https://jupyterlab.readthedocs.io/en/stable/",
    features: {
      setupManaged: [{ type: "no" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [{ type: "jupyterDataSources" }],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "thirdParty" }],

      managementCollaborativeEditing: [
        { type: "fileBased" },
        { type: "jupyterRealtime" },
      ],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementComments: [
        {
          type: "fileBased",
        },
      ],
      managementReproducibility: [{ type: "effortful" }],
      managementVersioning: [{ type: "fileBased" }],

      licensingLicense: [{ type: "openSource", ossLicense: "BSD" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  hex: createNotebookTool({
    name: "Hex",
    id: "hex",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "The Data Workspace for Teams. Work with data in collaborative SQL and Python notebooks. Share as interactive data apps that anyone can use.",
    screenshot: hexScreenshot,
    websiteUrl: "https://hex.tech",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [
        { type: "jupyterLanguages" },
        { type: "language", language: "sql" },
      ],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        {
          type: "dataWarehouses",
          examples: "Google BigQuery, ClickHouse, etc.",
        },
        { type: "databases", examples: "MariaDB, SQL Server, etc." },
        { type: "fileStorage" },
      ],
      featuresReactivity: [{ type: "full" }],
      featuresDataVisualization: [
        { type: "jupyterVisualization" },
        { type: "ui" },
      ],
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [
        { type: "environment" },
        { type: "execution" },
        { type: "containers" },
      ],
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "inNotebook" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [
        { type: "freeTier" },
        { type: "payPerUser" },
        { type: "payForCompute" },
      ],
    },
  }),

  kaggle: createNotebookTool({
    name: "Kaggle",
    id: "kaggle",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Explore and run machine learning code with Kaggle Notebooks, a cloud computational environment that enables reproducible and collaborative analysis.",
    screenshot: kaggleScreenshot,
    websiteUrl: "https://www.kaggle.com/code",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        { type: "generic", text: "Kaggle datasets" },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "limited" }],

      managementCollaborativeEditing: [{ type: "none" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [{ type: "environment" }],
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "outOfNotebook" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  nextjournal: createNotebookTool({
    name: "Nextjournal",
    id: "nextjournal",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Runs anything you can put into a Docker container. Improve your workflow with polyglot notebooks, automatic versioning and real-time collaboration. Save time and money with on-demand provisioning, including GPU support.",
    screenshot: nextjournalScreenshot,
    websiteUrl: "https://nextjournal.com/",
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

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        {
          type: "dataWarehouses",
          examples: "AWS S3, Google Cloud Storage, etc.",
        },
        { type: "databases", examples: "SQLite, PostgreSQL, etc." },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [
        { type: "environment" },
        { type: "containers" },
      ],
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "inNotebook" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [
        { type: "freeTier" },
        { type: "payPerUser" },
        { type: "payForCompute" },
      ],
    },
  }),

  datalore: createNotebookTool({
    name: "Jetbrains Datalore",
    id: "datalore",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "A powerful online environment for Jupyter notebooks. Use smart coding assistance for Python in online Jupyter notebooks, run code on powerful CPUs and GPUs, collaborate in real-time, and easily share the results.",
    screenshot: dataloreScreenshot,
    websiteUrl: "https://datalore.jetbrains.com/",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        { type: "databases", examples: "MySQL, PostgreSQL" },
        { type: "dataWarehouses", examples: "Snowflake, etc." },
        { type: "fileStorage" },
      ],
      featuresReactivity: [{ type: "full" }],
      featuresDataVisualization: [
        { type: "jupyterVisualization" },
        { type: "ui" },
      ],
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: [{ type: "wiki" }],
      managementReproducibility: [{ type: "environment" }],
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "inNotebook" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [
        { type: "freeTier" },
        { type: "payPerUser" },
        { type: "payForCompute" },
      ],
    },
  }),

  vscode: createNotebookTool({
    name: "VS Code",
    id: "vscode",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Visual Studio Code is a lightweight but powerful source code editor. It supports working with Jupyter Notebooks natively, as well as through Python code files.",
    screenshot: vscodeScreenshot,
    websiteUrl: "https://code.visualstudio.com/docs/python/jupyter-support",
    features: {
      setupManaged: [{ type: "no" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [{ type: "jupyterDataSources" }],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "thirdParty" }],

      managementCollaborativeEditing: [{ type: "fileBased" }],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementReproducibility: [{ type: "none" }],
      managementVersioning: [{ type: "fileBased" }],
      managementComments: [{ type: "fileBased" }],

      licensingLicense: [{ type: "openSource", ossLicense: "MIT" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  mode: createNotebookTool({
    name: "Mode Notebooks",
    id: "mode",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Native R & Python Notebooks. From SQL, explore your analysis using R or Python Notebooks.",
    screenshot: modeScreenshot,
    websiteUrl: "https://mode.com/notebooks/",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [
        { type: "language", language: "sql" },
        { type: "language", language: "r" },
        { type: "language", language: "python" },
      ],
      featuresDataSources: [
        { type: "databases", examples: "MariaDB, PostgreSQL, etc." },
        {
          type: "dataWarehouses",
          examples: "Amazon Redshift, Google BigQuery, etc.",
        },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "ui" }],
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "asynchronous" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [{ type: "environment" }],
      managementVersioning: [{ type: "none" }],
      managementComments: [{ type: "none" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: undefined,
    },
  }),

  noteable: createNotebookTool({
    name: "Noteable",
    id: "noteable",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Noteable is a collaborative notebook platform that enables teams to use and visualize data, together.",
    screenshot: noteableScreenshot,
    websiteUrl: "https://noteable.io/",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],
      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [
        { type: "jupyterLanguages" },
        { type: "language", language: "sql" },
      ],
      featuresDataSources: [
        { type: "jupyterDataSources" },
        {
          type: "databases",
          examples: "Trino, Snowflake, CockroachDB, PostgreSQL",
        },
        {
          type: "dataWarehouses",
          examples: "Amazon Redshift, Google BigQuery, Databricks",
        },
        { type: "fileStorage" },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [
        { type: "jupyterVisualization" },
        { type: "ui" },
      ],
      featuresScheduling: [{ type: "builtIn" }, { type: "thirdParty" }],
      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementReproducibility: [
        { type: "environment" },
        { type: "execution" },
        { type: "containers" },
      ],
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "inNotebook" }, { type: "outOfNotebook" }],
      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [
        { type: "freeTier" },
        { type: "payPerUser" },
        { type: "payForCompute" },
      ],
    },
  }),

  polynote: createNotebookTool({
    name: "Polynote",
    id: "polynote",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Polynote is a different kind of notebook. It supports mixing multiple languages in one notebook, and sharing data between them seamlessly. It encourages reproducible notebooks with its immutable data model.",
    screenshot: polynoteScreenshot,
    websiteUrl: "https://polynote.org/",
    features: {
      setupManaged: [{ type: "no" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [
        { type: "language", language: "scala" },
        { type: "language", language: "python" },
      ],
      featuresDataSources: undefined,
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: undefined,
      featuresScheduling: [{ type: "thirdParty" }],

      managementCollaborativeEditing: [{ type: "fileBased" }],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementReproducibility: [{ type: "effortful" }],
      managementVersioning: [{ type: "fileBased" }],
      managementComments: [{ type: "fileBased" }],

      licensingLicense: [{ type: "openSource", ossLicense: "Apache 2.0" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  zeppelin: createNotebookTool({
    name: "Zeppelin",
    id: "zeppelin",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Web-based notebook that enables data-driven, interactive data analytics and collaborative documents with SQL, Scala and more.",
    screenshot: zeppelinScreenshot,
    websiteUrl: "https://zeppelin.apache.org/",
    features: {
      setupManaged: [
        {
          type: "no",
        },
      ],
      setupSelfHost: [
        {
          type: "yes",
          setupTime: "hours",
        },
      ],

      featuresJupyterCompatible: [
        {
          type: "no",
        },
      ],
      featuresLanguages: [
        { type: "language", language: "python" },
        { type: "language", language: "sql" },
        { type: "language", language: "spark" },
      ],
      featuresDataSources: [],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: undefined,
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [
        { type: "fileBased" },
        { type: "asynchronous" },
      ],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementReproducibility: [{ type: "effortful" }],
      managementVersioning: [{ type: "fileBased" }],
      managementComments: [{ type: "fileBased" }],

      licensingLicense: [{ type: "openSource", ossLicense: "Apache 2.0" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  zepl: createNotebookTool({
    name: "Zepl",
    id: "zepl",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    screenshot: zeplScreenshot,
    description: "Notebook-powered analytics for enterprise teams.",
    websiteUrl: "https://zepl.com/",
    features: {
      setupManaged: [
        {
          type: "yes",
          setupTime: "hours",
        },
      ],
      setupSelfHost: [
        {
          type: "no",
        },
      ],

      featuresJupyterCompatible: undefined,
      featuresLanguages: [
        { type: "language", language: "python" },
        { type: "language", language: "r" },
      ],
      featuresDataSources: undefined,
      featuresReactivity: undefined,
      featuresDataVisualization: undefined,
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: undefined,
      managementReproducibility: [{ type: "environment" }],
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "inNotebook" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: undefined,
    },
  }),

  count: createNotebookTool({
    name: "Count",
    id: "count",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Count helps your data team work closer with the business so everyone is working on the problems that matter. Fast.",
    screenshot: undefined,
    websiteUrl: "https://count.co",
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [
        { type: "language", language: "sql" },
        { type: "language", language: "python" },
      ],
      featuresDataSources: undefined,
      featuresReactivity: undefined,
      featuresDataVisualization: [{ type: "ui" }],
      featuresScheduling: [{ type: "none" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: undefined,
      managementReproducibility: undefined,
      managementVersioning: undefined,
      managementComments: undefined,

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: undefined,
    },
  }),

  nteract: createNotebookTool({
    name: "nteract",
    id: "nteract",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "nteract is an open-source organization committed to creating fantastic interactive computing experiences that allow people to collaborate with ease.",
    screenshot: nteractScreenshot,
    websiteUrl: "https://nteract.io",
    features: {
      setupManaged: [{ type: "no" }],
      setupSelfHost: [{ type: "yes", setupTime: "minutes" }],

      featuresJupyterCompatible: [{ type: "yes" }],
      featuresLanguages: [{ type: "jupyterLanguages" }],
      featuresDataSources: [{ type: "jupyterDataSources" }],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "jupyterVisualization" }],
      featuresScheduling: [{ type: "thirdParty" }],

      managementCollaborativeEditing: [{ type: "fileBased" }],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementReproducibility: [{ type: "effortful" }],
      managementVersioning: [{ type: "fileBased" }],
      managementComments: [{ type: "fileBased" }],

      licensingLicense: [{ type: "openSource", ossLicense: "BSD 3-Clause" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  pluto: createNotebookTool({
    name: "Pluto.jl",
    id: "pluto",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Writing a notebook is not just about writing the final document — Pluto empowers the experiments and discoveries that are essential to getting there.",
    websiteUrl: "https://github.com/fonsp/Pluto.jl",
    screenshot: plutoScreenshot,
    features: {
      setupManaged: [{ type: "no" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [{ type: "language", language: "julia" }],
      featuresDataSources: undefined,
      featuresReactivity: [{ type: "full" }],
      featuresDataVisualization: undefined,
      featuresScheduling: [{ type: "none" }],

      managementCollaborativeEditing: [{ type: "fileBased" }],
      managementNotebookOrganization: [{ type: "fileBased" }],
      managementReproducibility: [{ type: "execution" }],
      managementVersioning: [{ type: "fileBased" }],
      managementComments: [{ type: "fileBased" }],

      licensingLicense: [{ type: "openSource", ossLicense: "MIT" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  "query-me": createNotebookTool({
    name: "Query.me",
    id: "query-me",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Collaborative SQL Notebooks. A better way for data teams to analyze, unite & deliver.",
    websiteUrl: "https://query.me",
    screenshot: querymeScreenshot,
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

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [{ type: "language", language: "sql" }],
      featuresDataSources: [
        { type: "dataWarehouses", examples: "Snowflake, Clickhouse, etc." },
        { type: "databases", examples: "PostgreSQL, MySQL, etc." },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "ui" }],
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "asynchronous" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: [],
      managementVersioning: [{ type: "none" }],
      managementComments: [{ type: "none" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [{ type: "freeTier" }, { type: "payPerUser" }],
    },
  }),

  querybook: createNotebookTool({
    name: "Querybook",
    id: "querybook",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Querybook is Pinterest’s open-source big data IDE via a notebook interface.",
    websiteUrl: "https://querybook.org",
    screenshot: querybookScreenshot,
    features: {
      setupManaged: [{ type: "no" }],
      setupSelfHost: [{ type: "yes", setupTime: "hours" }],

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [{ type: "language", language: "python" }],
      featuresDataSources: [
        {
          type: "dataWarehouses",
          examples: "Snowflake, Google BigQuery, etc.",
        },
        { type: "databases", examples: "PostgreSQL, MySQL, etc." },
      ],
      featuresReactivity: [{ type: "none" }],
      featuresDataVisualization: [{ type: "ui" }],
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "realtime" }],
      managementNotebookOrganization: undefined,
      managementReproducibility: [{ type: "effortful" }],
      managementVersioning: [{ type: "none" }],
      managementComments: [{ type: "none" }],

      licensingLicense: [{ type: "openSource", ossLicense: "Apache 2.0" }],
      licensingPrice: [{ type: "free" }],
    },
  }),

  husprey: createNotebookTool({
    name: "Husprey",
    id: "husprey",
    lastUpdatedAt: "2022-10-25T21:49:23.311Z",
    description:
      "Husprey provides a SQL data workspace designed for Data Analytics teams. Collaborate, analyze and share within your data team and with Business teams.",
    websiteUrl: "https://husprey.com",
    screenshot: huspreyScreenshot,
    features: {
      setupManaged: [{ type: "yes", setupTime: "minutes" }],
      setupSelfHost: [{ type: "no" }],

      featuresJupyterCompatible: [{ type: "no" }],
      featuresLanguages: [{ type: "language", language: "sql" }],
      featuresDataSources: [
        {
          type: "dataWarehouses",
          examples: "Google BigQuery, ClickHouse, etc.",
        },
        { type: "databases", examples: "PostgreSQL" },
      ],
      featuresReactivity: undefined,
      featuresDataVisualization: [{ type: "ui" }],
      featuresScheduling: [{ type: "builtIn" }],

      managementCollaborativeEditing: [{ type: "asynchronous" }],
      managementNotebookOrganization: [{ type: "list" }],
      managementReproducibility: undefined,
      managementVersioning: [{ type: "builtIn" }],
      managementComments: [{ type: "inNotebook" }],

      licensingLicense: [{ type: "proprietary" }],
      licensingPrice: [{ type: "freeTier" }, { type: "payPerUser" }],
    },
  }),

  workspace: createNotebookTool({
    name: "DataCamp Workspace",
    id: "workspace",
    description:
      "DataCamp Workspace is a cloud-based data science notebook to analyze data, collaborate with others, and share insights — no installation required.",
    lastUpdatedAt: "2022-11-03T00:00:00.000Z",
    screenshot: workspaceScreenshot,
    websiteUrl: "https://www.datacamp.com/workspace",
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
          type: "databases",
          examples: "Postgres, MS SQL, etc.",
        },
        { type: "fileStorage" },
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
      featuresScheduling: [
        {
          type: "none",
        },
      ],

      managementCollaborativeEditing: [
        {
          type: "realtime",
        },
      ],
      managementNotebookOrganization: [
        {
          type: "list",
        },
      ],
      managementComments: [
        {
          type: "inNotebook",
        },
      ],
      managementReproducibility: [{ type: "environment" }],
      managementVersioning: [{ type: "none" }],
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
          type: "payPerUser",
        },
      ],
    },
  }),
};

export type NotebookToolId = keyof typeof notebookTools;

export function getNotebookTool(toolId: string) {
  if (!(toolId in notebookTools)) {
    throw new Error(`No notebook tool ${toolId}`);
  }

  return notebookTools[toolId as NotebookToolId];
}

const topNotebookToolOrder: NotebookToolId[] = [
  "jupyter",
  "sagemaker",
  "colab",
  "deepnote",
  "hex",
  "databricks",
  "workspace",
  "jupyterlab",
];

/**
 * Our default ordering of notebooks is:
 * - top tools in Jupyter-compatible space
 * - the rest ordered by:
 *   * completeness of data we have for them, then
 *   * alphabetically
 */
export const notebookToolsInCanonicalOrder = [
  ...topNotebookToolOrder.map((id) => notebookTools[id]),
  ...Object.values(notebookTools)
    .filter((tool) => !topNotebookToolOrder.includes(tool.id as NotebookToolId))
    .sort((fst, snd) => {
      const fstFeatureCount = countNotebookToolFeatures(fst);
      const sndFeatureCount = countNotebookToolFeatures(snd);

      if (fstFeatureCount !== sndFeatureCount) {
        return sndFeatureCount - fstFeatureCount;
      }

      return fst.name.toLowerCase().localeCompare(snd.name.toLowerCase());
    }),
];

function countNotebookToolFeatures(tool: NotebookTool) {
  return Object.values(tool.features).filter((feature) => !!feature).length;
}

export const JUPYTER_NOTEBOOK_ID: NotebookToolId = "jupyter";

export const notebookToolIds = notebookToolsInCanonicalOrder.map(
  (tool) => tool.id
) as NotebookToolId[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _dummyExampleNotebookTool = createNotebookTool({
  name: "",
  id: "",
  lastUpdatedAt: "",
  description: "",
  screenshot: undefined,
  websiteUrl: undefined,
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
    managementReproducibility: [],
    managementVersioning: [],
    managementComments: [],

    licensingLicense: [],
    licensingPrice: [],
  },
});
