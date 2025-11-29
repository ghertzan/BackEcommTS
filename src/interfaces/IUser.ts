import { Document } from "mongoose";
import { ICart } from "./ICart";

export interface IUser extends Document {
	first_name: string;
	last_name: string;
	email: string;
	age: number;
	password: string;
	role: string;
	carts: ICart["_id"][];
}
