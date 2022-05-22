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

export default function Home() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 10 }}
        direction={{ base: "column" }}
      >
        <Flex>
          <Box>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            Joe's Pizza
          </Heading>
          <Text>lorem ipsum</Text>
          </Box>
          <Image src="https://i0.wp.com/greencottageencino.com/wp-content/uploads/2016/05/woodfire-oven-pizza.jpg?fit=940%2C571&ssl=1"/>
          </Flex>
      </Stack>
    </Container>
  );
}
