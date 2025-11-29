import type { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
	static create = async (req: Request, res: Response) => {
		const newProduct = req.body;
		try {
			const createdProduct = await ProductService.create(newProduct);
			res.status(200).json({ message: "Creado", payload: createdProduct });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};

	static getAll = async (req: Request, res: Response) => {
		try {
			const products = await ProductService.getAll();
			res.status(200).json({ message: "Encontrado", payload: products });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	};

	static getById = async (req: Request, res: Response) => {
		const { pid } = req.params;

		try {
			const productFound = await ProductService.getById(pid);

			res.status(200).json({ message: "Encontrado", payload: productFound });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	};

	static update = async (req: Request, res: Response) => {
		const { pid } = req.params;
		const toUpdateProd = req.body;
		try {
			const updatedProd = await ProductService.update(pid, toUpdateProd);
			if (!updatedProd) {
				return res.status(404).json({ error: "No encontrado" });
			}

			res.status(200).json({ message: "Actualizado", payload: updatedProd });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	};

	static delete = async (req: Request, res: Response) => {
		const { pid } = req.params;
		try {
			const deletedProd = await ProductService.delete(pid);
			if (!deletedProd) {
				return res.status(404).json({ error: "No encontrado" });
			}
			res.status(200).json({ message: "Eliminado", payload: deletedProd });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	};
}
