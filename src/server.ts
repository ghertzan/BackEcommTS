import express from "express";
import dotenv from "dotenv";
import { initMongoDb } from "./config/db";
import productRoutes from "./routes/ProductRoutes";
import userRoutes from "./routes/UserRoutes";
import cartRoutes from "./routes/CartRoutes";

dotenv.config();
initMongoDb();

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/carts", cartRoutes);

export default app;
