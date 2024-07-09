import db from "../connections/database.js";

export default class Task {
    static async save(data, user_id) {
        const { name, course, topic, evaluation, finish_date } = data;
        try {
            await db.query(
                "INSERT INTO tasks VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,DEFAULT)",
                [user_id, name, course, topic, evaluation, finish_date],
            );
        } catch (e) {
            console.error(e);
        }
    }
    static async setDone(id) {
        try {
            await db.query("UPDATE tasks SET is_done = true WHERE id = $1", [id])
        } catch(e) {
            console.error(e)
        }
    }
    static async checkIfExists(id) {
        let exists
        try {
            const data = await db.query("SELECT count(*) FROM tasks WHERE id = $1", [id])
            exists = data.rows[0].count > 0 
        } catch(e) {
            console.error(e)
        }
        return exists
    }
    static async delete(id) {
        try {
            await db.query("DELETE FROM tasks WHERE id = $1", [id])
        } catch(e) {
            console.error(e)
        }
    }
}
