export interface NotebookTool {
  name: string;
  id: string;
  lastUpdatedAt: string;
  features: NotebookFeaturesRecord;
  description: string;
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
    | { type: "language"; language: "sql" | "js" | "python" };
  featuresDataSources:
    | { type: "jupyterDataSources" }
    | { type: "dataWarehouses"; examples: string }
    | { type: "databses"; examples: string }
    | { type: "js" };
  featuresReactivity: { type: "none" } | { type: "some" } | { type: "full" };
  featuresDataVisualization:
    | { type: "jupyterVisualization" }
    | { type: "ui" }
    | { type: "js" };

  managementVersioning:
    | { type: "fileBased" }
    | { type: "none" }
    | { type: "built-in" };
  managementCollaborativeEditing:
    | { type: "fileBased" }
    | { type: "jupyterRealtime" }
    | { type: "realtime" }
    | { type: "asynchronous" }
    | { type: "none" };
  managementNotebookOrganization:
    | { type: "fileBased" }
    | { type: "wiki" }
    | { type: "list" };
  managementReproducability:
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

export type NotebookFeaturesRecord = {
  [TFeatureKey in keyof NotebookFeatures]?: NotebookFeatures[TFeatureKey][];
};
