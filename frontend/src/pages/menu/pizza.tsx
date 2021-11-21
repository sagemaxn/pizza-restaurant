import axios from "axios";
import { SimpleGrid } from "@chakra-ui/react";
import MenuItem from "../../components/MenuItem";
import {ObjectId} from 'mongodb'

import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addToCart } from "../../context/cartReducer";

interface pizzaObj {
  name: string,
  size: string,
  image: string,
  _id: ObjectId
}
interface props {
  pizzas : pizzaObj[]
}

const Pizza = ({ pizzas }: props) => {
  const { dispatch, cart } = useContext(CartContext);
  const addToCartHandler = (item: object) => {
    dispatch(addToCart(item));
  };
  return (
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
      {pizzas.map((pizza) => {
        console.log(typeof pizza)
        return (
          <MenuItem
            name={pizza.name}
            sizes={pizza.size}
            image={pizza.image}
            addToCart={addToCartHandler}
            id={pizza._id}
            key={JSON.stringify(pizza._id)}
          />
        );
      })}
    </SimpleGrid>
  );
};

export async function getStaticProps() {
  const url = `http://localhost:3001/pizza`;
  const response = await axios.get(url);
  console.log("id "+typeof response.data[0].id)

  return { props: { pizzas: response.data } };
}

export default Pizza;
