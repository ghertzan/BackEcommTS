import Carts from "../CartModel";

export class CartDao {
	static create = async (uid: string) => {
		try {
			const createdCart = new Carts({ userId: uid, items: [] });
			return createdCart;
		} catch (error) {
			throw new Error(error);
		}
	};
}
