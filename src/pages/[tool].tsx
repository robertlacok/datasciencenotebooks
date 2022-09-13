import { Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { featureCategories } from "../NotebookTool";
import { getNotebookTool, notebookToolIds } from "../notebookTools";
import { routes } from "../routes";

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
      <Seo title={`${tool.name} | Data science notebooks`} />
      <SidebarLayout>
        <Heading>{tool.name}</Heading>

        <Table>
          <Thead>
            <Tr pt={8}>
              {featureCategories.map((featureCategory) => {
                return (
                  <Th key={featureCategory.type}>{featureCategory.type}</Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {featureCategories.map((featureCategory) => {
                return (
                  <Td key={featureCategory.type}>
                    {featureCategory.features.map((featureId) => {
                      const toolFeatureCapabilities = tool.features[featureId];

                      return (
                        <div key={featureId}>
                          {toolFeatureCapabilities
                            ? toolFeatureCapabilities.map(
                                (capability, index) => (
                                  <div key={index}>{capability.type}</div>
                                )
                              )
                            : "Unknown"}
                        </div>
                      );
                    })}
                  </Td>
                );
              })}
            </Tr>
          </Tbody>
        </Table>
      </SidebarLayout>
    </Fragment>
  );
}

export default IndividualToolPage;
