import express from "express";
import dotenv from "dotenv";
import { initMongoDb } from "./config/db";
import productRoutes from "./routes/ProductRoutes";

dotenv.config();
initMongoDb();

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

export default app;
