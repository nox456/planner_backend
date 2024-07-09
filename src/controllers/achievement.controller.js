import AchievementService from "../services/achievements.service.js";

export default class AchievementController {
    static async getAll(req,res) {
        const {token} = req.cookies
        let result
        try {
            result = await AchievementService.getAll(token)
        } catch(e) {
            console.error(e)
            return res.status(500).json({message: "Internal Server Error"})
        }
        return res.status(200).json({message: "Achievements Founded!", data: result})
    }
}
