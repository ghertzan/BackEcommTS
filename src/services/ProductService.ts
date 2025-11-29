import { ProductDao } from "../models/daos/ProductDao";
import { IProduct } from "../interfaces/IProduct";

export class ProductService {
	static create = async (product: IProduct) => {
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

	static update = async (pid: string, toUpdateProd: IProduct) => {
		try {
			return await ProductDao.update(pid, toUpdateProd);
		} catch (error) {
			throw new Error(error);
		}
	};
	static delete = async (pid: string) => {
		try {
			return await ProductDao.delete(pid);
		} catch (error) {
			throw new Error(error);
		}
	};
}
