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
}
