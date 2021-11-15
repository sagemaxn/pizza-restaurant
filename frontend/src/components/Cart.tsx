import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CartItem from './CartItem'

const Cart = ({cart, removeFromCart, addToCart}) => {
    if(!cart){
        return <div>nothing in cart</div>
    }
    return (
        <SimpleGrid>
        {cart.cart.map(cart => <CartItem size={cart.size} name={cart.name} quantity={cart.quantity} price={cart.price} image={cart.image} removeFromCart={removeFromCart} addToCart={addToCart} id={cart.id} key={cart.id + cart.price}/>)}
        </SimpleGrid>
    )
}

export default Cart
