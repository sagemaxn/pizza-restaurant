"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 5531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/MenuItem.tsx
var MenuItem = __webpack_require__(9139);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/CartContext.tsx
var CartContext = __webpack_require__(5259);
// EXTERNAL MODULE: ./src/context/cartReducer.ts
var cartReducer = __webpack_require__(8683);
;// CONCATENATED MODULE: ./src/pages/[slug].tsx







const Item = ({ items  })=>{
    const { dispatch , cart  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const addToCartHandler = (item)=>{
        dispatch((0,cartReducer/* addToCart */.Xq)(item));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
        columns: {
            base: 1,
            md: 2
        },
        spacingX: "20px",
        spacingY: "20px",
        alignContent: "center",
        marginTop: "20px",
        children: items.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(MenuItem/* default */.Z, {
                name: item.name,
                sizes: item.size,
                image: item.image,
                addToCart: addToCartHandler,
                id: item._id
            }, JSON.stringify(item._id));
        })
    });
};
const getStaticPaths = async ()=>{
    const pathList = [
        "pizza",
        "sides",
        "drinks"
    ];
    const paths = [];
    pathList.forEach((item)=>{
        paths.push(`/${item}`);
    });
    console.log(pathList);
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const { slug  } = params;
    try {
        const response = await external_axios_default().get(`/items/${slug}`);
        return response ? {
            props: {
                items: response.data
            }
        } : {
            notFound: true
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true
        };
    }
// if (!response) {
//   return {
//     redirect: {
//       destination: '/',
//       permanent: false,
//     },
//   }
// }
};
/* harmony default export */ const _slug_ = (Item);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [259,139], () => (__webpack_exec__(5531)));
module.exports = __webpack_exports__;

})();