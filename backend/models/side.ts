import { prop, getModelForClass } from "@typegoose/typegoose";

export class Sizes{
    standard: string
}

export class Side{
    @prop()
    public name: string

    @prop()
    public sizes: Sizes

    @prop()
    public image: string
}


export const SideModel = getModelForClass(Side);