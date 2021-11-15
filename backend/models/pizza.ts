import { prop, getModelForClass } from "@typegoose/typegoose";

export class Sizes{
    small: string
    medium: string
    large: string
}

export class Pizza{
    @prop()
    public name: string

    @prop()
    public sizes: Sizes

    @prop()
    public image: string
}


export const PizzaModel = getModelForClass(Pizza);