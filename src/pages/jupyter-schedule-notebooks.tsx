import { Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";

import { JupyterSchedulingContent } from "../content/JupyterSchedulingContent";
import { LargeToolCard } from "../components/LargeToolCard";

interface JupyterScheduleNotebooksPageProps {}

function JupyterScheduleNotebooksPage({}: JupyterScheduleNotebooksPageProps) {
  const tools = notebookToolsInCanonicalOrder.filter((tool) => {
    const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
      (capability) => capability.type === "yes"
    );
    const hasScheduling = tool.features.featuresScheduling?.some(
      (capability) => capability.type === "builtIn"
    );

    return isJupyterCompatible && hasScheduling;
  });

  return (
    <Fragment>
      <Seo
        title={`${JupyterSchedulingContent.meta.title} | Data Science Notebooks`}
        description={JupyterSchedulingContent.meta.description}
      />
      <SidebarLayout footerSize="narrow">
        <ContentContainer size="narrow">
          <Heading color="gray.800" as="h1" size="xl" mb={12} mt={12}>
            {JupyterSchedulingContent.meta.title}
          </Heading>
          <JupyterSchedulingContent
            notebookCards={tools.map((tool) => (
              <LargeToolCard key={tool.id} tool={tool} mb={4} />
            ))}
          />
        </ContentContainer>
      </SidebarLayout>
    </Fragment>
  );
}

export default JupyterScheduleNotebooksPage;
