import { useState } from "react";
import { Container, Box, Select, Button, Image, Flex, Heading } from "@chakra-ui/react";


export function createOptions(amount) {
  let options = [];
  for (let i = 1; i <= amount; i++) {
    options.push(<option key={i}>{i}</option>);
  }
  return options;
}

const MenuItem = ({ name, sizes, image, addToCart, id }) => {
  const buttonAddToCart = (
    image: string,
    name: string,
    size: any,
    price: number,
    quantity: number,
    id: number
  ) => {
    const selectedItem = {
      image: image,
      name: name,
      size: size,
      price: price,
      quantity,
      id: id,
    };
    addToCart(selectedItem);
  };

  const [price, setPrice] = useState(sizes.large);
  const [size, setSize]: any = useState("large");
  const [quantity, setQuantity] = useState(1);
  function priceHandler(e) {
    let value = e.target.value;
    setPrice(sizes[value]);
    setSize(value);
    //console.log(value)
  }
  function quantityHandler(e) {
    let value = e.target.value;
    setQuantity(parseInt(value));
  }
  
  return (
    <Flex>
      <Box width="200px">
      <Heading>{name}</Heading>
      price: ${(Math.round(price * quantity * 100)/ 100).toFixed(2)}
     
      <Select onChange={priceHandler} defaultValue={Object.keys(sizes).slice(-1)[0] } data-cy="select">
        {Object.keys(sizes).map((key) => (
          <option key={key+id}>{key}</option>
        ))}
      </Select>
      <Flex>
      <Select onChange={quantityHandler} defaultValue={1} width="80px" iconSize="30px" data-cy="select">
        {createOptions(10)}
      </Select>
      <Button
        onClick={() => buttonAddToCart(image, name, size, price, quantity, id)}
      data-cy="submit">
        Add To Order
      </Button>
      </Flex>
      
      </Box>
      <Image
        boxSize="120px"
        objectFit="cover"
        src={image}
        alt={name}
      />
      <Image />
    </Flex>
  );
};

export default MenuItem;
