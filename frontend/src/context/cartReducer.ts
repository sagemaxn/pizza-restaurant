//need to add proper typing

export const cartReducer = (state: any, action: any) => {

  switch (action.type) {
    case "ADD_TO_CART":{
      const newCart = [...state.cart];
      const itemID = action.payload.id;
      const itemQty = parseInt(action.payload.quantity);
      console.log(action.payload.id);
      const itemPrice = action.payload.price;

      newCart.map((element) => {
        console.log(element.id === itemID);
      });

      const inCart =
        newCart.find(
          (element) => element.id === itemID && element.price === itemPrice
        ) || [];
        console.log(inCart)

      inCart.quantity > 0
        ? (inCart.quantity += itemQty)
        : newCart.push(action.payload);

      const totalItems = newCart.reduce(
        (prevItem, curItem) => prevItem + curItem.quantity,
        0
      );
      const totalAmount = newCart.reduce((prevTotal, curItem) => {
        return prevTotal + Math.round(curItem.price * curItem.quantity * 1e2 ) / 1e2;
      }, 0);
    
      return {
        ...state,
        cart: newCart,
        totalItems,
        totalAmount,
      };  
    }  
    case "EDIT_CART_QUANTITY":{
      state.cart.find(item => action.payload.id === item.id && action.payload.size === item.size).quantity = action.payload.quantity
      const newCart = state.cart
      const newTotalItems = newCart.reduce(
        (prevItem, curItem) => prevItem + curItem.quantity,
        0
      );
      const newTotalAmount = newCart.reduce((prevTotal, curItem) => {
        return prevTotal + curItem.price * curItem.quantity;
      }, 0);
      return {
        ...state,
        cart: newCart,
        totalItems: newTotalItems,
        totalAmount: Math.round(newTotalAmount * 1e2) / 1e2
      };   
    }
    case "REMOVE_FROM_CART": { 
      {
        const removedItem = state.cart.find((x) => x.id === action.payload.id && x.size === action.payload.size);
        console.table('removed',removedItem)
        const newCart = state.cart.filter((item) => item !== removedItem)
        const newTotalItems = newCart.length;
        const newTotalAmount = newCart.reduce((prevItem, curItem) => {
          return prevItem + curItem.price * curItem.quantity;
        }, 0);
        return {
          ...state,
          cart: newCart,
          totalItems: newTotalItems,
          totalAmount: Math.round(newTotalAmount * 1e2) / 1e2,
        };
      }
    }   
    default:
      return state;
  }
};
type Item = {
  image: string,
  name: string,
  size: string,
  price: number,
  quantity: number,
  id: string
};
export const addToCart = (item: Item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};
export const editCartQuantity = (item: Item) => {
  return {
    type: "EDIT_CART_QUANTITY",
    payload: item,
  }
}
export const removeFromCart = (item: Item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item
  }
}