import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}.`);
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("yo it me");
});
