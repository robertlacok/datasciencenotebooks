import { Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";

import Content from "../content/jupyter-version-control.mdx";
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

    return isJupyterCompatible && hasVersionControl;
  });

  return (
    <Fragment>
      <Seo title={`Data Science Notebooks`} />
      <SidebarLayout>
        <ContentContainer>
          <Content
            components={{
              h1: (props) => (
                <Heading color="gray.800" as="h1" size="xl" mb={4} {...props} />
              ),
              h2: (props) => (
                <Heading color="gray.700" as="h2" size="lg" mb={4} {...props} />
              ),
              p: (props) => (
                <Text color="gray.700" as="p" size="lg" mb={4} {...props} />
              ),
            }}
          />
          {tools.map((tool) => (
            <LargeToolCard key={tool.id} tool={tool} mb={4} />
          ))}
        </ContentContainer>
      </SidebarLayout>
    </Fragment>
  );
}

export default JupyterVersionControlPage;
