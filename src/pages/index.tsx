import { Fragment } from "react";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";

function Home() {
  return (
    <Fragment>
      <Seo />
      <SidebarLayout>Content</SidebarLayout>
    </Fragment>
  );
}

export default Home;
