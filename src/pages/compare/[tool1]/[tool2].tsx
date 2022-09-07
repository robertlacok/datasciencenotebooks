import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import { Fragment } from "react";
import { Seo } from "../../../components/Seo";
import { SidebarLayout } from "../../../components/SidebarLayout";

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
  return (
    <Fragment>
      <Seo title={`${toolName1} vs ${toolName2} | Data science notebooks`} />
      <SidebarLayout>
        {toolName1} vs {toolName2}
      </SidebarLayout>
    </Fragment>
  );
}

export default IndividualToolPage;
