import { Heading, Flex, BoxProps, Box, FlexProps } from "@chakra-ui/react";
import { Fragment } from "react";
import { featureCategories, NotebookTool } from "../../NotebookTool";
import {
  notebookFeatureDetails,
  renderFeatureItem,
} from "./notebookFeatureDetails";

interface VerticalComparisonTableProps {
  tools: NotebookTool[];
}

export function VerticalComparisonTable({
  tools,
}: VerticalComparisonTableProps) {
  return (
    <div>
      <ComparisonTableRow py={4} bgColor="white" position="sticky" top="0">
        <ComparisonTableSideCell />
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
        <ComparisonTableSideCell />
        {tools.map((tool) => {
          return (
            <ComparisonTableToolCell key={tool.id} color="gray.600">
              {tool.description}
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
            >
              {categoryNames[featureCategory.type]}
            </ComparisonTableRow>
            {featureCategory.features.map((featureId) => {
              return (
                <ComparisonTableRow key={featureId}>
                  <ComparisonTableSideCell
                    fontSize="sm"
                    lineHeight="tall"
                    color="gray.600"
                  >
                    {notebookFeatureDetails[featureId].title}
                  </ComparisonTableSideCell>

                  {tools.map((tool) => {
                    const toolFeatureCapabilities = tool.features[featureId];

                    return (
                      <ComparisonTableToolCell key={tool.id}>
                        {toolFeatureCapabilities
                          ? toolFeatureCapabilities.map((capability, index) => (
                              <div key={index}>
                                {renderFeatureItem(featureId, capability)}
                              </div>
                            ))
                          : "Unknown"}
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

const categoryNames = {
  setup: "Setup",
  features: "Features",
  management: "Management",
  licensing: "Licensing",
};

export function ComparisonTableRow(props: FlexProps) {
  return <Flex p={1} {...props} />;
}

export const COMPARISON_TABLE_SIDE_CELL_WIDTH = 64;

export function ComparisonTableSideCell(props: BoxProps) {
  return <Box pr={1} py={1} pl={3} flex="0 0 auto" w={64} {...props} />;
}

export function ComparisonTableToolCell(props: BoxProps) {
  return <Box px={4} py={1} flex="1 0 auto" w={128} {...props} />;
}
