import { useState } from "react";
import { Container, Box, Select, Button, Image } from "@chakra-ui/react";

const MenuItem = ({ name, sizes, image, addToCart, id }) => {
  const buttonAddToCart = (
    image: string,
    name: string,
    price: number,
    quantity: number,
    id: number
  ) => {
    const selectedItem = {
      image: image,
      name: name,
      price: price,
      quantity,
      id: id,
    };
    addToCart(selectedItem);
  };

  const [price, setPrice] = useState(sizes.large);
  const [quantity, setQuantity] = useState(1);
  function priceHandler(e) {
    let value = e.target.value;
    setPrice(sizes[value]);
  }
  function quantityHandler(e) {
    let value = e.target.value;
    setQuantity(parseInt(value));
  }
  let options = [];
  function createOptions() {
    for (let i = 1; i < 10; i++) {
      options.push(<option key={i}>{i}</option>);
    }
    return options;
  }
  return (
    <Container>
      <h2>{name}</h2>
      price: ${price}
      <Select onChange={priceHandler} defaultValue={"large"}>
        <option>large</option>
        <option>medium</option>
        <option>small</option>
      </Select>
      <Button onClick={() => buttonAddToCart(image, name, price, quantity, id)}>
        Add To Order
      </Button>
      <Select onChange={quantityHandler} defaultValue={1}>
        {createOptions()}
      </Select>
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
