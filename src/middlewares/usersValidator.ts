import type { Request, Response, NextFunction } from "express";
import { UserService } from "../services/UserService";
import { IUser } from "../interfaces/IUser";

declare global {
	namespace Express {
		interface Request {
			user: IUser;
		}
	}
}

export async function userExistValidator(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { uid } = req.params;
	try {
		const userFound = await UserService.getById(uid);
		if (!userFound) {
			const error = new Error("No encontrado");
			return res.status(404).json({ error: error.message });
		}
		req.user = userFound;
		next();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
