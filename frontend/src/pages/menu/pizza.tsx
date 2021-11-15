import axios from "axios";
import { SimpleGrid } from "@chakra-ui/react";
import MenuItem from "../../components/MenuItem";

import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addToCart } from "../../context/cartReducer";

const Pizza = ({ pizzas }) => {
  const { dispatch, cart } = useContext(CartContext);
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
      {pizzas.map((pizza) => {
        return (
          <MenuItem
            name={pizza.name}
            sizes={pizza.size}
            image={pizza.image}
            addToCart={addToCartHandler}
            id={pizza._id}
            key={pizza._id}
          />
        );
      })}
    </SimpleGrid>
  );
};

export async function getStaticProps() {
  const url = `http://localhost:3001/pizza`;
  const response = await axios.get(url);

  return { props: { pizzas: response.data } };
}

export default Pizza;
