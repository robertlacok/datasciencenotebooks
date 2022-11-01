import { Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";

import { OpenSourceNotebooksContent } from "../content/OpenSourceNotebooksContent";
import { LargeToolCard } from "../components/LargeToolCard";

interface JupyterNotebookOnlinePageProps {}

function JupyterNotebookOnlinePage({}: JupyterNotebookOnlinePageProps) {
  const tools = notebookToolsInCanonicalOrder.filter((tool) => {
    const isOpenSource = tool.features.licensingLicense?.some(
      (capability) => capability.type === "openSource"
    );

    return isOpenSource;
  });

  return (
    <Fragment>
      <Seo
        title={`${OpenSourceNotebooksContent.meta.title} | Data Science Notebooks`}
        description={OpenSourceNotebooksContent.meta.description}
      />
      <SidebarLayout footerSize="narrow">
        <ContentContainer size="narrow">
          <Heading color="gray.800" as="h1" size="xl" mb={12} mt={12}>
            {OpenSourceNotebooksContent.meta.title}
          </Heading>
          <OpenSourceNotebooksContent
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
