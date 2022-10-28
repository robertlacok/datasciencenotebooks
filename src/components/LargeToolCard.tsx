import { Box, Heading, Text, Flex, FlexProps } from "@chakra-ui/react";
import type { NotebookTool } from "../NotebookTool";
import { ToolLinkList } from "../components/ToolLinkList";
import { routes } from "../routes";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ResponsiveImage } from "./Image";
import { NextLink } from "./NextLink";

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
            <ResponsiveImage
              src={tool.screenshot}
              alt={`A screenshot of ${tool.name}`}
              sizes="(max-width: 500px) 100vw, 500px"
            />
          </Box>
        ) : null}
      </Box>
      <Box flex="3 1 0" alignSelf="center" minWidth="64" p={2}>
        <NextLink
          href={routes.tool({ tool: tool.id })}
          display="flex"
          data-group
          alignItems="center"
          mb={2}
        >
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
        </NextLink>
        <Text color="gray.600" mb={4}>
          {tool.description}
        </Text>
        <ToolLinkList tool={tool}></ToolLinkList>
      </Box>
    </Flex>
  );
}
