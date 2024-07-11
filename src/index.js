import express from "express";
import { HOST, PORT,FRONTEND_HOST } from "./config/env.js";
import morgan from "morgan";
import routes from "./routes/index.routes.js";
import cookie_parser from "cookie-parser"

console.clear();
const app = express();

// Middlewares
app.use(express.json())
app.use(morgan("dev"));
app.use(cookie_parser())
app.use((_,res,next) => {
    res.set({
        'Access-Control-Allow-Origin': FRONTEND_HOST,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': '*'
    })
    next()
})

// Routes
app.use(routes);

// Start Server
app.listen(PORT, HOST, () => {
    console.log(`Server on http://${HOST}:${PORT}`);
});
