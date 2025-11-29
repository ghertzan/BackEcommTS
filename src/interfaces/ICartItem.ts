import { IProduct } from "./IProduct";

export interface ICartItem {
	product: IProduct["_id"];
	quantity: number;
}
