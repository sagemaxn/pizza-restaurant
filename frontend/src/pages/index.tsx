import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
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
        <Image src="https://i0.wp.com/greencottageencino.com/wp-content/uploads/2016/05/woodfire-oven-pizza.jpg?fit=940%2C571&ssl=1" />
        <Flex> 
        <Link href="/pizza">
          <Button data-cy="pizza" colorScheme="red">
            Pizza
          </Button>
        </Link>
        <Link href="/sides">
          <Button data-cy="sides" colorScheme="red">
            Sides
          </Button>
        </Link>
        <Link href="/drinks">
          <Button data-cy="drinks" colorScheme="red">
            Drinks
          </Button>
        </Link>
        </Flex> 
      </Stack>
    </Container>
  );
}
