import { Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";

import { JupyterRealtimeCollaborationContent } from "../content/JupyterRealtimeCollaborationContent";
import { LargeToolCard } from "../components/LargeToolCard";

interface JupyterRealtimeCollaborationPageProps {}

function JupyterRealtimeCollaborationPage({}: JupyterRealtimeCollaborationPageProps) {
  const tools = notebookToolsInCanonicalOrder.filter((tool) => {
    const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
      (capability) => capability.type === "yes"
    );
    const hasRealtimeCollaboration =
      tool.features.managementCollaborativeEditing?.some(
        (capability) => capability.type === "realtime"
      );

    return isJupyterCompatible && hasRealtimeCollaboration;
  });

  return (
    <Fragment>
      <Seo
        title={`${JupyterRealtimeCollaborationContent.meta.title} | Data Science Notebooks`}
        description={JupyterRealtimeCollaborationContent.meta.description}
      />
      <SidebarLayout contentSize="narrow">
        <ContentContainer size="narrow">
          <Heading color="gray.800" as="h1" size="xl" mb={12} mt={12}>
            {JupyterRealtimeCollaborationContent.meta.title}
          </Heading>
          <JupyterRealtimeCollaborationContent
            notebookCards={tools.map((tool) => (
              <LargeToolCard key={tool.id} tool={tool} mb={4} />
            ))}
          />
        </ContentContainer>
      </SidebarLayout>
    </Fragment>
  );
}

export default JupyterRealtimeCollaborationPage;
