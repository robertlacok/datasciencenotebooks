import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { Fragment } from "react";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";

export function getStaticProps({
  params,
}: GetStaticPropsContext<{
  tool: string;
}>): GetStaticPropsResult<IndividualToolPageProps> {
  return {
    props: {
      toolName: params?.tool ?? "",
    },
  };
}

export function getStaticPaths({}: GetStaticPathsContext): GetStaticPathsResult {
  return {
    fallback: false,
    paths: ["/jupyter", "/deepnote"],
  };
}

interface IndividualToolPageProps {
  toolName: string;
}

function IndividualToolPage({ toolName }: IndividualToolPageProps) {
  return (
    <Fragment>
      <Seo title={`${toolName} | Data science notebooks`} />
      <SidebarLayout>{toolName}</SidebarLayout>
    </Fragment>
  );
}

export default IndividualToolPage;
