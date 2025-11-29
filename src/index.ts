import server from "./server";
import colors from "colors";

const PORT = process.env.PORT || 8080;

server.listen(PORT, (err) => {
	if (err) {
		console.error(`Error: ${err.message}`);
		return 1;
	}
	console.log(`Server running on PORT: ${PORT}`);
});
