import express from "express";
import { HOST, PORT } from "./config/env.js";
import morgan from "morgan";

console.clear()
const app = express();

// Middlewares
app.use(morgan("dev"))

// Start Server
app.listen(PORT,HOST, () => {
    console.log(`Server on http://${HOST}:${PORT}`)
})
