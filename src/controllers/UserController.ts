import type { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
	static create = async (req: Request, res: Response) => {
		const newUser = req.body;
		try {
			const createdUser = await UserService.create(newUser);
			res
				.status(200)
				.json({ message: "Usuario creado", payload: createdUser._id });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	};
	static getAll = async (req: Request, res: Response) => {
		try {
			const users = await UserService.getAll();
			if (!users)
				return res
					.status(404)
					.json({ message: "No encontrado", payload: null });
			res.status(200).json({ message: "Listado", payload: users });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	};

	static getById = async (req: Request, res: Response) => {
		const { uid } = req.params;
		try {
		} catch (error) {}
	};
}
