import db from "../connections/database.js";
import { USER_TASKS } from "./queries.js";

export default class User {
    static async checkIfExists(username) {
        let exists;
        try {
            const data = await db.query(
                "SELECT count(*) FROM users WHERE username = $1",
                [username],
            );
            exists = data.rows[0].count > 0;
        } catch (e) {
            console.error(e);
        }
        return exists;
    }
    static async getId(username) {
        let id;
        try {
            const data = await db.query(
                "SELECT id FROM users WHERE username = $1",
                [username],
            );
            id = data.rows[0].id;
        } catch (e) {
            console.error(e);
        }
        return id;
    }
    static async getUsername(id) {
        let username
        try {
            const data = await db.query("SELECT username FROM users WHERE id = $1", [id])
            username = data.rows[0].username
        } catch(e) {
            console.error(e)
        }
        return username
    }
    static async getInfo(id) {
        let info;
        try {
            const data1 = await db.query("SELECT username,score FROM users WHERE id = $1", [id]);
            const user_info = data1.rows[0];
            const data2 = await db.query(USER_TASKS, [id]);
            const user_tasks = data2.rows;
            info = {
                ...user_info,
                tasks: user_tasks,
            };
        } catch (e) {
            console.error(e);
        }
        return info;
    }
    static async delete(id) {
        try {
            await db.query("DELETE FROM users WHERE id = $1", [id])
        } catch(e) {
            console.error(e)
        }
    }
    static async addScore(id,points) {
        try {
            await db.query("UPDATE users SET score = score + $1 WHERE id = $2", [points, id])
        } catch(e) {
            console.error(e)
        }
    }
}
