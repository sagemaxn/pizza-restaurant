import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 10 }}
        direction={{ base: "column" }}
      >
        <Box>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            Joe's Pizza
          </Heading>
        </Box>
        <Flex direction="column">
        <Link href="/pizza">
          <Box position="relative" textAlign="center" height='260px'>
          <Image src={'/pizza_Pepperoni.png'} width="700x" height="250px" objectFit="cover"/>
          <Text fontFamily="fraunces" fontSize="80px" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" fontWeight="bold" textShadow = "1px 1px 0 #000">Pizza</Text>
          </Box>
        </Link>
        <Flex justifyContent='space-between'> 
        <Link href="/sides">
        <Box position="relative" textAlign="center">
          <Image src={'/pizza_Pepperoni.png'} width="345px" height="250px"/>
          <Text fontFamily="fraunces" fontSize="80px" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" fontWeight="bold" textShadow = "1px 1px 0 #000">Sides</Text>
          </Box>
        </Link>
        <Link href="/drinks">
        <Box position="relative" textAlign="center">
          <Image src={'/pizza_Pepperoni.png'} width="345px" height="250px"/>
          <Text fontFamily="fraunces" fontSize="80px" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" fontWeight="bold" textShadow = "1px 1px 0 #000">Drinks</Text>
          </Box>
        </Link>
        </Flex> 
        </Flex>
      </Stack>
    </Container>
  );
}
