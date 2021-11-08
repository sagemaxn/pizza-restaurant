import { useState } from "react";

import { Container, Box, Select, Button, Image } from "@chakra-ui/react";

const MenuItem = ({ name, sizes, picture }) => {
  const [price, setPrice] = useState(sizes.large);
  function eventHANDLER(e) {
    let value = e.target.value;
    setPrice(sizes[value]);
  }
  return (
    <Container>
      <h2>{name}</h2>
      price: ${price}
      <Select onChange={eventHANDLER} defaultValue={"large"}>
        <option>large</option>
        <option>medium</option>
        <option>small</option>
      </Select>
      <Button>Add To Order</Button>
      <Image
        boxSize="100px"
        objectFit="cover"
        src="https://st.depositphotos.com/2640119/3010/i/950/depositphotos_30103299-stock-photo-pepperoni-pizza.jpg"
        alt={name}
      />
      <Image />
    </Container>
  );
};

export default MenuItem;
