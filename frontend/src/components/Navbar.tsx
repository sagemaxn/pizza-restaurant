import Link from 'next/link'
import { Flex, Stack, Button } from '@chakra-ui/react'


import PreviewCart from './PreviewCart'

export function Navbar(){
  return(
  
  <Flex
    flexDirection="row"
    justify={'space-between'}
    top="0"
    width="100%"
    minH={'60px'}
    py={{ base: 2 }}
    px={{ base: 4 }}
    borderBottom={1}
    borderStyle={'solid'}
    align={'center'}   
  >
    <Stack
          flex={{ base: 1, md: 0 }}
          direction={'row'}
          spacing={6}>
            <Link href="/">           
            Joe's Pizza        
          </Link>
          <Link href="/menu">Menu</Link>
        </Stack>
    <PreviewCart/>
   
  </Flex>
)
}