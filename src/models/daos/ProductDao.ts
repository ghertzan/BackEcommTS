import { IProduct } from "../../interfaces/IProduct";
import Products from "../ProductModel";
export class ProductDao {
	static create = async (product: IProduct) => {
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

	static update = async (pid: string, toUpdateProd: IProduct) => {
		try {
			const updatedProd = await Products.findByIdAndUpdate(pid, toUpdateProd, {
				new: true,
			});
			if (!updatedProd) return null;
			await updatedProd.save();
			return updatedProd;
		} catch (error) {
			throw new Error(error);
		}
	};

	static delete = async (pid: string) => {
		try {
			const deletedProd = await Products.findById(pid);
			if (!deletedProd) return null;
			await deletedProd.deleteOne();
			return deletedProd;
		} catch (error) {
			throw new Error(error);
		}
	};
}
