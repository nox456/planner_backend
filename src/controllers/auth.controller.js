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
                .status(400)
                .json({ message: "User already exists!", data: username });
        } else {
            res.cookie("token", result.token, { httpOnly: true, sameSite: false });
            return res.status(200).json({ message: "User created!" });
        }
    }
    static async signin(req, res) {
        console.log(req.cookies)
        if (req.cookies.token)
            return res.status(200).json({ message: "User authenticated!" });
        const { username, password } = req.body;
        let result;
        try {
            result = await AuthService.signin(username, password);
        } catch (e) {
            console.error(e);
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
        if (result?.userNotExists) {
            return res
                .status(404)
                .json({ message: "User doesn't exists!", data: username });
        } else if (result?.passwordNotMatched) {
            return res
                .status(401)
                .json({ message: "Password incorrect!", data: password });
        } else {
            res.cookie("token", result.token, { httpOnly: true, sameSite: false  });
            return res.status(200).json({ message: "User authenticated!" });
        }
    }
}
