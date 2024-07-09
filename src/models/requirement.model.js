import db from "../connections/database.js"

export default class Requirement {
    static async getById(id) {
        let requirement
        try {
            const data = await db.query("SELECT * FROM requirements WHERE id = $1", [id])
            requirement = data.rows[0]
        } catch(e) {
            console.error(e)
        }
        return requirement
    }
}
