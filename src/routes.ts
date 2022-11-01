import { notebookToolIds, NotebookToolId } from "./notebookTools";

export const routes = {
  home: () => "/",
  compare: ({ tool1, tool2 }: { tool1: string; tool2: string }) =>
    `/compare/${tool1}/${tool2}`,
  compareCanonical: ({ tool1, tool2 }: { tool1: string; tool2: string }) => {
    const [tool1Canonical, tool2Canonical] = [tool1, tool2].sort(
      (tool1, tool2) => {
        return (
          notebookToolIds.indexOf(tool1 as NotebookToolId) -
          notebookToolIds.indexOf(tool2 as NotebookToolId)
        );
      }
    );
    return routes.compare({ tool1: tool1Canonical, tool2: tool2Canonical });
  },
  tool: ({ tool }: { tool: string }) => `/${tool}`,
  toolAlternatives: ({ tool }: { tool: string }) =>
    `${routes.tool({ tool })}#alternatives`,
  "jupyter-version-control": () => "/jupyter-version-control",
  "jupyter-schedule-notebooks": () => "/jupyter-schedule-notebooks",
  "jupyter-notebook-online": () => "/jupyter-notebook-online",
  "jupyter-realtime-collaboration": () => "/jupyter-realtime-collaboration",
  "open-source-notebooks": () => "/open-source-notebooks",
  "jupyter-comments": () => "/jupyter-comments",
};
