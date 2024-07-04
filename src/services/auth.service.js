import Auth from "../models/auth.model.js"
import User from "../models/user.model.js"

export default class AuthService {
    static async signup(username,password) {
        const userExists = await User.checkIfExists(username)
        if (userExists) return { userExists: true }

        const encryptedPassword = await Auth.encryptPassword(password)

        const id = await Auth.signup(username,encryptedPassword)
        const token = await Auth.generateToken(id) 

        return {token}
    }
}
