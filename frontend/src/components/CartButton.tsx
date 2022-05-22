import React, { useContext, useState, useEffect } from "react";
import Link from 'next/link'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
  } from "@chakra-ui/react"
  import { Icon } from "@chakra-ui/react"
  import { AiOutlineShoppingCart } from "react-icons/ai"
  import { CartContext } from "../context/CartContext";
  
  function CartButton() {
    const { cart } = useContext(CartContext)
    const [num, setNum] = useState(0)
    useEffect(() => {
      setNum(cart.totalItems)
    },[cart.totalItems])
 
    return (
      <Link href="/cart">
        <Button colorScheme="red" data-cy="button">
          <Icon as={AiOutlineShoppingCart}></Icon>
          { num || 0}
        </Button>
        </Link>  
    )
  }

export default CartButton