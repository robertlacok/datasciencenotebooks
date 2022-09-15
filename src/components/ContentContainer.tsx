import { Box, BoxProps } from "@chakra-ui/react";

export function ContentContainer(props: BoxProps) {
  return <Box px={4} maxW="container.md" w="100%" mx="auto" {...props} />;
}
