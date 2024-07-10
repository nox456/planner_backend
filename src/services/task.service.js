import Task from "../models/task.model.js";
import User from "../models/user.model.js";
import Auth from "../models/auth.model.js";
import Achievement from "../models/achievement.model.js";
import Requirement from "../models/requirement.model.js";

export default class TaskService {
    static async save(data, token) {
        const user_id = Auth.decodeToken(token);
        const username = await User.getUsername(user_id);

        const userExists = await User.checkIfExists(username);
        if (!userExists) return { userNotExists: true };

        await Task.save(data, user_id);
    }
    static async setDone(id, token) {
        const taskExists = await Task.checkIfExists(id);
        if (!taskExists) return { taskNotExists: true };

        const user_id = Auth.decodeToken(token);
        await Achievement.addProgress(user_id);
        await User.addScore(user_id, 1);

        const achievements = await Achievement.getAll(user_id);

        for (const achievement of achievements) {
            const requirement = await Requirement.getById(
                achievement.requirement,
            );
            if (achievement.progress == requirement.value) {
                await User.addScore(user_id, achievement.reward);
            }
        }

        await Task.setDone(id);
    }
    static async delete(id) {
        const taskExists = await Task.checkIfExists(id);
        if (!taskExists) return { taskNotExists: true };

        await Task.delete(id);
    }
}
