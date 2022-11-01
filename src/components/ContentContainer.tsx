import { Box, BoxProps } from "@chakra-ui/react";

export function ContentContainer({
  size = "wide",
  ...props
}: BoxProps & { size?: "narrow" | "wide" }) {
  return (
    <Box
      px={4}
      maxW={size === "wide" ? "container.lg" : "container.md"}
      w="100%"
      mx="auto"
      {...props}
    />
  );
}
