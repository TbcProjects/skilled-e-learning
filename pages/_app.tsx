/* eslint-disable require-jsdoc */
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import SkTheme from "../theme";
import "@fontsource/plus-jakarta-sans";

import Layout from "../components/templates/layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={SkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
