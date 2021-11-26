import {PizzaModel} from '../models/pizza';
import {SideModel} from '../models/side'
import {Request, Response} from 'express'
import Router from 'express'

const pizzaRouter = Router()

pizzaRouter.get('/:item', async (req: Request, res: Response) => {
  try{
    const item = req.params['item']
    console.log(item)
    let items
    if (item === "pizza"){
    let items = await PizzaModel.find()
    res.status(200).json(items)
    } 
  else if (item === "sides"){
    let items = await SideModel.find()
    res.status(200).json(items)
  }
  }
  catch(err){
    console.error(err)
  }
})
pizzaRouter.get('/', async (req: Request, res: Response) => {
  res.send('items')
})
pizzaRouter.post('/', async (req: Request, res: Response) => {
  res.json('testr')
})

export default pizzaRouter