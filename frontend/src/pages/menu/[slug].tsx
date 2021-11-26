import axios from "axios";
import { SimpleGrid } from "@chakra-ui/react";
import MenuItem from "../../components/MenuItem";
import {useRouter} from 'next/router'
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
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px" alignContent={"center"}>
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

export const getStaticPaths = async () => {

    return {
        paths: [{ params: { slug: 'pizza' } },
        { params: { slug: 'sides' } }],
        fallback: true //indicates the type of fallback
    }
}

export async function getStaticProps({params}) {
  console.log(JSON.stringify(params))
  console.log(params)
 let response = {data: ''}
 if (params === 'pizza' || 'sides'){
  const url = `http://localhost:3001/items/${params}`;
  response = await axios.get(url);
  }
  if (!response) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return { props: { pizzas: response.data } };
}

export default Pizza;
