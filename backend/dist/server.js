"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
var menu = __importStar(require("./menuitems.json"));
//import * as favicon from 'serve-favicon'
dotenv.config();
var item_1 = __importDefault(require("./controllers/item"));
var mongo_1 = __importDefault(require("./utils/mongo"));
(0, mongo_1["default"])();
var app = (0, express_1["default"])();
var path = require('path');
app.use(express_1["default"].static(path.join(__dirname, 'build')));
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});
// app.use("*", async (req: Request, res: Response, next: NextFunction) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://sage-wordle.herokuapp.com/")
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
//   res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization")
//   res.setHeader("Access-Control-Allow-Credentials", "true")
//   // res.setHeader(
//   //   'Content-Security-Policy',
//   //   "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
//   // );
//   next()
// })
;
// app.all('*', function (req, res) {
//   res.status(200).sendFile(`/`, { root: dist });
// });
app.use('/items', item_1["default"]);
// app.all('*', function (req, res) {
//   res.status(200).sendFile(`/`, { root: dist });
// });
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log("Server has started on port ".concat(PORT, "."));
});
app.get("/api/menu", function (req, res, next) {
    console.log(menu);
    res.status(200).json(menu);
});
