import { prop, getModelForClass } from "@typegoose/typegoose";

export class Sizes{
    bottled: string
}

export class Drink{
    @prop()
    public name: string

    @prop()
    public sizes: Sizes

    @prop()
    public image: string
}


export const DrinkModel = getModelForClass(Drink);