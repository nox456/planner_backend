import db from "../connections/database.js"
import bcryptjs from "bcryptjs"

export default class Auth {
    static async signup(username,password) {
        try {
            await db.query("INSERT INTO users VALUES (DEFAULT, $1, $2, DEFAULT)", [username,password])
        } catch(e) {
            console.error(e)
        }
    }
    static async encryptPassword(password) {
        const salt = await bcryptjs.genSalt()
        const encryptedPassword = await bcryptjs.hash(password,salt)
        return encryptedPassword
    }
}
