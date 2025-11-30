import { IUser } from "../../interfaces/IUser";
import Users from "../UserModel";

export class UserDao {
	static create = async (newUser: IUser) => {
		try {
			const createdUser = new Users(newUser);
			return await createdUser.save();
		} catch (error) {
			throw new Error(error);
		}
	};

	static getAll = async () => {
		try {
			const users = await Users.find({});
			return users;
		} catch (error) {
			throw new Error(error);
		}
	};

	static getById = async (uid: string) => {
		try {
			const userFound = await Users.findById(uid);
			return userFound;
		} catch (error) {
			throw new Error(error);
		}
	};
}
