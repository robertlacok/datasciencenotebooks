import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import faviconSvg from "../images/favicon.svg";
import Head from "next/head";
import Script from "next/script";
import { GTM_ID } from "../config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="favicon" href="/favicon.ico" sizes="any" />
        <link rel="favicon" href={faviconSvg.src} type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
      {GTM_ID ? (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
        </Script>
      ) : null}
    </ChakraProvider>
  );
}

export default MyApp;
