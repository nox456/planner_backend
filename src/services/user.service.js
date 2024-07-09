import User from "../models/user.model.js";
import Auth from "../models/auth.model.js";
import Achievement from "../models/achievement.model.js";
import Requirement from "../models/requirement.model.js";

export default class UserService {
    static async getInfo(token) {
        const id = Auth.decodeToken(token);

        const username = await User.getUsername(id);

        const userExists = await User.checkIfExists(username);
        if (!userExists) return { userNotExists: true };

        const info = await User.getInfo(id);
        const achievements = await Achievement.getAll(id)
        info.achievements = 0
        for (const achievement of achievements) {
            const requirement = await Requirement.getById(achievement.requirement)
            if (achievement.progress >= requirement.value) {
                info.achievements++
            }
        }

        return { info };
    }
    static async delete(token,password) {
        const id = Auth.decodeToken(token)

        const username = await User.getUsername(id);

        const userExists = await User.checkIfExists(username);
        if (!userExists) return { userNotExists: true, id };

        const matchPassword = await Auth.comparePassword(username,password)
        if (!matchPassword) return { passwordNotMatched: true }

        await User.delete(id)
    }
}
