import mongoose, { Schema, Document } from "mongoose";

//Poner Document hace heredar todas las propiedades y metodos del tipo Document
export type TProduct = Document & {
	title: string;
	description: string;
	code: string;
	price: number;
	status: boolean;
	stock: number;
	category: string;
	image: [string];
};

//Armado del esquema

const COLLECTION = "Products";

const ProductSchema: Schema = new Schema({
	title: {
		type: String,
		minLength: [3, "Deben ser más de 3 caracteres"],
		maxLenght: [25, "Máximo 25 carecteres"],
		required: true,
		index: true,
	},
	description: {
		type: String,
		minLength: [3, "Deben ser más de 3 caracteres"],
		maxLenght: [50, "Máximo 50 carecteres"],
		required: true,
	},
	code: {
		type: String,
		minLength: [3, "Deben ser más de 3 caracteres"],
		maxLenght: [10, "Máximo 10 carecteres"],
		required: true,
		index: true,
	},
	price: {
		type: Number,
		min: [0, "No puede ser negativo"],
		required: true,
	},
	status: {
		type: Boolean,
		default: true,
	},
	stock: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		minLength: [3, "Deben ser más de 3 caracteres"],
		maxLenght: [15, "Máximo 10 carecteres"],
		required: true,
	},
	image: [String],
});

//El generic <TSchema> es para referenciar los tipos del esquema, reduce los errores
const Products = mongoose.model<TProduct>(COLLECTION, ProductSchema);

export default Products;
