import { Router } from "express";
import { ProductController } from "../controllers/ProducrController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middlewares/validation";

const router = Router();

router.post(
	"/",
	body("title").notEmpty().withMessage("Title obligatorio"),
	body("description").notEmpty().withMessage("description obligatorio"),
	body("code").notEmpty().withMessage("code obligatorio"),
	body("price").notEmpty().withMessage("price obligatorio"),
	body("stock").notEmpty().withMessage("stock obligatorio"),
	body("category").notEmpty().withMessage("category obligatorio"),
	handleInputErrors,
	ProductController.create
);
router.get("/", ProductController.getAll);
router.get(
	"/:pid",
	param("pid").isMongoId().withMessage("Id de producto no válido"),
	handleInputErrors,
	ProductController.getById
);

export default router;
