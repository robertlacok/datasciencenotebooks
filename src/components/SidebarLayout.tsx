import { Box, BoxProps } from "@chakra-ui/react";
import type { StyleProps } from "@chakra-ui/system";
import { Fragment, ReactNode } from "react";

const SIDEBAR_WIDTH: StyleProps["width"] = "64";

export function Sidebar(props: BoxProps) {
  return (
    <Box
      position="fixed"
      top={0}
      height={"100%"}
      width={SIDEBAR_WIDTH}
      overflowY="auto"
      bgColor="gray.50"
      borderRightWidth="1px"
      borderRightStyle="solid"
      borderRightColor="gray.200"
      {...props}
    />
  );
}

export function SidebarMain(props: BoxProps) {
  return <Box as="main" paddingLeft={SIDEBAR_WIDTH} {...props} />;
}

interface SidebarLayoutProps {
  children?: ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <Fragment>
      <Sidebar>Data science notebooks</Sidebar>
      <SidebarMain>{children}</SidebarMain>
    </Fragment>
  );
}
