import { Box, Button, Flex, FlexProps } from "@chakra-ui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import type { NotebookTool } from "../NotebookTool";
import { routes } from "../routes";
import NextLink from "next/link";

interface ToolLinkListProps extends FlexProps {
  tool: NotebookTool;
  includeWebsite?: boolean;
  includeAlternatives?: boolean;
}

export function ToolLinkList({
  tool,
  includeAlternatives = true,
  includeWebsite = true,
  ...props
}: ToolLinkListProps) {
  return (
    <Flex m={-1} wrap="wrap" {...props}>
      {includeWebsite && tool.websiteUrl && (
        <Button
          m={1}
          as="a"
          href={tool.websiteUrl}
          rel="noopener noreferrer"
          rightIcon={
            <Box w={5}>
              <ArrowTopRightOnSquareIcon />
            </Box>
          }
          size="sm"
        >
          Website
        </Button>
      )}
      {includeAlternatives && (
        <NextLink href={routes.toolAlternatives({ tool: tool.id })} passHref>
          <Button m={1} as="a" variant="outline" size="sm">
            Alternatives
          </Button>
        </NextLink>
      )}
    </Flex>
  );
}
