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
  ComparisonTableRow,
  ComparisonTableSideCell,
  ComparisonTableToolCell,
  HorizontalComparisonTable,
  VerticalComparisonTable,
} from "../../../components/ComparisonTable";
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
      <Seo title={`${tool1.name} vs ${tool2.name} | Data science notebooks`} />
      <Head>
        <link
          rel="canonical"
          href={routes.compareCanonical({ tool1: tool1.id, tool2: tool2.id })}
        />
      </Head>
      <SidebarLayout>
        <ComparisonTableRow mb={12} pt={12}>
          <ComparisonTableSideCell />
          <ComparisonTableToolCell>
            <Heading as="h1" size="2xl" color="gray.800" mb={4}>
              {tool1.name} vs {tool2.name}
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Comparing two data science notebooks.
            </Text>
          </ComparisonTableToolCell>
        </ComparisonTableRow>
        <Box mb={12}>
          <VerticalComparisonTable tools={[tool1, tool2]} />
        </Box>
        <ComparisonTableRow mb={2} mt={6}>
          <ComparisonTableSideCell />
          <ComparisonTableToolCell>
            <Heading as="h2" size="lg" color="gray.800" mb={4}>
              Compare with other tools
            </Heading>
          </ComparisonTableToolCell>
        </ComparisonTableRow>
        <HorizontalComparisonTable
          toolsToCompare={[tool1, tool2]}
          tools={Object.values(notebookTools)}
        />
      </SidebarLayout>
    </Fragment>
  );
}

export default IndividualToolPage;
