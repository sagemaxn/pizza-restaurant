import Link from 'next/link'

import { Container } from './Container'
import Cart from '../components/Cart'

import Router, { useRouter } from 'next/router';
// import nProgress from 'nprogress';

// Router.onRouteChangeStart = () => nProgress.start();
// Router.onRouteChangeComplete = () => nProgress.done();
// Router.onRouteChangeError = () => nProgress.done();

export function Navbar(){
  const router = useRouter();
  const user = false;

  function isActive(route) {
    // return true or false
    return route === router.pathname;
  }
  isActive('/')
  return(
  
  <Container
    flexDirection="row-reverse"
    position="fixed"
    top="0"
    width="100%"
    maxWidth="48rem"
    py={3}
  >
    <Link href="/menu">Menu</Link>
    <Cart/>
    {/* <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        chakra-ui
      </Button>
    </ChakraLink> */}

    {/* <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        View Repo
      </Button>
    </ChakraLink> */}
  </Container>
)
}