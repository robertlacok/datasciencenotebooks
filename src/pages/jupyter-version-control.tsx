import { Box, Heading, Text } from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";
import { ContentContainer } from "../components/ContentContainer";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";

import Content, { meta } from "../content/jupyter-version-control.mdx";
import { LargeToolCard } from "../components/LargeToolCard";
import Image, { type ImageProps } from "next/image";

interface JupyterVersionControlPageProps {}

interface ProseImageProps extends Pick<ImageProps, "src" | "alt"> {
  caption?: ReactNode;
}

function ProseImage({ src, alt, caption }: ProseImageProps) {
  return (
    <Box mb={4}>
      <Box
        borderRadius="lg"
        borderColor="gray.200"
        borderWidth="1px"
        borderStyle="solid"
        overflow="hidden"
      >
        <Image
          sizes="(max-width: 800px) 100vw, 800px"
          src={src}
          alt={alt}
          layout="responsive"
        />
      </Box>
      {caption ? (
        <Text mt={2} fontSize="sm" color="gray.500" textAlign="center">
          {caption}
        </Text>
      ) : null}
    </Box>
  );
}

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
      <Seo title={`Data Science Notebooks`} />
      <SidebarLayout>
        <ContentContainer maxWidth="container.md">
          <Heading color="gray.800" as="h1" size="2xl" mb={4}>
            {meta.title}
          </Heading>
          <Content
            notebookCards={tools.map((tool) => (
              <LargeToolCard key={tool.id} tool={tool} mb={4} />
            ))}
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
              Image: ProseImage,
            }}
          />
        </ContentContainer>
      </SidebarLayout>
    </Fragment>
  );
}

export default JupyterVersionControlPage;
