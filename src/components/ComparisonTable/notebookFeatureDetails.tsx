import {
  Box,
  Flex,
  FlexProps,
  Link,
  LinkProps,
  Tooltip,
} from "@chakra-ui/react";
import {
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  CircleStackIcon,
  ClipboardDocumentIcon,
  CodeBracketSquareIcon,
  ChartBarIcon,
  BoltIcon,
  BoltSlashIcon,
  UsersIcon,
  UserGroupIcon,
  FolderIcon,
  ChatBubbleOvalLeftIcon,
  QueueListIcon,
  ListBulletIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowRightCircleIcon,
  XCircleIcon,
  ArchiveBoxIcon,
  ExclamationTriangleIcon,
  ArrowPathRoundedSquareIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  CalendarDaysIcon,
  CalendarIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import NextLink from "next/link";
import type { NotebookFeatures, NotebookTool } from "../../NotebookTool";
import { routes } from "../../routes";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

interface NotebookFeatureDetails<T> {
  title: ReactNode;
  getFeatureItem: (feature: T) => ReactNode;
  getHelpIcon?: (tool: NotebookTool) => ReactNode;
}

export function renderFeatureItem<TName extends keyof NotebookFeatures>(
  name: TName,
  capability: NotebookFeatures[TName]
) {
  return (
    notebookFeatureDetails as {
      [K in keyof NotebookFeatures]: NotebookFeatureDetails<
        NotebookFeatures[keyof NotebookFeatures]
      >;
    }
  )[name].getFeatureItem(capability);
}

export const notebookFeatureDetails: {
  [K in keyof NotebookFeatures]: NotebookFeatureDetails<NotebookFeatures[K]>;
} = {
  setupManaged: {
    title: "Is it managed?",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "yes":
          return (
            <NotebookFeatureListItem icon={CheckCircleIcon}>
              Fully managed (setup in{" "}
              {feature.setupTime === "hours" ? "hours" : "minutes"})
            </NotebookFeatureListItem>
          );
        case "no":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              No, you must host it yourself
            </NotebookFeatureListItem>
          );
      }
    },
    getHelpIcon: (tool) => {
      const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
        (capability) => capability.type === "yes"
      );

      if (isJupyterCompatible) {
        return (
          <FeatureInfoIcon
            title="More about managed Jupyter notebooks"
            href={routes["jupyter-notebook-online"]()}
          />
        );
      }

      return null;
    },
  },
  setupSelfHost: {
    title: "Can you self-host?",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "yes":
          return (
            <NotebookFeatureListItem icon={CheckCircleIcon}>
              You can self-host (setup in{" "}
              {feature.setupTime === "hours" ? "hours" : "minutes"})
            </NotebookFeatureListItem>
          );
        case "no":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              No, you must use a managed offering
            </NotebookFeatureListItem>
          );
      }
    },
  },

  featuresDataSources: {
    title: "What kind of data sources can you connect to?",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "jupyterDataSources":
          return (
            <NotebookFeatureListItem icon={ClipboardDocumentIcon}>
              Connect with Jupyter libraries (e.g. SQLAlchemy, psycopg2)
            </NotebookFeatureListItem>
          );
        case "js":
          return (
            <NotebookFeatureListItem icon={CodeBracketSquareIcon}>
              Connect with JS libraries (e.g. REST APIs)
            </NotebookFeatureListItem>
          );
        case "dataWarehouses":
          return (
            <NotebookFeatureListItem icon={BuildingOfficeIcon}>
              Connect to data warehouses ({feature.examples})
            </NotebookFeatureListItem>
          );
        case "databases":
          return (
            <NotebookFeatureListItem icon={CircleStackIcon}>
              Connect to databases ({feature.examples})
            </NotebookFeatureListItem>
          );
        case "generic":
          return (
            <NotebookFeatureListItem icon={CircleStackIcon}>
              {feature.text}
            </NotebookFeatureListItem>
          );
        case "fileStorage":
          return (
            <NotebookFeatureListItem icon={FolderIcon}>
              Provided file storage
            </NotebookFeatureListItem>
          );
      }
    },
  },
  featuresJupyterCompatible: {
    title: "Is it Jupyter compatible?",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "no":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              Not Jupyter-compatible
            </NotebookFeatureListItem>
          );
        case "yes":
          return (
            <NotebookFeatureListItem icon={ClipboardDocumentCheckIcon}>
              Jupyter-compatible
            </NotebookFeatureListItem>
          );
      }
    },
  },
  featuresDataVisualization: {
    title: "What kind of data visualization can you do?",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "js":
          return (
            <NotebookFeatureListItem icon={CodeBracketSquareIcon}>
              JS data visualization (e.g. D3, Vega)
            </NotebookFeatureListItem>
          );
        case "julia":
          return (
            <NotebookFeatureListItem icon={CodeBracketSquareIcon}>
              Julia data visualization
            </NotebookFeatureListItem>
          );
        case "jupyterVisualization":
          return (
            <NotebookFeatureListItem icon={ClipboardDocumentIcon}>
              Jupyter data visualization (e.g. Matplotlib, Altair, Plotly)
            </NotebookFeatureListItem>
          );
        case "ui":
          return (
            <NotebookFeatureListItem icon={ChartBarIcon}>
              UI for building charts
            </NotebookFeatureListItem>
          );
      }
    },
  },
  featuresLanguages: {
    title: "Programming languages",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "jupyterLanguages":
          return (
            <NotebookFeatureListItem icon={ClipboardDocumentCheckIcon}>
              Jupyter languages (e.g. Python, R)
            </NotebookFeatureListItem>
          );
        case "language":
          return (
            <NotebookFeatureListItem icon={CodeBracketSquareIcon}>
              {languageNameMap[feature.language]}
            </NotebookFeatureListItem>
          );
      }
    },
  },
  featuresReactivity: {
    title: "Reactivity",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "full":
          return (
            <NotebookFeatureListItem icon={BoltIcon}>
              Full, realtime reactivity
            </NotebookFeatureListItem>
          );
        case "some":
          return (
            <NotebookFeatureListItem icon={BoltSlashIcon}>
              Reactivity with caveats
            </NotebookFeatureListItem>
          );
        case "none":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              No reactivity, you decide the execution order
            </NotebookFeatureListItem>
          );
      }
    },
  },
  featuresScheduling: {
    title: "Notebook scheduling",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "none":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              No notebook scheduling
            </NotebookFeatureListItem>
          );
        case "thirdParty":
          return (
            <NotebookFeatureListItem icon={WrenchIcon}>
              Notebook scheduling with additional tools
            </NotebookFeatureListItem>
          );
        case "builtIn":
          return (
            <NotebookFeatureListItem icon={CalendarDaysIcon}>
              Notebook scheduling is built in
            </NotebookFeatureListItem>
          );
        case "limited":
          return (
            <NotebookFeatureListItem icon={CalendarIcon}>
              Limited scheduling capabilities
            </NotebookFeatureListItem>
          );
      }
    },
    getHelpIcon: (tool) => {
      const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
        (capability) => capability.type === "yes"
      );

      if (isJupyterCompatible) {
        return (
          <FeatureInfoIcon
            title="More about scheduling Jupyter notebooks"
            href={routes["jupyter-schedule-notebooks"]()}
          />
        );
      }

      return null;
    },
  },

  managementCollaborativeEditing: {
    title: "Collaborative editing",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "asynchronous":
          return (
            <NotebookFeatureListItem icon={UsersIcon}>
              Multiple editors, one at a time (asynchronous)
            </NotebookFeatureListItem>
          );
        case "realtime":
          return (
            <NotebookFeatureListItem icon={UserGroupIcon}>
              Multiple editors at the same time
            </NotebookFeatureListItem>
          );
        case "jupyterRealtime":
          return (
            <NotebookFeatureListItem icon={ClipboardDocumentIcon}>
              Experimental JupyterLab support
            </NotebookFeatureListItem>
          );
        case "fileBased":
          return (
            <NotebookFeatureListItem icon={FolderIcon}>
              File-based (use Git)
            </NotebookFeatureListItem>
          );
        case "none":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              No support for collaborative editors
            </NotebookFeatureListItem>
          );
      }
    },
  },
  managementComments: {
    title: "Comments",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "fileBased":
          return (
            <NotebookFeatureListItem icon={FolderIcon}>
              File-based (use GitHub)
            </NotebookFeatureListItem>
          );
        case "inNotebook":
          return (
            <NotebookFeatureListItem icon={ChatBubbleOvalLeftIcon}>
              Comment on items within a notebook
            </NotebookFeatureListItem>
          );
        case "outOfNotebook":
          return (
            <NotebookFeatureListItem icon={ChatBubbleOvalLeftIcon}>
              Comment on a notebook as a whole
            </NotebookFeatureListItem>
          );
        case "none":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              No support for comments
            </NotebookFeatureListItem>
          );
      }
    },
  },
  managementNotebookOrganization: {
    title: "Notebook organization",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "fileBased":
          return (
            <NotebookFeatureListItem icon={FolderIcon}>
              File-based
            </NotebookFeatureListItem>
          );
        case "list":
          return (
            <NotebookFeatureListItem icon={ListBulletIcon}>
              View notebooks in a list
            </NotebookFeatureListItem>
          );
        case "wiki":
          return (
            <NotebookFeatureListItem icon={QueueListIcon}>
              View notebooks in a tree, like a wiki
            </NotebookFeatureListItem>
          );
      }
    },
  },
  managementReproducability: {
    title: "Reproducability",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "containers":
          return (
            <NotebookFeatureListItem icon={ArchiveBoxIcon}>
              Run notebooks in containers
            </NotebookFeatureListItem>
          );
        case "effortful":
          return (
            <NotebookFeatureListItem icon={ExclamationTriangleIcon}>
              With effort, you can make reproducible environments
            </NotebookFeatureListItem>
          );
        case "environment":
          return (
            <NotebookFeatureListItem icon={ArrowPathRoundedSquareIcon}>
              Environments are reproducible by default
            </NotebookFeatureListItem>
          );
        case "execution":
          return (
            <NotebookFeatureListItem icon={ArrowPathRoundedSquareIcon}>
              Execution is reproducible by default
            </NotebookFeatureListItem>
          );
        case "none":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              There is no support for reproducability
            </NotebookFeatureListItem>
          );
      }
    },
  },
  managementVersioning: {
    title: "Version history",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "builtIn":
          return (
            <NotebookFeatureListItem icon={ClockIcon}>
              Version history is built in
            </NotebookFeatureListItem>
          );
        case "fileBased":
          return (
            <NotebookFeatureListItem icon={FolderIcon}>
              File-based (use Git)
            </NotebookFeatureListItem>
          );
        case "none":
          return (
            <NotebookFeatureListItem icon={XCircleIcon}>
              No version history
            </NotebookFeatureListItem>
          );
      }
    },

    getHelpIcon: (tool) => {
      const isJupyterCompatible = tool.features.featuresJupyterCompatible?.some(
        (capability) => capability.type === "yes"
      );

      if (isJupyterCompatible) {
        return (
          <FeatureInfoIcon
            title="More about version control in Jupyter notebooks"
            href={routes["jupyter-version-control"]()}
          />
        );
      }

      return null;
    },
  },

  licensingLicense: {
    title: "License",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "openSource":
          return (
            <NotebookFeatureListItem icon={BuildingLibraryIcon}>
              Open source ({feature.ossLicense})
            </NotebookFeatureListItem>
          );
        case "proprietary":
          return (
            <NotebookFeatureListItem icon={BuildingOfficeIcon}>
              Proprietary
            </NotebookFeatureListItem>
          );
      }
    },
  },
  licensingPrice: {
    title: "Price",
    getFeatureItem: (feature) => {
      switch (feature.type) {
        case "free":
          return (
            <NotebookFeatureListItem icon={CheckCircleIcon}>
              Free
            </NotebookFeatureListItem>
          );
        case "freeTier":
          return (
            <NotebookFeatureListItem icon={CheckCircleIcon}>
              Free tier
            </NotebookFeatureListItem>
          );
        case "freeTrial":
          return (
            <NotebookFeatureListItem icon={CurrencyDollarIcon}>
              Free trial{feature.length ? ` (${feature.length})` : null}
            </NotebookFeatureListItem>
          );
        case "payForCompute":
          return (
            <NotebookFeatureListItem icon={CurrencyDollarIcon}>
              Pay for compute
            </NotebookFeatureListItem>
          );
        case "payPerUser":
          return (
            <NotebookFeatureListItem icon={CurrencyDollarIcon}>
              Pay-per-user
            </NotebookFeatureListItem>
          );
      }
    },
  },
};

