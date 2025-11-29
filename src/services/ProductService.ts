import { ProductDao } from "../models/daos/ProductDao";
import { TProduct } from "../models/ProductModel";

export class ProductService {
	static create = async (product: TProduct) => {
		try {
			return await ProductDao.create(product);
		} catch (error) {
			throw new Error(error);
		}
	};

	static getAll = async () => {
		try {
			return await ProductDao.getAll();
		} catch (error) {
			throw new Error(error);
		}
	};

	static getById = async (pid: string) => {
		try {
			return await ProductDao.getById(pid);
		} catch (error) {
			throw new Error(error);
		}
	};
}
