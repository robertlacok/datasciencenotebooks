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
} from "@chakra-ui/react";
import { Fragment, ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import {
  SIDEBAR_BREAKPOINT,
  SIDEBAR_BREAKPOINT_LARGE,
  SIDEBAR_WIDTH,
  sidebarWidthVar,
} from "./constants";
import { SidebarContent } from "./SidebarContent";

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
      paddingTop={{
        base: 24,
        [SIDEBAR_BREAKPOINT]: 8,
      }}
      {...props}
    />
  );
}

interface SidebarLayoutProps {
  children?: ReactNode;
}

const sidebarWidthVaraibles = {
  base: 0,
  [SIDEBAR_BREAKPOINT]: `var(--chakra-sizes-${SIDEBAR_WIDTH[SIDEBAR_BREAKPOINT]})`,
  [SIDEBAR_BREAKPOINT_LARGE]: `var(--chakra-sizes-${SIDEBAR_WIDTH[SIDEBAR_BREAKPOINT_LARGE]})`,
};

export function SidebarLayout({ children }: SidebarLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

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
        {children}
      </SidebarMain>
      <Button
        ref={btnRef}
        onClick={onOpen}
        position="absolute"
        top="4"
        left="4"
        leftIcon={
          <Box w={5}>
            <InformationCircleIcon />
          </Box>
        }
      >
        About this website
      </Button>
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
