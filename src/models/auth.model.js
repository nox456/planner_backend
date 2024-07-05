import db from "../connections/database.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export default class Auth {
    static async signup(username, password) {
        let id
        try {
            const data = await db.query(
                "INSERT INTO users VALUES (DEFAULT, $1, $2, DEFAULT) RETURNING id",
                [username, password],
            );
            id = data.rows[0].id
        } catch (e) {
            console.error(e);
        }
        return id
    }
    static async encryptPassword(password) {
        const salt = await bcryptjs.genSalt();
        const encryptedPassword = await bcryptjs.hash(password, salt);
        return encryptedPassword;
    }
    static generateToken(id) {
        return jwt.sign(id, JWT_SECRET);
    }
    static async comparePassword(username,password) {
        let matchPassword
        try {
            const data = await db.query("SELECT password FROM users WHERE username = $1", [username])
            const storedPassword = data.rows[0].password

            matchPassword = await bcryptjs.compare(password,storedPassword)
        } catch(e) {
            console.error(e)
        }
        return matchPassword
    }
}
