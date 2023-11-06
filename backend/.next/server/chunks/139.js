"use strict";
exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 9139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ createOptions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



function createOptions(amount) {
    let options = [];
    for(let i = 1; i <= amount; i++){
        options.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
            children: i
        }, i));
    }
    return options;
}
const MenuItem = ({ name , sizes , image , addToCart , id  })=>{
    const buttonAddToCart = (image, name, size, price, quantity, id)=>{
        const selectedItem = {
            image: image,
            name: name,
            size: size,
            price: price,
            quantity,
            id: id
        };
        addToCart(selectedItem);
    };
    const sizesArray = Object.keys(sizes);
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sizes[sizesArray[0]]);
    const { 0: size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sizesArray[0]);
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    function priceHandler(e) {
        let value = e.target.value;
        setPrice(sizes[value]);
        setSize(value);
    }
    function quantityHandler(e) {
        let value = e.target.value;
        setQuantity(parseInt(value));
    }
    function makeSizes() {
        if (sizesArray.length > 1) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                onChange: priceHandler,
                defaultValue: size,
                "data-cy": "select",
                children: Object.keys(sizes).map((key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        children: key
                    }, key + id))
            });
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        border: "solid 1px grey",
        justify: "space-evenly",
        padding: "20px",
        background: "white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                width: "50%",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                        as: "h1",
                        size: "md",
                        colorScheme: "red",
                        children: name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        fontSize: "sm",
                        children: [
                            "price: $",
                            (Math.round(price * quantity * 100) / 100).toFixed(2)
                        ]
                    }),
                    makeSizes(),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        direction: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                onChange: quantityHandler,
                                defaultValue: 1,
                                width: "80px",
                                iconSize: "30px",
                                "data-cy": "select",
                                children: createOptions(10)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                colorScheme: "red",
                                onClick: ()=>buttonAddToCart(image, name, size, price, quantity, id),
                                "data-cy": "submit",
                                children: "Add To Order"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                boxSize: "150px",
                borderRadius: "5%",
                objectFit: "cover",
                src: image,
                alt: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);


/***/ })

};
;