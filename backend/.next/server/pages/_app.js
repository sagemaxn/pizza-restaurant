"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/context/CartContext.tsx
var CartContext = __webpack_require__(5259);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./src/theme.tsx


const fonts = {
    mono: `'Menlo', monospace`
};
const breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em"
});
const theme = (0,react_.extendTheme)({
    colors: {
        black: "#16161D",
        green: "#228b22"
    },
    fonts: {
        heading: "peralta, sans-serif"
    },
    styles: {
        global: ()=>({
                body: {
                    backgroundImage: "https://img.freepik.com/premium-vector/pizza-seamless-pattern_373337-10.jpg",
                    marginBottom: "50px"
                }
            })
    },
    breakpoints,
    button: {
        colorScheme: "red"
    }
});
/* harmony default export */ const src_theme = (theme);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./src/components/CartButton.tsx







function CartButton() {
    const { cart  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const { 0: num , 1: setNum  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        setNum(cart.totalItems);
    }, [
        cart.totalItems
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/cart",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
            colorScheme: "red",
            "data-cy": "button",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                    as: ai_namespaceObject.AiOutlineShoppingCart
                }),
                num || 0
            ]
        })
    });
}
/* harmony default export */ const components_CartButton = (CartButton);

;// CONCATENATED MODULE: ./src/components/Navbar.tsx






function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        background: "white",
        flexDirection: "row",
        justify: "space-between",
        top: "0",
        width: "100%",
        minH: "60px",
        py: {
            base: 2
        },
        px: {
            base: 4
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                flex: {
                    base: 1,
                    md: 0
                },
                direction: "row",
                spacing: 10,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: "Joe's Pizza"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    children: [
                                        "Menu ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiChevronDown, {}),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/pizza",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            children: "Pizza"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/sides",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            children: "Sides"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/drinks",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            children: "Drinks"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_CartButton, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.tsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "50px",
        bg: (0,react_.useColorModeValue)("gray.50", "gray.900"),
        color: (0,react_.useColorModeValue)("gray.700", "gray.200"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            as: react_.Stack,
            maxW: "6xl",
            py: 4,
            direction: {
                base: "column",
                md: "row"
            },
            spacing: 4,
            justify: {
                base: "center",
                md: "space-between"
            },
            align: {
                base: "center",
                md: "center"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                    direction: "row",
                    spacing: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Joe's Pizza"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    children: "123 Main St Phone (603)-111-1111"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Layout.tsx




const Layout = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        resetCSS: true,
        theme: src_theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(CartContext/* CartProvider */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                    maxW: "container.lg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
}
async function getStaticProps({ Component , ctx  }) {
    let pageProps = {};
    if (Component.getStaticProps) {
        pageProps = await Component.getStaticProps(ctx);
    }
    return {
        pageProps
    };
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,259], () => (__webpack_exec__(4852)));
module.exports = __webpack_exports__;

})();