export const languageNameMap = {
  js: "JS",
  python: "Python",
  sql: "SQL",
  julia: "Julia",
  scala: "Scala",
  r: "R",
  spark: "Spark",
};
interface NotebookFeatureListItemProps extends FlexProps {
  icon?: ComponentType<ComponentProps<"svg">>;
  children?: ReactNode;
}

export function NotebookFeatureListItem({
  icon: IconComponent = ArrowRightCircleIcon,
  children,
  ...props
}: NotebookFeatureListItemProps) {
  return (
    <Flex
      lineHeight="tall"
      align="start"
      mb={2}
      direction={{
        base: "column",
        sm: "row",
      }}
      {...props}
    >
      <Flex
        marginTop="3px"
        align="center"
        justify="center"
        w="20px"
        h="20px"
        flex="0 0 auto"
        mr={{
          base: 0,
          sm: 2,
        }}
        mb={{
          base: 1,
          sm: 0,
        }}
        color="gray.500"
      >
        <IconComponent width={20} height={20} />
      </Flex>
      <Box color="gray.800">{children}</Box>
    </Flex>
  );
}

function FeatureInfoIcon({
  href,
  title,
  ...props
}: Omit<LinkProps, "href" | "title" | "children"> & {
  href: string;
  title: string;
}) {
  return (
    <Tooltip
      label={title}
      size="sm"
      bgColor="gray.50"
      borderWidth="1px"
      borderColor="gray.300"
      borderStyle="solid"
      color="gray.700"
      boxShadow="xl"
      borderRadius="xl"
      px={4}
      py={2}
    >
      <Box
        w={5}
        h={5}
        display="inline-block"
        verticalAlign="middle"
        position="relative"
        top={"-1px"}
        color="gray.400"
      >
        <NextLink href={href} passHref>
          <Link w={"100%"} h={"100%"} display="block" title={title} {...props}>
            <InformationCircleIcon />
          </Link>
        </NextLink>
      </Box>
    </Tooltip>
  );
}

export function UnknownFeatureListItem() {
  return (
    <NotebookFeatureListItem icon={QuestionMarkCircleIcon} opacity={0.7}>
      Unknown
    </NotebookFeatureListItem>
  );
}

export const categoryNames = {
  setup: "Setup",
  features: "Features",
  management: "Management",
  licensing: "Licensing",
};
