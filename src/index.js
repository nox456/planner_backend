import express from "express";
import { HOST, PORT } from "./config/env.js";
import morgan from "morgan";
import routes from "./routes/index.routes.js";

console.clear();
const app = express();

// Middlewares
app.use(express.json())
app.use(morgan("dev"));

// Routes
app.use(routes);

// Start Server
app.listen(PORT, HOST, () => {
    console.log(`Server on http://${HOST}:${PORT}`);
});
