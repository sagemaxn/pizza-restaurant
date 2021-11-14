export const cartReducer = (state, action) => {
  console.log(action.item);
  switch (action.type) {
    case "ADD_TO_CART":
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
