if (!process.env.DB_URL) {
    throw new Error("Env var DB_URL not defined!")
}
if (!process.env.JWT_SECRET) {
    throw new Error("Env var JWT_SECRET not defined!")
}
if (!process.env.FRONTEND_HOST) {
    throw new Error("Env var FRONTEND_HOST not defined!")
}
if (!process.env.SECURE_COOKIES) {
    throw new Error("Env var SECURE_COOKIES not defined")
}

export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const FRONTEND_HOST = process.env.FRONTEND_HOST
export const SECURE_COOKIES = process.env.SECURE_COOKIES
