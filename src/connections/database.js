import pg from "pg"
import {DB_PORT,DB_PASSWORD,DB_NAME,DB_HOST} from "../config/env.js"

const db = new pg.Pool({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    password: DB_PASSWORD
})

export default db
