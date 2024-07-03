if (!process.env.HOST) {
    throw new Error("Env var HOST not defined!");
}
if (!process.env.PORT) {
    throw new Error("Env var PORT not defined!");
}
if (!process.env.DB_NAME) {
    throw new Error("Env var DB_NAME not defined!")
}
if (!process.env.DB_PASSWORD) {
    throw new Error("Env var DB_PASSWORD not defined!")
}
if (!process.env.DB_HOST) {
    throw new Error("Env var DB_HOST not defined!")
}
if (!process.env.DB_PORT) {
    throw new Error("Env var DB_PORT not defined!")
}

export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_NAME = process.env.DB_NAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_PORT = process.env.DB_PORT;
