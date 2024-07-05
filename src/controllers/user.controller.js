import UserService from "../services/user.service.js";

export default class UserController {
    static async getInfo(req, res) {
        const { token } = req.cookies;
        let result;
        try {
            result = await UserService.getInfo(token);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result.userNotExists) {
            return res
                .status(404)
                .json({ message: "User doesn't exists!", data: token });
        } else {
            return res
                .status(200)
                .json({ message: "User info", data: result.info });
        }
    }
}
