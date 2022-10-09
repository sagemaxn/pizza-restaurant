import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import * as menu from "./menuitems.json";
import cors from "cors";
dotenv.config();
import itemRouter from './controllers/item'
 
import connect from "./utils/mongo";
connect();

const app = express();
app.use(express.static(".next"))
app.use(cors());
app.use('/items', itemRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}.`);
});

app.get("/api/menu", (req: Request, res: Response, next: NextFunction) => {
  console.log(menu);
  res.status(200).json(menu);
});
