import React, { useContext, useState } from "react";
import {Button} from '@chakra-ui/react'
import { CartContext } from "../context/CartContext";
import Cart from '../components/Cart'
import { removeFromCart, addToCart } from "../context/cartReducer";

const cart = () => {
    
    const {cart, dispatch} = useContext(CartContext)
    const [subtotal, setSubtotal] = useState(cart.totalAmount)
    const [tax, setTax] = useState(Math.round(subtotal * .09 * 100)/ 100)
    const [total, setTotal] = useState(subtotal + tax)

    const removeFromCartHandler = (item) => {
        dispatch(removeFromCart(item));
      };
    const addToCartHandler = (item) => {
        dispatch(addToCart(item))
    }
    return (<>
        <Button type="submit">Checkout</Button>
        <Cart cart={cart} removeFromCart={removeFromCartHandler} addToCart={addToCartHandler}></Cart>
        
        Subtotal ${subtotal}
              Tax: ${tax}
              Your total ${total}
    </>
    )
}

export default cart

