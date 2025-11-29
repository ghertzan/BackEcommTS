import { Document } from "mongoose";

export interface IProduct extends Document {
	title: string;
	description: string;
	code: string;
	price: number;
	status: boolean;
	stock: number;
	category: string;
	image: [string];
}
