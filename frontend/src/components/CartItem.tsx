import React, { useState, useEffect } from "react";
import { Select, Box, Image, Button } from "@chakra-ui/react";
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
    <Box data-cy="cartItem">
      <Select defaultValue={quantity} onChange={changeHandler} data-cy="select">
        {createOptions(10)}
      </Select>
      {quantity} {size} {name}
      {pr.toFixed(2)}
      <Button colorScheme='red'
        onClick={() => cartRemover(image, name, size, price, quantity, id)}
        data-cy="remove"
      >
        remove
      </Button>
      <Image boxSize="120px" objectFit="cover" src={image} alt={name} />
    </Box>
  );
};

export default CartItem;
