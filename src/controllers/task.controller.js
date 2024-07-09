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
    static async setDone(req, res) {
        const { id } = req.query;
        let result;
        try {
            result = await TaskService.setDone(id);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result?.taskNotExists) {
            return res
                .status(404)
                .json({ message: "Task doesn't exists!", data: id });
        } else {
            return res.status(200).json({ message: "Task doned!" });
        }
    }
    static async delete(req, res) {
        const { id } = req.query;
        let result;
        try {
            result = await TaskService.delete(id);
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result?.taskNotExists) {
            return res
                .status(404)
                .json({ message: "Task doesn't exists!", data: id });
        } else {
            return res.status(200).json({ message: "Task deleted!" });
        }
    }
}
