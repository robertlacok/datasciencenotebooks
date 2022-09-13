import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Fragment } from "react";
import type { NotebookTool } from "../../NotebookTool";
import { languageNameMap } from "./notebookFeatureDetails";

interface HorizontalComparisonTableProps {
  tools: NotebookTool[];
}

const CELL_WIDTH = 48;

export function HorizontalComparisonTable({
  tools,
}: HorizontalComparisonTableProps) {
  return (
    <Fragment>
      <TableContainer whiteSpace="break-spaces">
        <Table sx={{ tableLayout: "fixed" }}>
          <Thead>
            <Tr pt={8}>
              <Th position="sticky" left={0} bg="white" w={CELL_WIDTH} />
              <Th w={CELL_WIDTH}>Setup</Th>
              <Th w={CELL_WIDTH}>Jupyter compatibility</Th>
              <Th w={CELL_WIDTH}>Programming languages</Th>
              <Th w={CELL_WIDTH}>Data visualization</Th>
              <Th w={CELL_WIDTH}>Collaborative editing</Th>
              <Th w={CELL_WIDTH}>Pricing</Th>
              <Th w={CELL_WIDTH}>License</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tools.map((tool) => {
              return (
                <Tr key={tool.id}>
                  <Th position="sticky" left={0} w={CELL_WIDTH} bg="white">
                    {tool.name}
                  </Th>
                  <Td w={CELL_WIDTH}>{getSetupSummary(tool)}</Td>
                  <Td w={CELL_WIDTH}>{getJupyterCompatibilitySummary(tool)}</Td>
                  <Td w={CELL_WIDTH}>{getProgrammingLanguagesSummary(tool)}</Td>
                  <Td w={CELL_WIDTH}>{getDataVisualizationSummary(tool)}</Td>
                  <Td w={CELL_WIDTH}>{getCollaborationSummary(tool)}</Td>
                  <Td w={CELL_WIDTH}>{getPricingSummary(tool)}</Td>
                  <Td w={CELL_WIDTH}>{getLicenseSummary(tool)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Fragment>
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
