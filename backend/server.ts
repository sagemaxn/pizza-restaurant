import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import * as menu from "./menuitems.json";
import cors from "cors";
dotenv.config();
import itemRouter from './controllers/item'
 
import connect from "./utils/mongo";
connect();

const app = express();
app.use(cors());
app.use('/items', itemRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}.`);
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body + " dsadas");
  res.send("yo it me");
});

app.get("/api/menu", (req: Request, res: Response, next: NextFunction) => {
  console.log(menu);
  res.status(200).json(menu);
});
