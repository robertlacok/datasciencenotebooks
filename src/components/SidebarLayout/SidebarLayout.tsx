import {
  Box,
  BoxProps,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  ButtonGroup,
} from "@chakra-ui/react";
import { Fragment, ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  ArrowLeftIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import {
  SIDEBAR_BREAKPOINT,
  SIDEBAR_BREAKPOINT_LARGE,
  SIDEBAR_WIDTH,
  sidebarWidthVar,
} from "./constants";
import { SidebarContent } from "./SidebarContent";
import { SiteFooter } from "../SiteFooter";
import { routes } from "../../routes";
import { NextLink } from "../NextLink";
import { ContentContainer } from "../ContentContainer";

export function Sidebar(props: BoxProps) {
  return (
    <Box
      display={{
        base: "none",
        [SIDEBAR_BREAKPOINT]: "block",
      }}
      position="fixed"
      top={0}
      height={"100%"}
      width={SIDEBAR_WIDTH}
      px={8}
      pt={12}
      pb={4}
      overflowY="auto"
      bgColor="gray.50"
      color="gray.700"
      zIndex={10}
      {...props}
    />
  );
}

export function SidebarMain(props: BoxProps) {
  return (
    <Box
      as="main"
      paddingLeft={{
        base: "0",
        ...SIDEBAR_WIDTH,
      }}
      paddingTop={8}
      {...props}
    />
  );
}

interface SidebarLayoutProps {
  children?: ReactNode;
  contentSize?: "wide" | "narrow";
}

const sidebarWidthVaraibles = {
  base: 0,
  [SIDEBAR_BREAKPOINT]: `var(--chakra-sizes-${SIDEBAR_WIDTH[SIDEBAR_BREAKPOINT]})`,
  [SIDEBAR_BREAKPOINT_LARGE]: `var(--chakra-sizes-${SIDEBAR_WIDTH[SIDEBAR_BREAKPOINT_LARGE]})`,
};

export function SidebarLayout({ children, contentSize }: SidebarLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const homeRoute = routes.home();
  const isHome = router.pathname === homeRoute;

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);

    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router, onClose]);

  return (
    <Fragment>
      <Sidebar
        sx={{
          [sidebarWidthVar.variable]: sidebarWidthVaraibles,
        }}
      >
        <SidebarContent />
      </Sidebar>
      <SidebarMain
        sx={{
          [sidebarWidthVar.variable]: sidebarWidthVaraibles,
        }}
      >
        <ContentContainer
          size={contentSize}
          display={
            isHome
              ? {
                  base: "block",
                  [SIDEBAR_BREAKPOINT]: "none",
                }
              : "block"
          }
          mb={4}
        >
          <ButtonGroup>
            {router.pathname !== homeRoute ? (
              <Button
                as={NextLink}
                href={homeRoute}
                variant="outline"
                mb={3}
                size="sm"
                leftIcon={
                  <Box w={5} h={5}>
                    <ArrowLeftIcon />
                  </Box>
                }
              >
                View all notebooks
              </Button>
            ) : null}
            <Box
              display={{
                base: "block",
                [SIDEBAR_BREAKPOINT]: "none",
              }}
            >
              <Button
                ref={btnRef}
                onClick={onOpen}
                size="sm"
                leftIcon={
                  <Box w={5}>
                    <InformationCircleIcon />
                  </Box>
                }
              >
                About
              </Button>
            </Box>
          </ButtonGroup>
        </ContentContainer>
        {children}
        <SiteFooter size={contentSize} />
      </SidebarMain>

      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bgColor="gray.50"
          borderRightWidth="1px"
          borderRightStyle="solid"
          borderRightColor="gray.200"
        >
          <DrawerCloseButton />

          <DrawerBody pt={12}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
