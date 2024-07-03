import db from "../connections/database.js"

export default class User {
    static async checkIfExists(username) {
        let exists
        try {
            const data = await db.query("SELECT count(*) FROM users WHERE username = $1", [username])
            exists = data.rows[0].count > 0
        } catch(e) {
            console.error(e)
        }
        return exists
    }
}
