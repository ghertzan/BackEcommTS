import type { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
	static create = async (req: Request, res: Response) => {
		const newProduct = req.body;
		try {
			const createdProduct = await ProductService.create(newProduct);
			res.status(200).json({ payload: createdProduct });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};

	static getAll = async (req: Request, res: Response) => {
		try {
			const products = await ProductService.getAll();
			res.status(200).json({ payload: products });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	};

	static getById = async (req: Request, res: Response) => {
		const { pid } = req.params;

		try {
			const productFound = await ProductService.getById(pid);
			res.status(200).json({ payload: productFound });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	};
}
