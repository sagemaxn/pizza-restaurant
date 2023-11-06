import express, { Request, Response, NextFunction } from "express";
import next from "next";
import * as dotenv from "dotenv";

import * as menu from "./menuitems.json";
import itemRouter from "./controllers/item";
import connect from "./utils/mongo";

dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: '../frontend' });
const handle = app.getRequestHandler();

(async () => {
  try {
    connect();
    await app.prepare();
    const server = express()
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.use("/items", itemRouter);

    server.get("/api/menu", (req: Request, res: Response, next: NextFunction) => {
      console.log(menu);
      res.status(200).json(menu);
    });

    const PORT = process.env.PORT || 4000;
    server.listen(PORT, () => {
      console.log(`Server has started on port ${PORT}.`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

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
