import { ICartItem } from "./ICartItem";
import { Document } from "mongoose";
import { IUser } from "./IUser";

export interface ICart extends Document {
	userId: IUser["_id"]; // mas adelante se cambia por id
	items: ICartItem[];
}
