import { PizzaModel } from "../models/pizza";
import { SideModel } from "../models/side";
import { Request, Response } from "express";
import Router from "express";
import { DrinkModel } from "../models/drink";

const itemRouter = Router();

itemRouter.get("/:item", async (req: Request, res: Response) => {
  try {
    const item = req.params["item"];
    console.log(item);
    let items;
    if (item === "pizza") {
      items = await PizzaModel.find();
    } else if (item === "sides") {
      items = await SideModel.find();
    } else if (item === "drinks") {
      items = await DrinkModel.find();
    }
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
  }
});
itemRouter.get("/", async (req: Request, res: Response) => {
  res.send("items");
});
itemRouter.post("/", async (req: Request, res: Response) => {
  res.json("testr");
});

export default itemRouter;
