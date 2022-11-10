import { Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";

import { JupyterVersionControlContent } from "../content/JupyterVersionControlContent";
import { LargeToolCard } from "../components/LargeToolCard";

interface JupyterVersionControlPageProps {}

function JupyterVersionControlPage({}: JupyterVersionControlPageProps) {
  const tools = notebookToolsInCanonicalOrder.filter((tool) => {
    const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
      (capability) => capability.type === "yes"
    );
    const hasVersionControl = tool.features.managementVersioning?.some(
      (capability) => capability.type === "builtIn"
    );
    const hasRealtimeCollaboration =
      tool.features.managementCollaborativeEditing?.some(
        (capability) => capability.type === "realtime"
      );

    return isJupyterCompatible && hasVersionControl && hasRealtimeCollaboration;
  });

  return (
    <Fragment>
      <Seo
        title={`${JupyterVersionControlContent.meta.title} | Data Science Notebooks`}
        description={JupyterVersionControlContent.meta.description}
      />
      <SidebarLayout contentSize="narrow">
        <ContentContainer size="narrow">
          <Heading color="gray.800" as="h1" size="xl" mb={12} mt={12}>
            {JupyterVersionControlContent.meta.title}
          </Heading>
          <JupyterVersionControlContent
            notebookCards={tools.map((tool) => (
              <LargeToolCard key={tool.id} tool={tool} mb={4} />
            ))}
          />
        </ContentContainer>
      </SidebarLayout>
    </Fragment>
  );
}

export default JupyterVersionControlPage;
