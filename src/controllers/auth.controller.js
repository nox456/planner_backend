import AuthService from "../services/auth.service.js";

export default class AuthController {
    static async signup(req, res) {
        const { username, password } = req.body;
        let result;
        try {
            result = await AuthService.signup(username, password);
        } catch (e) {
            console.error(e);
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
        if (result?.userExists) {
            return res
                .status(401)
                .json({ message: "User already exists!", data: username });
        } else {
            res.cookie("token", result.token, { httpOnly: true, secure: true });
            return res.status(200).json({ message: "User created!" });
        }
    }
}
