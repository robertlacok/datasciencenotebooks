import { Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";

import { JupyterOnlineContent } from "../content/JupyterOnlineContent";
import { LargeToolCard } from "../components/LargeToolCard";

interface JupyterNotebookOnlinePageProps {}

function JupyterNotebookOnlinePage({}: JupyterNotebookOnlinePageProps) {
  const tools = notebookToolsInCanonicalOrder.filter((tool) => {
    const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
      (capability) => capability.type === "yes"
    );
    const isManaged = tool.features.setupManaged?.some(
      (capability) => capability.type === "yes"
    );

    return isJupyterCompatible && isManaged;
  });

  return (
    <Fragment>
      <Seo
        title={`${JupyterOnlineContent.meta.title} | Data Science Notebooks`}
        description={JupyterOnlineContent.meta.description}
      />
      <SidebarLayout contentSize="narrow">
        <ContentContainer size="narrow">
          <Heading color="gray.800" as="h1" size="xl" mb={12} mt={12}>
            {JupyterOnlineContent.meta.title}
          </Heading>
          <JupyterOnlineContent
            notebookCards={tools.map((tool) => (
              <LargeToolCard key={tool.id} tool={tool} mb={4} />
            ))}
          />
        </ContentContainer>
      </SidebarLayout>
    </Fragment>
  );
}

export default JupyterNotebookOnlinePage;
