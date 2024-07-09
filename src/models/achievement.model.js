import db from "../connections/database.js";

export default class Achievement {
    static async getAll(user_id) {
        let achievements;
        try {
            const data = await db.query("SELECT * FROM achievements");
            achievements = data.rows;
            for (const achievement of achievements) {
                const data2 = await db.query('SELECT progress FROM user_achievements WHERE "user" = $1 AND achievement = $2', [user_id, achievement.id])
                achievement.progress = data2.rows[0].progress
            }
        } catch (e) {
            console.error(e);
        }
        return achievements;
    }
    static async linkUser(user_id) {
        try {
            const data = await db.query("SELECT id FROM achievements");
            const achievements = data.rows;
            for (const achievement of achievements) {
                await db.query(
                    "INSERT INTO user_achievements VALUES (DEFAULT,$1,$2,DEFAULT)",
                    [user_id, achievement.id],
                );
            }
        } catch (e) {
            console.error(e);
        }
    }
}
