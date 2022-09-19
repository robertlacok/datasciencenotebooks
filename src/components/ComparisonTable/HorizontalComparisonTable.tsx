import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
  TableContainerProps,
} from "@chakra-ui/react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import { Fragment, ReactNode } from "react";
import type { NotebookTool } from "../../NotebookTool";
import { languageNameMap } from "./notebookFeatureDetails";
import NextLink from "next/link";
import { routes } from "../../routes";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { cssVar, HTMLChakraProps } from "@chakra-ui/system";

interface HorizontalComparisonTableProps {
  tools: NotebookTool[];
  toolsToCompare?: NotebookTool[];
}

const mainContainerGutter = cssVar("main-container-gutter");

const CELL_WIDTH = 48;

const scrollPushVars = {
  sideBarWidth: cssVar("sidebar-width"),
  containerWidth: cssVar("container-width"),
  containerPadding: cssVar("container-padding"),
};

export function HorizontalComparisonTable({
  tools,
  toolsToCompare = [],
}: HorizontalComparisonTableProps) {
  const toolsToCompareIds = new Set(toolsToCompare.map((tool) => tool.id));

  return (
    <Fragment>
      <ScrollSync>
        <Box
          sx={{
            [mainContainerGutter.variable]: `calc((100vw - var(--chakra-sizes-container-md) - var(--chakra-sizes-64)) / 2 - var(--chakra-space-1))`,
          }}
        >
          <ScrollSyncPane>
            <TableContainer
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
              whiteSpace="break-spaces"
              position="sticky"
              top={0}
              bg="white"
              zIndex={1}
            >
              <OffsetHorizontalScrollBox>
                <Table sx={{ tableLayout: "fixed" }}>
                  <Thead>
                    <Tr pt={8}>
                      <TableTh position="sticky" left={0} zIndex={2}>
                        Tool
                      </TableTh>
                      <TableTh position="sticky" top={0}>
                        Setup
                      </TableTh>
                      <TableTh>Jupyter compatibility</TableTh>
                      <TableTh>Programming languages</TableTh>
                      <TableTh>Data visualization</TableTh>
                      <TableTh>Collaborative editing</TableTh>
                      <TableTh>Pricing</TableTh>
                      <TableTh>License</TableTh>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {toolsToCompare.map((tool) => {
                      return (
                        <TableToolRow
                          key={tool.id}
                          isComparison
                          toolsToCompare={[]}
                          tool={tool}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </OffsetHorizontalScrollBox>
            </TableContainer>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <TableContainer
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
              whiteSpace="break-spaces"
            >
              <OffsetHorizontalScrollBox>
                <Table sx={{ tableLayout: "fixed" }}>
                  <Tbody>
                    {tools.map((tool) => {
                      if (toolsToCompareIds.has(tool.id)) {
                        return null;
                      }

                      return (
                        <TableToolRow
                          key={tool.id}
                          toolsToCompare={toolsToCompare}
                          tool={tool}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </OffsetHorizontalScrollBox>
              {/* extra-large container to force scrolling so we can test sticky scroll */}
              <Box h="xl" />
            </TableContainer>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <TableContainer position="sticky" bottom={0}>
              <OffsetHorizontalScrollBox>
                <Table sx={{ tableLayout: "fixed" }}>
                  <Tbody>
                    <Tr>
                      <Td w={CELL_WIDTH} />
                      <Td w={CELL_WIDTH} />
                      <Td w={CELL_WIDTH} />
                      <Td w={CELL_WIDTH} />
                      <Td w={CELL_WIDTH} />
                      <Td w={CELL_WIDTH} />
                      <Td w={CELL_WIDTH} />
                      <Td w={CELL_WIDTH} />
                    </Tr>
                  </Tbody>
                </Table>
              </OffsetHorizontalScrollBox>
            </TableContainer>
          </ScrollSyncPane>
        </Box>
      </ScrollSync>
    </Fragment>
  );
}

interface TableToolRowProps {
  tool: NotebookTool;
  toolsToCompare: NotebookTool[];
  isComparison?: boolean;
}

function TableToolRow({
  tool,
  toolsToCompare,
  isComparison,
}: TableToolRowProps) {
  const usableToolsToCompare = toolsToCompare.filter(
    (toolToCompare) => toolToCompare.id !== tool.id
  );

  return (
    <Tr
      sx={{
        "&.is-comparison td": {
          bg: "blue.50",
          borderColor: "blue.200",
          color: "blue.800",
        },
      }}
      className={isComparison ? "is-comparison" : ""}
    >
      <Td position="sticky" left={0} w={CELL_WIDTH} bg="white">
        <NextLink href={routes.toolAlternatives({ tool: tool.id })} passHref>
          <Link
            display="flex"
            alignItems="center"
            fontSize="lg"
            fontWeight="bold"
          >
            <Box w={6} h={6} mr={2}>
              <ArrowRightCircleIcon />
            </Box>
            {tool.name}
          </Link>
        </NextLink>
        {usableToolsToCompare.length > 0 ? (
          <Box fontSize="xs" mt={2}>
            Compare with{" "}
            <Box display="inline-block">
              {usableToolsToCompare.map((toolToCompare, index) => {
                const elements: ReactNode[] = [
                  <NextLink
                    key={toolToCompare.id}
                    href={routes.compareCanonical({
                      tool1: tool.id,
                      tool2: toolToCompare.id,
                    })}
                    passHref
                  >
                    <Link color="blue.600">{toolToCompare.name}</Link>
                  </NextLink>,
                ];

                if (index !== usableToolsToCompare.length - 1) {
                  elements.push(", ");
                }

                return elements;
              })}
            </Box>
          </Box>
        ) : null}
      </Td>
      <Td w={CELL_WIDTH}>{getSetupSummary(tool)}</Td>
      <Td w={CELL_WIDTH}>{getJupyterCompatibilitySummary(tool)}</Td>
      <Td w={CELL_WIDTH}>{getProgrammingLanguagesSummary(tool)}</Td>
      <Td w={CELL_WIDTH}>{getDataVisualizationSummary(tool)}</Td>
      <Td w={CELL_WIDTH}>{getCollaborationSummary(tool)}</Td>
      <Td w={CELL_WIDTH}>{getPricingSummary(tool)}</Td>
      <Td w={CELL_WIDTH}>{getLicenseSummary(tool)}</Td>
    </Tr>
  );
}

function TableTh(props: HTMLChakraProps<"th">) {
  return (
    <Th
      w={CELL_WIDTH}
      borderColor="gray.400"
      borderBottomWidth="medium"
      bg="white"
      verticalAlign="bottom"
      color="gray.700"
      {...props}
    />
  );
}

function OffsetHorizontalScrollBox(props: TableContainerProps) {
  return (
    <Box
      sx={{
        [scrollPushVars.containerPadding.variable]: "spacing.4",
        [scrollPushVars.containerWidth.variable]: "container.lg",
        [scrollPushVars.sideBarWidth.variable]: "64",
        paddingLeft: mainContainerGutter.reference,
      }}
      {...props}
    />
  );
}

function getSetupSummary(tool: NotebookTool) {
  if (!tool.features.setupManaged || !tool.features.setupSelfHost) {
    return null;
  }

  const canSelfHost = tool.features.setupSelfHost.some(
    (capability) => capability.type === "yes"
  );
  const isManaged = tool.features.setupManaged.some(
    (capability) => capability.type === "yes"
  );

  if (canSelfHost && isManaged) {
    return "Self-hosted or fully managed";
  }

  if (canSelfHost) {
    return "Self-hosted";
  }

  if (isManaged) {
    return "Fully managed";
  }

  return null;
}

function getJupyterCompatibilitySummary(tool: NotebookTool) {
  if (!tool.features.featuresJupyterCompatible) {
    return null;
  }

  const isJupyterCompatible = tool.features.featuresJupyterCompatible.some(
    (capability) => capability.type === "yes"
  );

  return isJupyterCompatible ? "Jupyter-compatible" : "None";
}

function getProgrammingLanguagesSummary(tool: NotebookTool) {
  if (!tool.features.featuresLanguages) {
    return null;
  }

  return tool.features.featuresLanguages
    .map((capability) =>
      capability.type === "jupyterLanguages"
        ? "Jupyter"
        : languageNameMap[capability.language]
    )
    .join(", ");
}

function getDataVisualizationSummary(tool: NotebookTool) {
  if (!tool.features.featuresDataVisualization) {
    return null;
  }

  const canVisualizeWithCode = tool.features.featuresDataVisualization.some(
    (capability) =>
      capability.type === "js" || capability.type === "jupyterVisualization"
  );
  const canVisualizeWithUi = tool.features.featuresDataVisualization.some(
    (capability) => capability.type === "ui"
  );

  if (canVisualizeWithCode && canVisualizeWithUi) {
    return "Visualize with code or UI";
  }

  if (canVisualizeWithCode) {
    return "Visualize with code";
  }

  if (canVisualizeWithUi) {
    return "Visualization UI builder";
  }

  return null;
}

function getCollaborationSummary(tool: NotebookTool) {
  if (
    !tool.features.managementCollaborativeEditing ||
    !tool.features.managementComments
  ) {
    return null;
  }

  const isFilebasedCollaboration =
    tool.features.managementCollaborativeEditing.some(
      (capability) => capability.type === "fileBased"
    );

  const isAsyncCollaboration =
    tool.features.managementCollaborativeEditing.some(
      (capability) => capability.type === "asynchronous"
    );

  const isRealtimeCollaboration =
    tool.features.managementCollaborativeEditing.some(
      (capability) => capability.type === "realtime"
    );

  if (isRealtimeCollaboration) {
    return "Realtime collaboration";
  }

  if (isFilebasedCollaboration || isAsyncCollaboration) {
    return "File-based or asynchronous collaboration";
  }

  return "Limited collaboration";
}

function getPricingSummary(tool: NotebookTool) {
  if (!tool.features.licensingPrice) {
    return null;
  }

  const isFree = tool.features.licensingPrice.some(
    (capability) => capability.type === "free" || capability.type === "freeTier"
  );

  const isPaid = tool.features.licensingPrice.some(
    (capability) =>
      capability.type === "payForCompute" || capability.type === "payPerUser"
  );

  const hasTrial = tool.features.licensingPrice.some(
    (capability) => capability.type === "freeTrial"
  );

  if (isFree && isPaid) {
    return "Free and paid options";
  }

  if (isFree) {
    return "Free";
  }

  if (isPaid && hasTrial) {
    return "Paid only (with trial)";
  }

  if (isPaid) {
    return "Paid only";
  }

  return null;
}

function getLicenseSummary(tool: NotebookTool) {
  if (!tool.features.licensingLicense) {
    return null;
  }

  const isOss = tool.features.licensingLicense.some(
    (capability) => capability.type === "openSource"
  );

  const isProprietary = tool.features.licensingLicense.some(
    (capability) => capability.type === "proprietary"
  );

  if (isOss && isProprietary) {
    return "Open source and proprietary components";
  }

  if (isOss) {
    return "Open source";
  }

  if (isProprietary) {
    return "Proprietary";
  }

  return null;
}
