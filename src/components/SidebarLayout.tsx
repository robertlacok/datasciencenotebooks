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
  Link,
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
      {router.pathname !== homeRoute ? (
        <NextLink href={homeRoute} passHref>
          <Button as="a" variant="outline" mb={4}>
            View all notebooks
          </Button>
        </NextLink>
      ) : null}
      <Box fontSize="sm" lineHeight="tall" color="gray.600">
        <Text mb={2}>
          Data science gets done in notebooks. This website exists to compare
          the features in different data science notebook tools.
        </Text>
        <Text mb={2}>
          My name is{" "}
          <Link
            color="blue.500"
            href="https://www.linkedin.com/in/robert-lacok/"
            rel="noopener noreferrer"
          >
            Robert Lacok
          </Link>
          , and I’m a data notebook enthusiast. Because I keep on top of the
          latest developments in the space, I wanted to share it with the world.
          If you want to learn more about notebooks, let’s chat!
        </Text>
        <Text>
          I’m also a product manager at{" "}
          <Link
            color="blue.500"
            href="https://deepnote.com"
            rel="noopener noreferrer"
          >
            Deepnote
          </Link>
          . I try to be unbiased - if you believe any tools are missing or
          misrepresented, please{" "}
          <Link
            color="blue.500"
            href="mailto:robert@deepnote.com"
            rel="noopener noreferrer"
          >
            email me
          </Link>{" "}
          or
          <Link
            color="blue.500"
            href="https://github.com/robertlacok/datasciencenotebooks"
            rel="noopener noreferrer"
          >
            open a pull request on Github
          </Link>
          .
        </Text>
      </Box>
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
        base: 24,
        [SIDEBAR_BREAKPOINT]: 12,
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
