import React, { useContext, useState, useEffect } from "react";
import Link from 'next/link';
import { Button, Flex, VStack, HStack, Text, Heading, Box } from '@chakra-ui/react';
import { CartContext } from "../../context/CartContext";
import Cart from '../../components/Cart';
import { removeFromCart, editCartQuantity } from "../../context/cartReducer";

const CartPage = () => {
    const { cart, dispatch } = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setSubtotal(cart.totalAmount);
        let newTax = Math.round(cart.totalAmount * .09 * 1e2) / 1e2;
        setTax(newTax);
        setTotal(cart.totalAmount + newTax);
    }, [cart.totalItems]);

    const removeFromCartHandler = (item) => {
        dispatch(removeFromCart(item));
    };

    const editCartQuantityHandler = (item) => {
        dispatch(editCartQuantity(item));
    };

    if (cart.cart < 1) {
        return (
            <Flex height="80vh" alignItems="center" justifyContent="center">
                <Heading textAlign="center">Your cart is empty!</Heading>
            </Flex>
        );
    }
    return (
        <Box my={8} mx="auto" p={6} maxW="container.md" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={'white'}>
            <Heading as="h2" size="xl" mb={6} textAlign="center">
                Your Cart
            </Heading>
            <Cart cart={cart} removeFromCart={removeFromCartHandler} editCartItem={editCartQuantityHandler} />
            <VStack spacing={4} align="stretch" mt={8}>
                <HStack justifyContent="space-between">
                    <Text fontSize="lg">Subtotal:</Text>
                    <Text fontSize="lg" fontWeight="semibold">${subtotal.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text fontSize="lg">Tax:</Text>
                    <Text fontSize="lg" fontWeight="semibold">${tax.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text fontSize="lg">Total:</Text>
                    <Text fontSize="xl" fontWeight="bold">${total.toFixed(2)}</Text>
                </HStack>
            </VStack>
            <Flex mt={8} justifyContent="flex-end">
                <Link href="/cart/checkout" passHref>
                    <Button size="lg" colorScheme="red">Checkout</Button>
                </Link>
            </Flex>
        </Box>
    );
};

export default CartPage;
