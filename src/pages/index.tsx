import { Box, Heading, Text, chakra, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import { HorizontalComparisonTable } from "../components/ComparisonTable";
import { Seo } from "../components/Seo";
import { SidebarLayout, SIDEBAR_BREAKPOINT } from "../components/SidebarLayout";
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
        <ContentContainer mb={8}>
          <Box mb={8} display={{ base: "block", [SIDEBAR_BREAKPOINT]: "none" }}>
            <Heading size="2xl" as="h1" color="gray.800">
              Data science notebooks
            </Heading>
          </Box>
          {/* this would be better as a masonry layout, but */}
          {/* there's still no way to do this in a way that doesn't require JS */}
          <Flex wrap="wrap" mx={-2}>
            {notebookToolsInCanonicalOrder.map((tool, index) => (
              <Flex
                key={tool.id}
                flex="1 1 auto"
                direction="column"
                w={{ base: "100%", sm: "50%" }}
                p={2}
              >
                <ToolCard tool={tool} isAboveTheFold={index <= 3} />
              </Flex>
            ))}
          </Flex>
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
  isAboveTheFold: boolean;
}

function ToolCard({ tool, isAboveTheFold }: ToolCardProps) {
  return (
    <Box
      flex="1 1 auto"
      p={4}
      borderRadius="lg"
      borderColor="gray.200"
      borderWidth="1px"
      borderStyle="solid"
    >
      {tool.screenshot ? (
        <Box mb={4} borderRadius="md" overflow="hidden">
          <Image
            sizes="(max-width: 500px) 100vw, 500px"
            src={tool.screenshot}
            layout="responsive"
            alt={`A screenshot of ${tool.name}`}
            priority={isAboveTheFold}
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
