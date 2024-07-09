import Auth from "../models/auth.model.js";
import User from "../models/user.model.js";
import Achievement from "../models/achievement.model.js";

export default class AuthService {
    static async signup(username, password) {
        const userExists = await User.checkIfExists(username);
        if (userExists) return { userExists: true };

        const encryptedPassword = await Auth.encryptPassword(password);

        const id = await Auth.signup(username, encryptedPassword);
        const token = Auth.generateToken(id);

        await Achievement.linkUser(id)

        return { token };
    }
    static async signin(username, password) {
        const userExists = await User.checkIfExists(username);
        if (!userExists) return { userNotExists: true };

        const matchPassword = await Auth.comparePassword(username, password);
        if (!matchPassword) return { passwordNotMatched: true };

        const id = await User.getId(username);
        const token = Auth.generateToken(id);

        return { token };
    }
}
