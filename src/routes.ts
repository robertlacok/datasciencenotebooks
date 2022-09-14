export const routes = {
  home: () => "/",
  compare: ({ tool1, tool2 }: { tool1: string; tool2: string }) =>
    `/compare/${tool1}/${tool2}`,
  compareCanonical: ({ tool1, tool2 }: { tool1: string; tool2: string }) => {
    const [tool1Canonical, tool2Canonical] = [tool1, tool2].sort();
    return routes.compare({ tool1: tool1Canonical, tool2: tool2Canonical });
  },
  tool: ({ tool }: { tool: string }) => `/${tool}`,
};
