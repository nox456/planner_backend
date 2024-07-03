if (!process.env.HOST) {
    throw new Error("Env var HOST not defined!");
}
if (!process.env.PORT) {
    throw new Error("Env var PORT not defined!");
}
if (!process.env.DB_URL) {
    throw new Error("Env var DB_URL not defined!")
}

export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
