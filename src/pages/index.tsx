import { Fragment } from "react";
import { HorizontalComparisonTable } from "../components/ComparisonTable";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookTools } from "../notebookTools";

function Home() {
  return (
    <Fragment>
      <Seo />
      <SidebarLayout>
        <HorizontalComparisonTable tools={Object.values(notebookTools)} />
      </SidebarLayout>
    </Fragment>
  );
}

export default Home;
