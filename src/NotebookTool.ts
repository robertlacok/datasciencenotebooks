import type { StaticImageData } from "next/image";

export interface NotebookTool {
  name: string;
  id: string;
  lastUpdatedAt: string;
  features: NotebookFeaturesRecord;
  description: string;
  screenshot?: StaticImageData;
  websiteUrl?: string;
}

export const createNotebookTool = (tool: NotebookTool) => tool;

/**
 * Each feature has a list of capabilities associated with it.
 *
 * A feature may make sense for it to have multiple capabilities, for
 * example what languages a notebook supports.
 *
 * Other features really can only have one capability associated with them,
 * for example whether a notebook is self-hosted or not.
 *
 * To keep things generic, everything ends up being a list.
 */
export interface NotebookFeatures {
  setupManaged:
    | { type: "yes"; setupTime: "minutes" | "hours" }
    | { type: "no" };
  setupSelfHost:
    | { type: "yes"; setupTime: "minutes" | "hours" }
    | { type: "no" };

  featuresJupyterCompatible: { type: "yes" } | { type: "no" };
  featuresLanguages:
    | { type: "jupyterLanguages" }
    | {
        type: "language";
        language: "sql" | "js" | "python" | "r" | "scala" | "spark" | "julia";
      };
  featuresDataSources:
    | { type: "jupyterDataSources" }
    | { type: "dataWarehouses"; examples: string }
    | { type: "databases"; examples: string }
    | { type: "generic"; text: string }
    | { type: "fileStorage" }
    | { type: "js" };
  featuresReactivity: { type: "none" } | { type: "some" } | { type: "full" };
  featuresDataVisualization:
    | { type: "jupyterVisualization" }
    | { type: "ui" }
    | { type: "js" }
    | { type: "julia" };
  featuresScheduling:
    | { type: "none" }
    | { type: "builtIn" }
    | { type: "thirdParty" }
    | { type: "limited" };

  managementVersioning:
    | { type: "fileBased" }
    | { type: "none" }
    | { type: "builtIn" };
  managementCollaborativeEditing:
    | { type: "fileBased" }
    | { type: "jupyterRealtime" }
    | { type: "realtime" }
    | { type: "asynchronous" }
    | { type: "none" };
  managementComments:
    | { type: "fileBased" }
    | { type: "inNotebook" }
    | { type: "outOfNotebook" }
    | { type: "none" };
  managementNotebookOrganization:
    | { type: "fileBased" }
    | { type: "wiki" }
    | { type: "list" };
  managementReproducibility:
    | { type: "none" }
    | { type: "effortful" }
    | { type: "environment" }
    | { type: "execution" }
    | { type: "containers" };

  licensingPrice:
    | { type: "free" }
    | { type: "freeTier" }
    | { type: "freeTrial"; length?: string }
    | { type: "payPerUser" }
    | { type: "payForCompute" };
  licensingLicense:
    | { type: "proprietary" }
    | { type: "openSource"; ossLicense: string };
}

export interface FeatureCategory {
  type: "setup" | "features" | "management" | "licensing";
  features: (keyof NotebookFeatures)[];
}

export const featureCategories: FeatureCategory[] = [
  {
    type: "setup",
    features: ["setupManaged", "setupSelfHost"],
  },
  {
    type: "features",
    features: [
      "featuresJupyterCompatible",
      "featuresLanguages",
      "featuresDataSources",
      "featuresDataVisualization",
      "featuresReactivity",
      "featuresScheduling",
    ],
  },
  {
    type: "management",
    features: [
      "managementReproducibility",
      "managementVersioning",
      "managementCollaborativeEditing",
      "managementComments",
      "managementNotebookOrganization",
    ],
  },
  {
    type: "licensing",
    features: ["licensingLicense", "licensingPrice"],
  },
];

export type NotebookFeaturesRecord = {
  [TFeatureKey in keyof NotebookFeatures]?: NotebookFeatures[TFeatureKey][];
};
