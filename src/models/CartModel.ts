import { ICart } from "../interfaces/ICart";
import mongoose, { Schema, Types, model } from "mongoose";

const COLLECTION = "Carts";

const CartShema: Schema = new Schema<ICart>(
	{
		userId: {
			type: Types.ObjectId,
			ref: "Users",
			required: true,
		},
		items: [
			{
				product: {
					type: Types.ObjectId,
					ref: "Products",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 0,
					default: 0,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

const Carts = model<ICart>(COLLECTION, CartShema);
export default Carts;
