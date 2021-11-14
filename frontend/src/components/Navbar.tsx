import Link from 'next/link'
import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'


import Cart from '../components/Cart'

import Router, { useRouter } from 'next/router';

export function Navbar(){
  const router = useRouter();
  const user = false;

  function isActive(route) {
    // return true or false
    return route === router.pathname;
  }
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return(
  
  <Flex
    flexDirection="row-reverse"
 
    top="0"
    width="100%"
    maxWidth="48rem"
    py={3}
    
  >
    <Link href="/menu">Menu</Link>
    <Cart/>
   
  </Flex>
)
}