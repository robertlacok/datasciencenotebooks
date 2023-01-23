import { Box, Button, Flex, FlexProps } from "@chakra-ui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import type { NotebookTool } from "../NotebookTool";
import { routes } from "../routes";
import { NextLink } from "./NextLink";

interface ToolLinkListProps extends FlexProps {
  tool: NotebookTool;
  includeWebsite?: boolean;
  includeAlternatives?: boolean;
  includeExamples?: boolean;
}

export function ToolLinkList({
  tool,
  includeAlternatives = true,
  includeWebsite = true,
  includeExamples = true,
  ...props
}: ToolLinkListProps) {
  return (
    <Flex m={-1} wrap="wrap" {...props}>
      {includeWebsite && tool.websiteUrl && (
        <Button
          m={1}
          as="a"
          href={tool.websiteUrl}
          rel="noopener"
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
        <Button
          m={1}
          as={NextLink}
          href={routes.toolAlternatives({ tool: tool.id })}
          variant="outline"
          size="sm"
        >
          Alternatives
        </Button>
      )}
      {includeExamples && tool.examples && tool.examples.length > 0 && (
        <Button
          m={1}
          as={NextLink}
          href={routes.toolExamples({ tool: tool.id })}
          variant="outline"
          size="sm"
        >
          Examples
        </Button>
      )}
    </Flex>
  );
}
