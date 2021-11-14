import {PizzaModel} from '../models/pizza';
import {Request, Response} from 'express'
import Router from 'express'

const pizzaRouter = Router()

pizzaRouter.get('/', async (req: Request, res: Response) => {
  try{
  const pizza = await PizzaModel.find();
  res.status(200).json(pizza)
  }
  catch(err){
    console.error(err)
  }
})

pizzaRouter.post('/', async (req: Request, res: Response) => {
  res.json('testr')
})

export default pizzaRouter