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
          <Box position="relative" textAlign="center">
          <Image src={'/pizza_Pepperoni.png'} width="700x" height="250px" objectFit="cover"/>
          <Text fontSize="80px" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">Pizza!</Text>
          </Box>
        </Link>
        <Flex> 
        <Link href="/sides">
        <Box position="relative" textAlign="center">
          <Image src={'/pizza_Pepperoni.png'} width="350px" height="250px"/>
          <Text fontSize="80px" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">Sides!</Text>
          </Box>
        </Link>
        <Link href="/drinks">
        <Box position="relative" textAlign="center">
          <Image src={'/pizza_Pepperoni.png'} width="350px" height="250px"/>
          <Text fontSize="80px" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">Drinks!</Text>
          </Box>
        </Link>
        </Flex> 
        </Flex>
      </Stack>
    </Container>
  );
}
