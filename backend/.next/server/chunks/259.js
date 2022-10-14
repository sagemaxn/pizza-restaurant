"use strict";
exports.id = 259;
exports.ids = [259];
exports.modules = {

/***/ 5259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ CartContext),
/* harmony export */   "Z": () => (/* binding */ CartProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8683);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);




const cartCookie = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)().pizzaCart;
const initialState = cartCookie ? JSON.parse(cartCookie) : {
    cart: []
};
const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
const CartProvider = ({ children  })=>{
    const { 0: cart , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_cartReducer__WEBPACK_IMPORTED_MODULE_3__/* .cartReducer */ .C$, initialState);
    const { 0: pizzaCookie , 1: setPizzaCookie  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(null, "pizzaCart", JSON.stringify(cart), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/"
        });
        setPizzaCookie((0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)().pizzaCart);
    }, [
        cart
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            cart,
            dispatch
        },
        children: children
    });
};


/***/ }),

/***/ 8683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C$": () => (/* binding */ cartReducer),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "h2": () => (/* binding */ removeFromCart),
/* harmony export */   "nM": () => (/* binding */ editCartQuantity)
/* harmony export */ });
//need to add proper typing
const cartReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            {
                const newCart = [
                    ...state.cart
                ];
                const itemID = action.payload.id;
                const itemQty = parseInt(action.payload.quantity);
                console.log(action.payload.id);
                const itemPrice = action.payload.price;
                newCart.map((element)=>{
                    console.log(element.id === itemID);
                });
                const inCart = newCart.find((element)=>element.id === itemID && element.price === itemPrice) || [];
                console.log(inCart);
                inCart.quantity > 0 ? inCart.quantity += itemQty : newCart.push(action.payload);
                const totalItems = newCart.reduce((prevItem, curItem)=>prevItem + curItem.quantity, 0);
                const totalAmount = newCart.reduce((prevTotal, curItem)=>{
                    return prevTotal + Math.round(curItem.price * curItem.quantity * 1e2) / 1e2;
                }, 0);
                return {
                    ...state,
                    cart: newCart,
                    totalItems,
                    totalAmount
                };
            }
        case "EDIT_CART_QUANTITY":
            {
                state.cart.find((item)=>action.payload.id === item.id && action.payload.size === item.size).quantity = action.payload.quantity;
                const newCart1 = state.cart;
                const newTotalItems = newCart1.reduce((prevItem, curItem)=>prevItem + curItem.quantity, 0);
                const newTotalAmount = newCart1.reduce((prevTotal, curItem)=>{
                    return prevTotal + curItem.price * curItem.quantity;
                }, 0);
                return {
                    ...state,
                    cart: newCart1,
                    totalItems: newTotalItems,
                    totalAmount: Math.round(newTotalAmount * 1e2) / 1e2
                };
            }
        case "REMOVE_FROM_CART":
            {
                {
                    const removedItem = state.cart.find((x)=>x.id === action.payload.id && x.size === action.payload.size);
                    console.table("removed", removedItem);
                    const newCart2 = state.cart.filter((item)=>item !== removedItem);
                    const newTotalItems1 = newCart2.length;
                    const newTotalAmount1 = newCart2.reduce((prevItem, curItem)=>{
                        return prevItem + curItem.price * curItem.quantity;
                    }, 0);
                    return {
                        ...state,
                        cart: newCart2,
                        totalItems: newTotalItems1,
                        totalAmount: Math.round(newTotalAmount1 * 1e2) / 1e2
                    };
                }
            }
        default:
            return state;
    }
};
const addToCart = (item)=>{
    return {
        type: "ADD_TO_CART",
        payload: item
    };
};
const editCartQuantity = (item)=>{
    return {
        type: "EDIT_CART_QUANTITY",
        payload: item
    };
};
const removeFromCart = (item)=>{
    return {
        type: "REMOVE_FROM_CART",
        payload: item
    };
};


/***/ })

};
;