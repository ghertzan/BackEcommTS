import mongoose from "mongoose";
import Products, { TProduct } from "../ProductModel";

export class ProductDao {
	static create = async (product: TProduct) => {
		try {
			const newProduct = new Products(product);
			return await newProduct.save();
		} catch (error) {
			throw new Error(error);
		}
	};

	static getAll = async () => {
		try {
			return await Products.find({});
		} catch (error) {
			throw new Error(error);
		}
	};

	static getById = async (pid: string) => {
		try {
			return await Products.findById(pid);
		} catch (error) {
			throw new Error(error);
		}
	};
}
