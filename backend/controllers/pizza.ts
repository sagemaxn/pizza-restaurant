import {PizzaModel} from '../models/pizza';
import {Request, Response} from 'express'
import Router from 'express'

const pizzaRouter = Router()

pizzaRouter.get('/', async (req: Request, res: Response) => {
  const pizza = await PizzaModel.find();
  res.status(200).json(pizza)
})

export default pizzaRouter