import { Box, Heading, Text } from "@chakra-ui/react";
import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import {
  HorizontalComparisonTable,
  VerticalComparisonTable,
} from "../../../components/ComparisonTable";
import { ContentContainer } from "../../../components/ContentContainer";
import { Seo } from "../../../components/Seo";
import { SidebarLayout } from "../../../components/SidebarLayout";
import {
  getNotebookTool,
  notebookToolIds,
  notebookTools,
} from "../../../notebookTools";
import { routes } from "../../../routes";

export function getStaticProps({}: GetStaticPropsContext<{
  tool1: string;
  tool2: string;
}>): GetStaticPropsResult<IndividualToolPageProps> {
  return {
    props: {},
  };
}

export function getStaticPaths({}: GetStaticPathsContext): GetStaticPathsResult {
  return {
    fallback: false,
    paths: notebookToolIds.flatMap((tool1) =>
      notebookToolIds
        .filter((tool2) => tool1 !== tool2)
        .map((tool2) => routes.compare({ tool1, tool2 }))
    ),
  };
}

interface IndividualToolPageProps {}

function IndividualToolPage({}: IndividualToolPageProps) {
  const router = useRouter();

  const { tool1: tool1Id, tool2: tool2Id } = router.query;
  const tool1 = getNotebookTool(tool1Id as string);
  const tool2 = getNotebookTool(tool2Id as string);

  return (
    <Fragment>
      <Seo
        title={`${tool1.name} vs ${tool2.name} | Data science notebooks`}
        description={`The differences and similarities between the data science notebook tools ${tool1.name} and ${tool2.name}.`}
      />
      <Head>
        <link
          rel="canonical"
          href={routes.compareCanonical({ tool1: tool1.id, tool2: tool2.id })}
        />
      </Head>
      <SidebarLayout>
        <ContentContainer>
          <Box mb={12}>
            <Heading as="h1" size="2xl" color="gray.800" mb={4}>
              {tool1.name} vs {tool2.name}
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Comparing two data science notebooks.
            </Text>
          </Box>
          <Box mb={12}>
            <VerticalComparisonTable tools={[tool1, tool2]} />
          </Box>
        </ContentContainer>
        <ContentContainer mb={4}>
          <Heading as="h2" size="lg" color="gray.800" mb={4}>
            Alternatives to {tool1.name} and {tool2.name}
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Compare {tool1.name} and {tool2.name} with other data science
            notebook tools.
          </Text>
        </ContentContainer>

        <HorizontalComparisonTable
          toolsToCompare={[tool1, tool2]}
          tools={Object.values(notebookTools)}
        />
      </SidebarLayout>
    </Fragment>
  );
}

export default IndividualToolPage;
