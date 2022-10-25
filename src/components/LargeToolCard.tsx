import { Box, Heading, Text, chakra, Flex, FlexProps } from "@chakra-ui/react";
import Image from "next/image";
import type { NotebookTool } from "../NotebookTool";
import { ToolLinkList } from "../components/ToolLinkList";
import NextLink from "next/link";
import { routes } from "../routes";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface LargeToolCardProps extends FlexProps {
  tool: NotebookTool;
}

export function LargeToolCard({ tool, ...props }: LargeToolCardProps) {
  return (
    <Flex
      p={2}
      borderRadius="lg"
      borderColor="gray.200"
      borderWidth="1px"
      borderStyle="solid"
      flexWrap="wrap"
      {...props}
    >
      <Box
        flex="1 1 auto"
        minWidth="64"
        maxWidth="sm"
        p={2}
        alignSelf="flex-start"
      >
        {tool.screenshot ? (
          <Box borderRadius="md" overflow="hidden">
            <Image
              sizes="(max-width: 500px) 100vw, 500px"
              src={tool.screenshot}
              layout="responsive"
              alt={`A screenshot of ${tool.name}`}
            />
          </Box>
        ) : null}
      </Box>
      <Box flex="3 1 0" alignSelf="center" minWidth="64" p={2}>
        <NextLink href={routes.tool({ tool: tool.id })} passHref>
          <chakra.a display="flex" data-group alignItems="center" mb={2}>
            <Box w={6} h={6} mr={2} flex="0 0 auto">
              <ArrowRightCircleIcon />
            </Box>
            <Heading
              as="h3"
              size="md"
              color="gray.800"
              _groupHover={{ textDecoration: "underline" }}
            >
              {tool.name}
            </Heading>
          </chakra.a>
        </NextLink>
        <Text color="gray.600" mb={4}>
          {tool.description}
        </Text>
        <ToolLinkList tool={tool}></ToolLinkList>
      </Box>
    </Flex>
  );
}
