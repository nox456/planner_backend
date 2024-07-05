import User from "../models/user.model.js";
import Auth from "../models/auth.model.js";

export default class UserService {
    static async getInfo(token) {
        const id = Auth.decodeToken(token);

        const username = await User.getUsername(id);

        const userExists = await User.checkIfExists(username);
        if (!userExists) return { userNotExists: true };

        const info = await User.getInfo(id);

        return { info };
    }
}
