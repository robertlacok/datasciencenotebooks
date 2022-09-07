import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
const a = 5;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
