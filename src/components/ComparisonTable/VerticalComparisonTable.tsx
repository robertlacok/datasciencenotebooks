import { Heading, Flex, BoxProps, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import { featureCategories, NotebookTool } from "../../NotebookTool";
import {
  categoryNames,
  notebookFeatureDetails,
  renderFeatureItem,
  UnknownFeatureListItem,
} from "./notebookFeatureDetails";
import { ToolLinkList } from "../ToolLinkList";

interface VerticalComparisonTableProps {
  tools: NotebookTool[];
}

export function VerticalComparisonTable({
  tools,
}: VerticalComparisonTableProps) {
  return (
    <div>
      <ComparisonTableRow
        py={4}
        bgColor="white"
        position="sticky"
        top="0"
        zIndex={1}
      >
        {tools.map((tool) => {
          return (
            <ComparisonTableToolCell key={tool.id}>
              <Heading size="lg" color="gray.700">
                {tool.name}
              </Heading>
            </ComparisonTableToolCell>
          );
        })}
      </ComparisonTableRow>
      <ComparisonTableRow>
        {tools.map((tool) => {
          return (
            <ComparisonTableToolCell key={tool.id}>
              {tool.screenshot ? (
                <Box mb={4} borderRadius="lg" overflow="hidden">
                  <Image
                    sizes="(max-width: 500px) 100vw, 500px"
                    layout="responsive"
                    src={tool.screenshot}
                    alt={`A screenshot of ${tool.name}`}
                  />
                </Box>
              ) : null}
              <Text color="gray.600" mb={4}>
                {tool.description}
              </Text>
              <ToolLinkList tool={tool} />
            </ComparisonTableToolCell>
          );
        })}
      </ComparisonTableRow>
      {featureCategories.map((featureCategory) => {
        return (
          <Fragment key={featureCategory.type}>
            <ComparisonTableRow
              as="h3"
              fontWeight="bold"
              fontSize="xl"
              borderBottomColor="gray.200"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              color="gray.700"
              pt={4}
              px={4}
              mb={2}
            >
              {categoryNames[featureCategory.type]}
            </ComparisonTableRow>
            {featureCategory.features.map((featureId) => {
              return (
                <ComparisonTableRow key={featureId}>
                  {tools.map((tool) => {
                    const toolFeatureCapabilities = tool.features[featureId];

                    return (
                      <ComparisonTableToolCell key={tool.id}>
                        <Heading
                          as="h3"
                          fontWeight="bold"
                          fontSize="sm"
                          lineHeight="tall"
                          color="gray.800"
                          mb={1}
                        >
                          {notebookFeatureDetails[featureId].title}{" "}
                          {notebookFeatureDetails[featureId]?.getHelpIcon?.(
                            tool
                          )}
                        </Heading>
                        {toolFeatureCapabilities ? (
                          toolFeatureCapabilities.map((capability, index) => (
                            <div key={index}>
                              {renderFeatureItem(featureId, capability)}
                            </div>
                          ))
                        ) : (
                          <UnknownFeatureListItem />
                        )}
                      </ComparisonTableToolCell>
                    );
                  })}
                </ComparisonTableRow>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}

export function ComparisonTableRow({ children, ...props }: BoxProps) {
  return (
    <Box overflowX="hidden" {...props}>
      <Flex mx={-5} p={1}>
        {children}
      </Flex>
    </Box>
  );
}

export const COMPARISON_TABLE_SIDE_CELL_WIDTH = 64;

export function ComparisonTableToolCell(props: BoxProps) {
  return <Box px={4} py={1} flex="1 0 auto" w={128} {...props} />;
}
