import React, { createContext, useEffect, useReducer, useState } from "react";

import { cartReducer } from "./cartReducer";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const cartCookie = parseCookies().pizzaCart

const initialState = cartCookie ? JSON.parse(cartCookie) : {cart: []}

export const CartContext = createContext(initialState);
export const CartProvider = ({ children }: { children: any }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [pizzaCookie, setPizzaCookie] = useState("")

  useEffect(() => {
    setCookie(null, "pizzaCart", JSON.stringify(cart), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    setPizzaCookie(parseCookies().pizzaCart)
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
