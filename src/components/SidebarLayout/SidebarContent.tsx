import {
  Box,
  Text,
  Button,
  Link,
  LinkProps,
  Heading,
  Flex,
  BoxProps,
  HeadingProps,
} from "@chakra-ui/react";
import { Fragment } from "react";
import Image from "next/legacy/image";
import NextLink from "next/link";
import { routes } from "../../routes";
import { useRouter } from "next/router";
import {
  ChatBubbleOvalLeftIcon,
  ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import imageRobertUrl from "./image-robert.jpeg";

export function SidebarContent() {
  const router = useRouter();
  const homeRoute = routes.home();

  return (
    <Fragment>
      <Box mb={8}>
        {router.pathname !== homeRoute ? (
          <NextLink href={homeRoute} passHref>
            <Button
              as="a"
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
          </NextLink>
        ) : null}
        <Heading as="h1" size="md" mb={4} color="gray.800">
          Data Science Notebooks
        </Heading>

        <Text mb={2} lineHeight="tall" fontSize="md" color="gray.700">
          Data science gets done in notebooks. This website exists to compare
          the features in different data science notebook tools.
        </Text>
      </Box>
      <Box>
        <SidebarSection mb={8}>
          <SidebarSectionHeading
            icon={
              <Box w="100%" h="100%">
                <Image
                  src={imageRobertUrl}
                  layout="responsive"
                  priority
                  sizes="128px"
                  alt="Robert Lacok"
                />
              </Box>
            }
          >
            About the author
          </SidebarSectionHeading>
          <Text mb={2}>
            My name is{" "}
            <SidebarLink href={links.linkedin} isExternal>
              Robert Lacok
            </SidebarLink>
            , and I’m a data notebook enthusiast. Because I keep on top of the
            latest developments in the space, I wanted to share it with the
            world.
          </Text>
          <Text>
            I’m also a product manager at{" "}
            <SidebarLink href={links.deepnote} isExternal>
              Deepnote
            </SidebarLink>
            . I try to be unbiased — if you believe any tools are missing or
            misrepresented, please{" "}
            <SidebarLink href={links.email} isExternal>
              email me
            </SidebarLink>{" "}
            or{" "}
            <SidebarLink href={links.github} isExternal>
              open a pull request on GitHub
            </SidebarLink>
            .
          </Text>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionHeading
            icon={
              <Box w={5} h={5} flex="0 0 auto" color="blue.500">
                <ChatBubbleOvalLeftIcon />
              </Box>
            }
          >
            Need help?
          </SidebarSectionHeading>
          <Text>
            If you need help picking a data notebook for your next project, feel
            free to reach out to me at my{" "}
            <SidebarLink href={links.email} isExternal>
              personal email address
            </SidebarLink>
            . I’d be happy to chat about the pros and cons of each solution.
          </Text>
        </SidebarSection>
      </Box>
    </Fragment>
  );
}

function SidebarLink({ isExternal, ...props }: LinkProps) {
  return (
    <Link
      rel={isExternal ? "noopener noreferrer" : undefined}
      color="blue.600"
      textDecoration="underline"
      {...props}
    />
  );
}

function SidebarSection(props: BoxProps) {
  return <Box fontSize="sm" lineHeight="tall" color="gray.600" {...props} />;
}

function SidebarSectionHeading({
  children,
  icon,
  ...props
}: HeadingProps & { icon?: JSX.Element }) {
  return (
    <Heading
      as="h3"
      size="sm"
      mb={2}
      color="gray.700"
      display="flex"
      alignItems="center"
      {...props}
    >
      <Flex
        align="center"
        justify="center"
        w={8}
        h={8}
        mr={2}
        ml={-1}
        flex="0 0 auto"
        bgColor="gray.200"
        borderRadius="full"
        overflow="hidden"
      >
        {icon}
      </Flex>
      {children}
    </Heading>
  );
}

const links = {
  email: "mailto:robert.lacok@gmail.com",
  linkedin: "https://www.linkedin.com/in/robert-lacok/",
  github: "https://github.com/robertlacok/datasciencenotebooks",
  deepnote: "https://deepnote.com",
};
