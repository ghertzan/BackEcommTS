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

	static getAll = async () => {
		try {
			return await UserDao.getAll();
		} catch (error) {
			throw new Error(error);
		}
	};

	static getById = async (uid: string) => {
		try {
			return await UserDao.getById(uid);
		} catch (error) {
			throw new Error(error);
		}
	};
}
