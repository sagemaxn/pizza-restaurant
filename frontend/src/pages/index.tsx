import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link'

export default function Home() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 10 }}
        direction={{ base: 'column' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            Joe's Pizza
          </Heading>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
              <Link href="/menu">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}>
              Our Menu
            </Button>
            </Link>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}>
              something
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={{base: '100%', md: "50%", sm: "75%"}}
            overflow={'hidden'}>
            
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

