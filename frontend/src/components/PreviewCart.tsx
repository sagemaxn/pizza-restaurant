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
  import { CartContext } from "../context/CartContext";
  import CartItem from './CartItem'
  import Cart from './Cart'

  function PreviewCart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const { cart } = useContext(CartContext)
    
 
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          {cart.totalItems || 0}
        </Button>
        <Button onClick={()=> console.log(cart)}>cart?</Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Preview Cart
              <Link href="/cart">
              <Button onClick={onClose}>Edit Cart</Button>
              </Link>
            </DrawerHeader>
  
            <DrawerBody>
            <Cart cart={cart}/>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default PreviewCart