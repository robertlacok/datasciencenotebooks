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
} from "@chakra-ui/react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import { Fragment, ReactNode } from "react";
import type { NotebookTool } from "../../NotebookTool";
import { languageNameMap } from "./notebookFeatureDetails";
import NextLink from "next/link";
import { routes } from "../../routes";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface HorizontalComparisonTableProps {
  tools: NotebookTool[];
  toolsToCompare?: NotebookTool[];
}

const CELL_WIDTH = 48;

export function HorizontalComparisonTable({
  tools,
  toolsToCompare = [],
}: HorizontalComparisonTableProps) {
  const toolsToCompareIds = new Set(toolsToCompare.map((tool) => tool.id));

  return (
    <Fragment>
      <ScrollSync>
        <div>
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
              <Box>
                <Table sx={{ tableLayout: "fixed" }}>
                  <Thead>
                    <Tr pt={8}>
                      <Th
                        position="sticky"
                        left={0}
                        bg="white"
                        w={CELL_WIDTH}
                        zIndex={2}
                      />
                      <Th position="sticky" top={0} w={CELL_WIDTH}>
                        Setup
                      </Th>
                      <Th w={CELL_WIDTH}>Jupyter compatibility</Th>
                      <Th w={CELL_WIDTH}>Programming languages</Th>
                      <Th w={CELL_WIDTH}>Data visualization</Th>
                      <Th w={CELL_WIDTH}>Collaborative editing</Th>
                      <Th w={CELL_WIDTH}>Pricing</Th>
                      <Th w={CELL_WIDTH}>License</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {toolsToCompare.map((tool) => {
                      return (
                        <NotebookToolTableRow
                          key={tool.id}
                          toolsToCompare={[]}
                          tool={tool}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </Box>
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
              <Table sx={{ tableLayout: "fixed" }}>
                <Tbody>
                  {tools.map((tool) => {
                    if (toolsToCompareIds.has(tool.id)) {
                      return null;
                    }

                    return (
                      <NotebookToolTableRow
                        key={tool.id}
                        toolsToCompare={toolsToCompare}
                        tool={tool}
                      />
                    );
                  })}
                </Tbody>
              </Table>
              {/* extra-large container to force scrolling so we can test sticky scroll */}
              <Box h="xl" />
            </TableContainer>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <TableContainer position="sticky" bottom={0}>
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
            </TableContainer>
          </ScrollSyncPane>
        </div>
      </ScrollSync>
    </Fragment>
  );
}

interface NotebookToolTableRowProps {
  tool: NotebookTool;
  toolsToCompare: NotebookTool[];
}

function NotebookToolTableRow({
  tool,
  toolsToCompare,
}: NotebookToolTableRowProps) {
  const usableToolsToCompare = toolsToCompare.filter(
    (toolToCompare) => toolToCompare.id !== tool.id
  );

  return (
    <Tr>
      <Td position="sticky" left={0} w={CELL_WIDTH} bg="white">
        <NextLink href={routes.tool({ tool: tool.id })} passHref>
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
            Compare with
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
