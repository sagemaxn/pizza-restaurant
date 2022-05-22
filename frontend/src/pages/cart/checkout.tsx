import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
  } from '@chakra-ui/react';
  
  export default function JoinOurTeam() {
    return (
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading>
                Please Enter your information
              </Heading>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
              <Text mb='8px'>First Name</Text>
                <Input
                  placeholder="John"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Text mb='8px'>Last Name</Text>
                <Input
                  placeholder="Snow"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Text mb='8px'>Email</Text>
                <Input
                  placeholder="email@email.com"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Text mb='8px'>Phone</Text>
                <Input type = 'tel'
                  placeholder="xxx-xxx-xxxx"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  minLength={10}
                  maxLength={10}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
              </Stack>
              <Button
                colorScheme='red'
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                variant="default"
               >
                Proceed to Payment
              </Button>
            </Box>
            form
          </Stack>
        </Container>
    );
  }
