import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import {
  categoryNames,
  HorizontalComparisonTable,
  notebookFeatureDetails,
  renderFeatureItem,
  UnknownFeatureListItem,
} from "../components/ComparisonTable";
import { ContentContainer } from "../components/ContentContainer";
import { ResponsiveImage } from "../components/Image";
import { NextLink } from "../components/NextLink";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { ToolLinkList } from "../components/ToolLinkList";
import {
  featureCategories,
  FeatureCategory,
  NotebookTool,
  NotebookToolExample,
} from "../NotebookTool";
import {
  getNotebookTool,
  notebookToolIds,
  notebookToolsInCanonicalOrder,
} from "../notebookTools";
import { ALTERNATIVES_ANCHOR_ID, EXAMPLES_ANCHOR_ID, routes } from "../routes";

export function getStaticProps({
  params,
}: GetStaticPropsContext<{
  tool: string;
}>): GetStaticPropsResult<IndividualToolPageProps> {
  return {
    props: {},
  };
}

export function getStaticPaths({}: GetStaticPathsContext): GetStaticPathsResult {
  return {
    fallback: false,
    paths: notebookToolIds.map((tool) => routes.tool({ tool })),
  };
}

interface IndividualToolPageProps {}

function IndividualToolPage({}: IndividualToolPageProps) {
  const router = useRouter();
  const { tool: toolId } = router.query;

  const tool = getNotebookTool(toolId as string);

  return (
    <Fragment>
      <Seo
        title={`${tool.name} | Data Science Notebooks`}
        description={`${summarizeNotebookToolDescription(tool)} Compare ${
          tool.name
        } with other notebook tools.`}
      />
      <SidebarLayout>
        <ContentContainer mb={8}>
          <Heading as="h1" size="2xl" color="gray.800" mb={4}>
            {tool.name}
          </Heading>
          <Box maxW="container.md">
            {tool.screenshot ? (
              <Box maxWidth="md" mt={4} borderRadius="md" overflow="hidden">
                <ResponsiveImage
                  alt={`A screenshot of ${tool.name}`}
                  src={tool.screenshot}
                  sizes="(max-width: 500px) 100vw, 500px"
                />
              </Box>
            ) : null}
            {tool.description ? (
              <Text fontSize="lg" color="gray.700" mt={4} fontWeight="semibold">
                {tool.description}
              </Text>
            ) : null}
            <ToolLinkList mt={4} tool={tool} />
            {tool.pageContent ? <Box mt={4}>{tool.pageContent()}</Box> : null}
          </Box>

          <Heading as="h2" size="lg" color="gray.800" mt={8} mb={4}>
            {tool.name} capabilities
          </Heading>
          <Box columnGap={4} sx={{ columnCount: 2 }}>
            {featureCategories.map((category) => (
              <FeatureCard
                key={category.type}
                featureCategory={category}
                tool={tool}
              />
            ))}
          </Box>
          {tool.examples && tool.examples.length > 0 ? (
            <Box mt={8}>
              <Heading
                as="h2"
                size="lg"
                color="gray.800"
                mb={4}
                id={EXAMPLES_ANCHOR_ID}
              >
                {tool.name} examples
              </Heading>
              <Grid
                gridTemplateColumns="repeat(auto-fill, minmax(256px, 1fr))"
                gap="4"
              >
                {tool.examples.map((example, index) => {
                  return <ExampleCard example={example} key={index} />;
                })}
              </Grid>
            </Box>
          ) : null}
        </ContentContainer>
        <ContentContainer mb={12}>
          <Heading
            as="h2"
            size="lg"
            color="gray.800"
            id={ALTERNATIVES_ANCHOR_ID}
          >
            Alternatives to {tool.name}
          </Heading>
        </ContentContainer>
        <HorizontalComparisonTable
          toolsToCompare={[tool]}
          tools={notebookToolsInCanonicalOrder}
        />
      </SidebarLayout>
    </Fragment>
  );
}

interface FeatureCardProps {
  tool: NotebookTool;
  featureCategory: FeatureCategory;
}

function FeatureCard({ tool, featureCategory }: FeatureCardProps) {
  return (
    <Box
      p={4}
      mb={4}
      borderRadius="lg"
      borderColor="gray.200"
      borderWidth="1px"
      borderStyle="solid"
      sx={{
        breakInside: "avoid",
      }}
    >
      <Heading as="h3" size="md" mb={2} color="gray.800">
        {categoryNames[featureCategory.type]}
      </Heading>

      {featureCategory.features.map((featureId) => {
        const toolFeatureCapabilities = tool.features[featureId];

        return (
          <div key={featureId}>
            <Heading
              as="h4"
              fontWeight="normal"
              fontSize="sm"
              lineHeight="tall"
              color="gray.600"
              mb={1}
            >
              {notebookFeatureDetails[featureId].title}{" "}
              {notebookFeatureDetails[featureId]?.getHelpIcon?.(tool)}
            </Heading>
            {toolFeatureCapabilities ? (
              toolFeatureCapabilities.map((capability, index) => (
                <div key={index}>
                  {renderFeatureItem(featureId, capability)}
                </div>
              ))
            ) : (
              <UnknownFeatureListItem />
            )}
          </div>
        );
      })}
    </Box>
  );
}

interface ExampleCardProps {
  example: NotebookToolExample;
}

function ExampleCard({ example }: ExampleCardProps) {
  return (
    <NextLink
      p={4}
      bgColor="gray.50"
      borderRadius="lg"
      as="div"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      href={example.url}
      rel="noopener noreferrer"
      transition="0.2s"
      cursor="pointer"
      _hover={{
        bgColor: "gray.100",
      }}
      data-group
    >
      <Box fontWeight="semibold" fontSize="lg">
        {example.title}
      </Box>
      {example.description ? (
        <Box mt={1} color="gray.600">
          {example.description}
        </Box>
      ) : null}
      <Box
        fontSize="sm"
        mt={1}
        color="gray.500"
        _groupHover={{
          color: "blue.600",
        }}
      >
        Open →
      </Box>
    </NextLink>
  );
}

const summarizeNotebookToolDescription = (tool: NotebookTool) => {
  if (tool.metaDescription != null) {
    return tool.metaDescription;
  }

  const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
    (capability) => capability.type === "yes"
  );
  const isManaged = tool.features.setupManaged?.some(
    (capability) => capability.type === "yes"
  );
  const isOpenSource = tool.features.licensingLicense?.some(
    (capability) => capability.type === "openSource"
  );
  const isRealtimeCollaborative =
    tool.features.managementCollaborativeEditing?.some(
      (capability) => capability.type === "realtime"
    );

  const descriptionParts = [
    tool.name,
    isJupyterCompatible && isManaged
      ? "is a fully-managed Jupyter-compatible data notebook"
      : isJupyterCompatible && isOpenSource
      ? "is an open-source Jupyter-compatible data notebook"
      : isManaged
      ? "is a fully-managed data notebook"
      : isOpenSource
      ? "is an open-source data notebook"
      : "is a data notebook",
    isRealtimeCollaborative ? "with realtime collaborative editing" : null,
  ];

  return descriptionParts.filter((part) => part).join(" ") + ".";
};

export default IndividualToolPage;
