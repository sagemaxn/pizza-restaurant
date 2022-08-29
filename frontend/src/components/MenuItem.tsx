import { useState } from "react";
import { Text, Box, Select, Button, Image, Flex, Heading } from "@chakra-ui/react";

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
  const sizesArray = Object.keys(sizes)
  const [price, setPrice] = useState(sizes[sizesArray[0]]);
  const [size, setSize]: any = useState(sizesArray[0]);
  const [quantity, setQuantity] = useState(1);
  function priceHandler(e) {
    let value = e.target.value;
    setPrice(sizes[value]);
    setSize(value);
  }
  function quantityHandler(e) {
    let value = e.target.value;
    setQuantity(parseInt(value));
  }
  function makeSizes(){
    if(sizesArray.length > 1) {
      return <Select onChange={priceHandler} defaultValue={ size } data-cy="select">
      {Object.keys(sizes).map((key) => (
        <option key={key+id}>{key}</option>
      ))}
    </Select>
    }}
  
  return (
    <Flex border={'solid 1px grey'}
    justify={'space-evenly'} 
    padding='20px'
    background="white">
      <Box width='50%' >
      <Heading as='h1' size='md' colorScheme='red'>{name}</Heading>
      <Text fontSize='sm'>price: ${(Math.round(price * quantity * 100)/ 100).toFixed(2)}</Text>
      {makeSizes()}
      <Flex direction="row">
      
      <Select onChange={quantityHandler} defaultValue={1} width="80px" iconSize="30px" data-cy="select">
        {createOptions(10)}
      </Select>
      <Button colorScheme='red'
        onClick={() => buttonAddToCart(image, name, size, price, quantity, id)}
      data-cy="submit">
        Add To Order
      </Button>
      </Flex>
      
      </Box>
      <Image
      boxSize='150px'
        borderRadius='5%'        
        objectFit='cover'
        src={image}
        alt={name}
      />
      <Image />
    </Flex>
  );
};

export default MenuItem;
