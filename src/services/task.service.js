import Task from "../models/task.model.js";
import User from "../models/user.model.js";
import Auth from "../models/auth.model.js"

export default class TaskService {
    static async save(data, token) {
        const user_id = Auth.decodeToken(token)
        const username = await User.getUsername(user_id);

        const userExists = await User.checkIfExists(username);
        if (!userExists) return { userNotExists: true };

        await Task.save(data, user_id);
    }
}
