import React, { useState, useEffect } from "react";
import { Select, Box, Image, Button, Flex } from "@chakra-ui/react";
import { createOptions } from "../components/MenuItem";
import { ObjectId } from "mongodb";
import { editCartQuantity } from "../context/cartReducer";

interface Product {
  image?: string;
  name?: string;
  size: string;
  price?: number;
  quantity?: number;
  id: string;
}

interface Props {
  size: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  removeFromCart: (selectedProducts: Product) => void;
  editCartItem: (selectedProducts: Product) => void;
  id: string;
}
const CartItem = ({
  size,
  name,
  quantity,
  price,
  image,
  removeFromCart,
  editCartItem,
  id,
}: Props) => {
  const [pr, setPr] = useState(price * quantity);
  useEffect(() => {
    setPr(price * quantity);
  }, [quantity]);
  const cartRemover = (
    image: string,
    name: string,
    size: string,
    price: number,
    quantity: number,
    id: string
  ) => {
    const selectedItem = {
      image: image,
      name: name,
      size: size,
      price: price,
      quantity,
      id: id,
    };
    removeFromCart(selectedItem);
  };
  const cartQuantityEdditer = (
    image: string,
    name: string,
    size: string,
    price: number,
    quantity: number,
    id: string
  ) => {
    const selectedItem = {
      image: image,
      name: name,
      size: size,
      price: price,
      quantity,
      id: id,
    };
    console.log("size " + selectedItem.size);
    editCartItem(selectedItem);
  };
  function changeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log("change");
    console.log(e.currentTarget.value);
    cartQuantityEdditer(
      image,
      name,
      size,
      price,
      parseInt(e.currentTarget.value),
      id
    );
  }
  return (
    <Flex data-cy="cartItem" w="600px" justifyContent="space-between" border='solid 1px grey' background="white">
      <Flex direction="column">
       {size} {name}
       <Image boxSize="80px" objectFit="cover" src={image} alt={name} />
       </Flex> 
      <Flex direction="column">
      <Select defaultValue={quantity} onChange={changeHandler} data-cy="select" w="80px">
        {createOptions(10)}
      </Select>
      
      {pr.toFixed(2)}
      <Button colorScheme='red'
        onClick={() => cartRemover(image, name, size, price, quantity, id)}
        data-cy="remove"
      >
        X
      </Button>
      </Flex> 
    </Flex>
  );
};

export default CartItem;
