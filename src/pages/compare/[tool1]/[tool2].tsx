import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { VerticalComparisonTable } from "../../../components/ComparisonTable";
import { Seo } from "../../../components/Seo";
import { SidebarLayout } from "../../../components/SidebarLayout";
import { getNotebookTool } from "../../../notebookTools";

export function getStaticProps({
  params,
}: GetStaticPropsContext<{
  tool1: string;
  tool2: string;
}>): GetStaticPropsResult<IndividualToolPageProps> {
  return {
    props: {
      toolName1: params?.tool1 ?? "",
      toolName2: params?.tool2 ?? "",
    },
  };
}

export function getStaticPaths({}: GetStaticPathsContext): GetStaticPathsResult {
  return {
    fallback: false,
    paths: ["/compare/jupyter/deepnote", "/compare/deepnote/jupyter"],
  };
}

interface IndividualToolPageProps {
  toolName1: string;
  toolName2: string;
}

function IndividualToolPage({ toolName1, toolName2 }: IndividualToolPageProps) {
  const router = useRouter();

  const { tool1: tool1Id, tool2: tool2Id } = router.query;
  const tool1 = getNotebookTool(tool1Id as string);
  const tool2 = getNotebookTool(tool2Id as string);

  return (
    <Fragment>
      <Seo title={`${toolName1} vs ${toolName2} | Data science notebooks`} />
      <SidebarLayout>
        <VerticalComparisonTable tools={[tool1, tool2]} />
      </SidebarLayout>
    </Fragment>
  );
}

export default IndividualToolPage;
