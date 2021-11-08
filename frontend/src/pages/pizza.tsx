import React from "react";
import axios from 'axios'
import { SimpleGrid } from "@chakra-ui/react";
import MenuItem from "../components/MenuItem";
import baseUrl from './index'

const pizza = ({ pizzas }) => {
    console.log(pizzas)

// function mapPizzas(pizzas){
//     pizzas.map((pizza) => <MenuItem name={pizza.name} price={pizza.price} picture="blank" key={pizza.id}/>)
// }

  return (
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
    {pizzas.map((pizza) => <MenuItem name={pizza.name} sizes={pizza.size} picture="blank" key={pizza._id}/>)}
    </SimpleGrid>
  );
};

export async function getStaticProps(){
    const url = `http://localhost:3001/pizza`
    const response = await axios.get(url)
  
    return { props: { pizzas: response.data }}
  }

export default pizza;
