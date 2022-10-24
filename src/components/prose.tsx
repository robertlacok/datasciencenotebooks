import { Box, Heading, Link, Text, chakra, Button } from "@chakra-ui/react";
import type { ComponentProps, ReactNode } from "react";
import Image, { type ImageProps } from "next/image";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

interface ProseImageProps extends Pick<ImageProps, "src" | "alt"> {
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
        <Image
          sizes="(max-width: 800px) 100vw, 800px"
          src={src}
          alt={alt}
          layout="responsive"
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

export function P(props: ComponentProps<"p">) {
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

export function A(props: ComponentProps<"a">) {
  return <Link as="a" color="blue.600" textDecoration="underline" {...props} />;
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
  return <chakra.ol mb={6} pl={6} {...props} />;
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
