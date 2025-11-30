import { CartService } from "../services/CartService";
import type { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class CartController {
	static create = async (req: Request, res: Response) => {
		try {
			const createdCart = await CartService.create(req.user._id.toString());
			res.status(200).json({ message: "Creado", payload: createdCart });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	};
}
