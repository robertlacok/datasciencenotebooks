export const routes = {
  home: () => "/",
  compare: ({ tool1, tool2 }: { tool1: string; tool2: string }) =>
    `/compare/${tool1}/${tool2}`,
  tool: ({ tool }: { tool: string }) => `/${tool}`,
};
