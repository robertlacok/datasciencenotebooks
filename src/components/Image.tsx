import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import type { ComponentProps } from "react";

const ChakraImage = chakra(Image);

export function ResponsiveImage(props: ComponentProps<typeof ChakraImage>) {
  return <ChakraImage width="100%" height="auto" {...props} />;
}
