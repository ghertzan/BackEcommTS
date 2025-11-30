import { CartDao } from "../models/daos/CartDao";

export class CartService {
	static create = async (uid: string) => {
		try {
			return await CartDao.create(uid);
		} catch (error) {
			throw new Error(error);
		}
	};
}
