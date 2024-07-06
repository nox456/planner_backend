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
}
