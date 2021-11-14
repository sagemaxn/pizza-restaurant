import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../context/CartContext";

import theme from "../theme";
import { AppProps } from "next/app";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ChakraProvider>
  );
}

export async function getStaticProps({ Component, ctx }) {
  let pageProps = {};

  if (Component.getStaticProps) {
    pageProps = await Component.getStaticProps(ctx);
  }

  return { pageProps };
}

export default MyApp;
