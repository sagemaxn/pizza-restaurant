import React, { createContext, useEffect, useReducer } from "react";

import { cartReducer } from "./cartReducer";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const initialState: any = parseCookies().pizzaCart || { cart: [] };
export const CartContext = createContext(initialState);
export const CartProvider = ({ children }: { children: any }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const cookie = parseCookies().pizzaCart;

  useEffect(() => {
    if (typeof cart === "string") {
      setCookie(null, "pizzaCart", cart, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      setCookie(null, "pizzaCart", cart, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }
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
