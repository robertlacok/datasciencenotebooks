import {
  Box,
  BoxProps,
  Text,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Fragment, ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import dsnLogo from "../images/dsn-logo.svg";
import NextLink from "next/link";
import { routes } from "../routes";
import { useRouter } from "next/router";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

const SIDEBAR_WIDTH = "64";
const SIDEBAR_BREAKPOINT = "md";

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
      px={4}
      py={12}
      overflowY="auto"
      bgColor="gray.50"
      borderRightWidth="1px"
      borderRightStyle="solid"
      borderRightColor="gray.200"
      color="gray.700"
      zIndex={10}
      {...props}
    />
  );
}

function SidebarContent() {
  const router = useRouter();
  const homeRoute = routes.home();

  return (
    <Fragment>
      <Box mb={4}>
        <Image
          src={dsnLogo}
          alt="Data Science Notebooks"
          layout="responsive"
          priority
        />
      </Box>
      <Text size="md" lineHeight="tall" mb={4}>
        Testing testing 123
      </Text>
      {router.pathname !== homeRoute ? (
        <NextLink href={homeRoute} passHref>
          <Button as="a" variant="outline">
            View all notebooks
          </Button>
        </NextLink>
      ) : null}
    </Fragment>
  );
}

export function SidebarMain(props: BoxProps) {
  return (
    <Box
      as="main"
      paddingLeft={{
        base: "0",
        [SIDEBAR_BREAKPOINT]: SIDEBAR_WIDTH,
      }}
      paddingTop={{
        base: "6",
        [SIDEBAR_BREAKPOINT]: 0,
      }}
      {...props}
    />
  );
}

interface SidebarLayoutProps {
  children?: ReactNode;
}

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
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <SidebarMain>{children}</SidebarMain>
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
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody pt={12}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
