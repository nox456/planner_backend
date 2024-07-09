import AchievementService from "../services/achievements.service.js";

export default class AchievementController {
    static async getUnfinished(req, res) {
        const { token } = req.cookies;
        let result;
        try {
            result = await AchievementService.getAll(token);
            result = result.filter((a) => {
                const [progress, value] = a.progress.split("/");
                return progress != value;
            });
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result.length == 0) {
            return res
                .status(404)
                .json({ message: "Achievements unfinished not founded!" });
        } else {
            return res
                .status(200)
                .json({
                    message: "Achievements unfinished Founded!",
                    data: result,
                });
        }
    }
    static async getFinished(req, res) {
        const { token } = req.cookies;
        let result;
        try {
            result = await AchievementService.getAll(token);
            result.filter((a) => {
                const [progress, value] = a.progress.split("/");
                return progress == value;
            });
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result.length == 0) {
            return res
                .status(404)
                .json({ message: "Achievements finished not founded!" });
        } else {
            return res
                .status(200)
                .json({
                    message: "Achievements finished Founded!",
                    data: result,
                });
        }
    }
}
