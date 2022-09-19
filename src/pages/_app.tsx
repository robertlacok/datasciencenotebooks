import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import faviconSvg from "../images/favicon.svg";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="favicon" href="/favicon.ico" sizes="any" />
        <link rel="favicon" href={faviconSvg} type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
