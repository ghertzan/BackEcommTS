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
}
