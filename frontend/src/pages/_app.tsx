import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export async function getStaticProps({ Component, ctx}){
  let pageProps = {}

  if (Component.getStaticProps) {
    pageProps = await Component.getStaticProps(ctx);
  }

  return { pageProps };

}

export default MyApp
