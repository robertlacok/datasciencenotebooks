import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import { HorizontalComparisonTable } from "../components/ComparisonTable";
import { Seo } from "../components/Seo";
import { SidebarLayout } from "../components/SidebarLayout";
import { notebookTools } from "../notebookTools";
import NextLink from "next/link";
import { routes } from "../routes";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import type { NotebookTool } from "../NotebookTool";

function Home() {
  return (
    <Fragment>
      <Seo
        title="Data science notebooks"
        description="Data science gets done in notebooks. Compare different notebook tools at datasciencenotebook.org."
      />
      <SidebarLayout>
        <Box w="container.md" pt={12} px={4} mx="auto">
          <Box mb={16}>
            <Heading size="xl" mb={4} color="gray.800">
              Explore notebook tools
            </Heading>
          </Box>
          <Box
            columnGap="4"
            sx={{
              columnCount: 2,
            }}
          >
            {Object.values(notebookTools).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </Box>
        </Box>
        <Box w="container.md" pt={12} px={4} mx="auto">
          <Heading as="h2" size="lg" color="gray.800">
            Compare tool features
          </Heading>
        </Box>
        <HorizontalComparisonTable tools={Object.values(notebookTools)} />
      </SidebarLayout>
    </Fragment>
  );
}

interface ToolCardProps {
  tool: NotebookTool;
}

function ToolCard({ tool }: ToolCardProps) {
  return (
    <LinkBox
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
            src={tool.screenshot}
            layout="responsive"
            alt={`A screenshot of ${tool.name}`}
          />
        </Box>
      ) : null}
      <Heading as="h3" size="md" mb={2} color="gray.800">
        {tool.name}
      </Heading>
      <Text color="gray.600" mb={4}>
        {tool.description}
      </Text>
      <Flex justifyContent="flex-start">
        <ButtonGroup>
          {tool.websiteUrl ? (
            <NextLink href={tool.websiteUrl} passHref>
              <Button
                as="a"
                rel="noopener noreferrer"
                rightIcon={
                  <Box w={5}>
                    <ArrowTopRightOnSquareIcon />
                  </Box>
                }
              >
                Website
              </Button>
            </NextLink>
          ) : null}
          <NextLink href={routes.toolAlternatives({ tool: tool.id })} passHref>
            <Button as="a" variant="ghost">
              Alternatives
            </Button>
          </NextLink>
        </ButtonGroup>
      </Flex>
    </LinkBox>
  );
}

export default Home;
