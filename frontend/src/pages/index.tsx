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
        <Flex> 
        <Link href="/pizza">
          <Image src={'/pizza_Pepperoni.png'} width="250px" height="250px" objectFit="contain"/>
        </Link>
        <Link href="/sides">
          <Image src={'/'} width="250px" height="250px"/>
        </Link>
        <Link href="/drinks">
          <Image src={'/'} width="250px" height="250px"/>
        </Link>
        </Flex> 
      </Stack>
    </Container>
  );
}
