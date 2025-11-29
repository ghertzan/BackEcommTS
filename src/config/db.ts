import mongoose from "mongoose";
import colors from "colors";

export const initMongoDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_ATLAS_URL);
		const URL = `${conn.connection.host}:${conn.connection.port}`;
		console.log(colors.bgGreen.bold(`Mongo connection successful on: ${URL}`));
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};
