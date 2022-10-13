import { Box, Heading, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import { HorizontalComparisonTable } from "../components/ComparisonTable";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookToolsInCanonicalOrder } from "../notebookTools";
import type { NotebookTool } from "../NotebookTool";
import { ContentContainer } from "../components/ContentContainer";
import { ToolLinkList } from "../components/ToolLinkList";
import NextLink from "next/link";
import { routes } from "../routes";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <Fragment>
      <Seo
        title="Data science notebooks"
        description="Data science gets done in notebooks. Compare different notebook tools at datasciencenotebook.org."
      />
      <SidebarLayout>
        <ContentContainer>
          <Box mb={16}>
            <Heading size="2xl" mb={4} color="gray.800">
              Explore notebook tools
            </Heading>
          </Box>
          <Box
            columnGap="4"
            sx={{
              columnCount: {
                base: 1,
                sm: 2,
              },
            }}
            mb={12}
          >
            {notebookToolsInCanonicalOrder.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </Box>
        </ContentContainer>
        <ContentContainer>
          <Heading as="h2" size="lg" color="gray.800">
            Compare tool features
          </Heading>
        </ContentContainer>
        <HorizontalComparisonTable tools={notebookToolsInCanonicalOrder} />
      </SidebarLayout>
    </Fragment>
  );
}

interface ToolCardProps {
  tool: NotebookTool;
}

function ToolCard({ tool }: ToolCardProps) {
  return (
    <Box
      p={4}
      mb={4}
      borderRadius="lg"
      borderColor="gray.200"
      borderWidth="1px"
      borderStyle="solid"
      sx={{
        breakInside: "avoid",
      }}
    >
      {tool.screenshot ? (
        <Box mb={4} borderRadius="md" overflow="hidden">
          <Image
            sizes="(max-width: 1000px) 100vw, 1000px"
            src={tool.screenshot}
            layout="responsive"
            alt={`A screenshot of ${tool.name}`}
          />
        </Box>
      ) : null}
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
  );
}

export default Home;
