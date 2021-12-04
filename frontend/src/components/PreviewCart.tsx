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
  
  function PreviewCart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const { cart } = useContext(CartContext)
    const [num, setNum] = useState(0)
    useEffect(() => {
      setNum(cart.totalItems)
    },[cart.totalItems])
 
    let cartList = cart.cart.map((item) => <div key={item.id + item.size}>{`(${item.quantity}) ${item.size} ${item.name} ` }</div>)
    return (
      <>
        <Button ref={btnRef} colorScheme="red" onClick={onOpen} data-cy="button">
          <Icon as={AiOutlineShoppingCart}></Icon>
          { num || 0}
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart Preview
              <Link href="/cart">
              <Button onClick={onClose} data-cy="button" colorScheme='red'>Edit Cart</Button>
              </Link>
            </DrawerHeader>
  
            <DrawerBody>
            {cartList}
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose} colorScheme='red'>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default PreviewCart