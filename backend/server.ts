import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import * as menu from "./menuitems.json";
//import * as favicon from 'serve-favicon'

dotenv.config();
import itemRouter from './controllers/item'
 
import connect from "./utils/mongo";
connect();

const app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))
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

app.use('/items', itemRouter)

// app.all('*', function (req, res) {
//   res.status(200).sendFile(`/`, { root: dist });
// });


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}.`);
});

app.get("/api/menu", (req: Request, res: Response, next: NextFunction) => {
  console.log(menu);
  res.status(200).json(menu);
});

