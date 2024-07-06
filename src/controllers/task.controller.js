import TaskService from "../services/task.service.js";

export default class TaskController {
    static async save(req, res) {
        const { data } = req.body;
        const { token } = req.cookies;
        let result;
        try {
            result = await TaskService.save(data, token);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result?.userNotExists) {
            return res
                .status(404)
                .json({ message: "User doesn't exists!", data: user_id });
        } else {
            return res.status(200).json({ message: "Task Created!" });
        }
    }
}
