import { IUser } from "../interfaces/IUser";
import { Schema, model, Types } from "mongoose";
import { roles } from "./dictionaries/Roles";

const COLLECTION = "Users";

const UserSchema: Schema = new Schema<IUser>(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		age: {
			type: Number,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: Object.values(roles),
			default: roles.GUEST,
		},
		carts: [
			{
				type: Types.ObjectId,
				ref: "Carts",
			},
		],
	},
	{ timestamps: true }
);

const Users = model<IUser>(COLLECTION, UserSchema);
export default Users;
