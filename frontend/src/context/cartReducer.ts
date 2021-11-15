export const cartReducer = (state, action) => {
  console.log("?? " + action.payload.size);
  switch (action.type) {
    case "ADD_TO_CART":{
      const cart = [...state.cart];
      const itemID = action.payload.id;
      const itemQty = parseInt(action.payload.quantity);
      console.log(action.payload.id);
      const itemPrice = action.payload.price;

      cart.map((element) => {
        console.log(element.id === itemID);
      });

      const inCart =
        cart.find(
          (element) => element.id === itemID && element.price === itemPrice
        ) || [];
        console.log(inCart)

      inCart.quantity > 0
        ? (inCart.quantity += itemQty)
        : cart.push(action.payload);

      const totalItems = cart.reduce(
        (prevItem, curItem) => prevItem + curItem.quantity,
        0
      );
      const totalAmount = cart.reduce((prevTotal, curItem) => {
        return prevTotal + curItem.price * curItem.quantity;
      }, 0);
    
      return {
        ...state,
        cart,
        totalItems,
        totalAmount,
      };  
    }  
    case "REMOVE_FROM_CART": {
      const cart = state.cart.filter((item) => item.id !== action.payload && item.size !== action.payload.size);
      console.log(cart)
      const totalItems = cart.length;
      const totalAmount = cart.reduce((acc, currentProduct) => {
        return acc + currentProduct.price * currentProduct.quantity;
      }, 0);
      return {
        ...state,
        cart: cart,
        totalItems,
        totalAmount
      };
    }   
    default:
      return state;
  }
};

export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};
export const removeFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item
  }
}