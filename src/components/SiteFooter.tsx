import { Box, BoxProps, Heading, HeadingProps } from "@chakra-ui/react";
import type { ComponentProps } from "react";
import { notebookTools } from "../notebookTools";
import { routes } from "../routes";
import { ContentContainer } from "./ContentContainer";
import { NextLink } from "./NextLink";

interface SiteFooterProps {
  size?: "wide" | "narrow";
}

export function SiteFooter({ size = "wide" }: SiteFooterProps) {
  return (
    <Box as="footer" py={16} bg="gray.50">
      <ContentContainer size={size}>
        <Heading as="h2" size="lg" color="gray.300" mb={12}>
          Data Science Notebooks
        </Heading>
        {/* This list is based on pages that are popular from our analytics, and search queries that are popular. */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="flex-end"
          m={-2}
        >
          <Section>
            <SectionHeading>Popular notebook tools</SectionHeading>
            <SectionLink
              href={routes.tool({ tool: notebookTools.deepnote.id })}
            >
              Deepnote
            </SectionLink>
            <SectionLink href={routes.tool({ tool: notebookTools.colab.id })}>
              Google Colab
            </SectionLink>
            <SectionLink href={routes.tool({ tool: notebookTools.hex.id })}>
              Hex
            </SectionLink>
            <SectionLink href={routes.tool({ tool: notebookTools.jupyter.id })}>
              Jupyter
            </SectionLink>
            <SectionLink
              href={routes.tool({ tool: notebookTools.datalore.id })}
            >
              Jetbrains Datalore
            </SectionLink>
            <SectionLink
              href={routes.tool({ tool: notebookTools.sagemaker.id })}
            >
              Sagemaker
            </SectionLink>
          </Section>
          <Section>
            <SectionHeading>Popular notebook comparisons</SectionHeading>
            <SectionLink
              href={routes.compareCanonical({
                tool1: notebookTools.deepnote.id,
                tool2: notebookTools.hex.id,
              })}
            >
              Deepnote vs Hex
            </SectionLink>
            <SectionLink
              href={routes.compareCanonical({
                tool1: notebookTools.vscode.id,
                tool2: notebookTools.colab.id,
              })}
            >
              Google Colab vs VS Code
            </SectionLink>
            <SectionLink
              href={routes.compareCanonical({
                tool1: notebookTools.deepnote.id,
                tool2: notebookTools.hex.id,
              })}
            >
              Deepnote vs Google Colab
            </SectionLink>
            <SectionLink
              href={routes.compareCanonical({
                tool1: notebookTools.jupyter.id,
                tool2: notebookTools.hex.id,
              })}
            >
              Jupyter vs Hex
            </SectionLink>
            <SectionLink
              href={routes.compareCanonical({
                tool1: notebookTools.colab.id,
                tool2: notebookTools.datalore.id,
              })}
            >
              Google Colab vs Jetbrains Datalore
            </SectionLink>
            <SectionLink
              href={routes.compareCanonical({
                tool1: notebookTools.jupyter.id,
                tool2: notebookTools.deepnote.id,
              })}
            >
              Jupyter vs Deepnote
            </SectionLink>
          </Section>
          <Section>
            <SectionHeading>Notebook tools by feature</SectionHeading>
            <SectionLink href={routes["jupyter-notebook-online"]()}>
              Jupyter notebooks online
            </SectionLink>
            <SectionLink href={routes["jupyter-version-control"]()}>
              Scheduling Jupyter notebooks
            </SectionLink>
            <SectionLink href={routes["jupyter-realtime-collaboration"]()}>
              Realtime collaboration in Jupyter notebooks
            </SectionLink>
            <SectionLink href={routes["jupyter-version-control"]()}>
              Version control in Jupyter notebooks
            </SectionLink>
            <SectionLink href={routes["jupyter-comments"]()}>
              Comments in Jupyter notebooks
            </SectionLink>
            <SectionLink href={routes["jupyter-comments"]()}>
              Open source notebooks
            </SectionLink>
          </Section>
        </Box>
      </ContentContainer>
    </Box>
  );
}

function Section(props: BoxProps) {
  return (
    <Box
      flex="1 0 auto"
      maxWidth="100%"
      w={{ base: "100%", lg: "0" }}
      p={2}
      color="gray.500"
      fontSize="sm"
      mb={4}
      {...props}
    />
  );
}

function SectionHeading(props: HeadingProps) {
  return <Heading as="h3" size="xs" mb={2} {...props} />;
}

function SectionLink(props: ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      display="block"
      mb={1}
      _hover={{ textDecoration: "underline" }}
      textOverflow="ellipsis"
      overflow="hidden"
      whiteSpace="nowrap"
      {...props}
    />
  );
}
