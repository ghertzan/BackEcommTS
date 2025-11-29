import { IUser } from "../interfaces/IUser";
import { UserDao } from "../models/daos/UserDao";

export class UserService {
	static create = async (newUser: IUser) => {
		try {
			return await UserDao.create(newUser);
		} catch (error) {
			throw new Error(error);
		}
	};
}
