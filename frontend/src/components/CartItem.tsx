import React, {useState, useEffect} from 'react'
import {Select, Box, Image} from '@chakra-ui/react'
import {createOptions} from '../components/MenuItem'

const CartItem = ({size, name, quantity, price, image, removeFromCart, addToCart, id}) => {
    const [pr, setPr] = useState(price * quantity)
    useEffect(() =>{
        setPr(price * quantity)
    },[quantity])
    const cartRemover = (
        size: any,
        id: number
      ) => {
        const selectedItem = {
          size: size,
          id: id,
        };
        removeFromCart(selectedItem);
      }
      const cartAdder = (
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
        console.log("size " + selectedItem.size);
        addToCart(selectedItem);
      };  
    function changeHandler(e){
        cartRemover(size, id)
        cartAdder(image, name, size, price, parseInt(e.target.value), id)

    }  
    return (
        <Box>
            <Image></Image>
            <Select defaultValue={quantity} onChange={changeHandler}>
                {createOptions(10)}
            </Select>
            {quantity} {size} {name}{pr}
            <button onClick={()=>cartRemover(size, id)}>remove</button>
        </Box>
    )
}

export default CartItem
