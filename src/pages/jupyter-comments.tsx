import { Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";

import { JupyterCommentsContent } from "../content/JupyterCommentsContent";
import { LargeToolCard } from "../components/LargeToolCard";

interface JupyterCommentsPageProps {}

function JupyterCommentsPage({}: JupyterCommentsPageProps) {
  const tools = notebookToolsInCanonicalOrder.filter((tool) => {
    const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
      (capability) => capability.type === "yes"
    );
    const hasComments = tool.features.managementComments?.some(
      (capability) => capability.type === "inNotebook"
    );

    return isJupyterCompatible && hasComments;
  });

  return (
    <Fragment>
      <Seo
        title={`${JupyterCommentsContent.meta.title} | Data Science Notebooks`}
        description={JupyterCommentsContent.meta.description}
      />
      <SidebarLayout>
        <ContentContainer maxWidth="container.md">
          <Heading color="gray.800" as="h1" size="xl" mb={12} mt={12}>
            {JupyterCommentsContent.meta.title}
          </Heading>
          <JupyterCommentsContent
            notebookCards={tools.map((tool) => (
              <LargeToolCard key={tool.id} tool={tool} mb={4} />
            ))}
          />
        </ContentContainer>
      </SidebarLayout>
    </Fragment>
  );
}

export default JupyterCommentsPage;
