import { Router } from "express";
import { CartController } from "../controllers/CartController";
import { userExistValidator } from "../middlewares/usersValidator";

const router = Router();

router.post("/:uid", userExistValidator, CartController.create);

export default router;
