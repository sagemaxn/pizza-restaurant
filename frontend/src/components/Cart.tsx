import { SimpleGrid, Heading } from '@chakra-ui/react'
import React from 'react'
import CartItem from './CartItem'

interface Props {
    cart: any
    removeFromCart: (item: object) => void
    editCartItem: (item: object) => void
}

const Cart = ({cart, removeFromCart, editCartItem}: Props) => {
    return (
        <SimpleGrid>
        {cart.cart.map(cart => <CartItem size={cart.size} name={cart.name} quantity={cart.quantity} price={cart.price} image={cart.image} removeFromCart={removeFromCart} editCartItem={editCartItem} id={cart.id} key={cart.id + cart.price}/>)}
        </SimpleGrid>
    )
}

export default Cart
