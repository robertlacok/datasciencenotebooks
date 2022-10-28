import { Box, Heading, Text, chakra, Button } from "@chakra-ui/react";
import type { ComponentProps, ReactNode } from "react";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { ResponsiveImage } from "./Image";
import { NextLink } from "./NextLink";

interface ProseImageProps
  extends Pick<ComponentProps<typeof ResponsiveImage>, "src" | "alt"> {
  caption?: ReactNode;
}

export function ProseImage({ src, alt, caption }: ProseImageProps) {
  return (
    <Box mb={4}>
      <Box
        borderRadius="lg"
        borderColor="gray.200"
        borderWidth="1px"
        borderStyle="solid"
        overflow="hidden"
      >
        <ResponsiveImage
          src={src}
          alt={alt}
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </Box>
      {caption ? (
        <Text mt={2} fontSize="sm" color="gray.500" textAlign="center">
          {caption}
        </Text>
      ) : null}
    </Box>
  );
}

export function H1(props: ComponentProps<"h1">) {
  return <Heading as="h1" size="xl" mb={8} color="gray.800" {...props} />;
}

export function H2(props: ComponentProps<"h2">) {
  return (
    <Heading as="h2" size="lg" mb={6} mt={12} color="gray.800" {...props} />
  );
}

export function H3(props: ComponentProps<"h3">) {
  return (
    <Heading as="h3" size="sm" mb={6} mt={12} color="gray.800" {...props} />
  );
}

export function P(props: ComponentProps<typeof Text>) {
  return (
    <Text
      as="p"
      size="md"
      lineHeight="tall"
      mb={6}
      mt={0}
      color="gray.600"
      {...props}
    />
  );
}

export function A(props: ComponentProps<typeof NextLink>) {
  return <NextLink color="blue.600" textDecoration="underline" {...props} />;
}

export function Ul(props: ComponentProps<"ul">) {
  return (
    <chakra.ul
      fontSize="md"
      color="gray.600"
      lineHeight="tall"
      mb={6}
      pl={6}
      listStyleType="disc"
      {...props}
    />
  );
}

export function Li(props: ComponentProps<"li">) {
  return (
    <chakra.li sx={{ ":not(:last-child)": { mb: 2 } }} pl={2} {...props} />
  );
}

export function Ol(props: ComponentProps<"ol">) {
  return (
    <chakra.ol
      fontSize="md"
      color="gray.600"
      lineHeight="tall"
      mb={6}
      pl={6}
      {...props}
    />
  );
}

export function SkipButton({
  children = "Show me the tools",
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      as="a"
      href="#tool-section"
      rightIcon={
        <Box w={5}>
          <ArrowDownIcon />
        </Box>
      }
      {...props}
    >
      {children}
    </Button>
  );
}

export function Code(props: ComponentProps<"code">) {
  return (
    <chakra.code
      display="inline-block"
      borderRadius="md"
      px={2}
      bgColor="gray.100"
      color="teal.700"
      fontFamily="mono"
      {...props}
    />
  );
}
