import Achievement from "../models/achievement.model.js";
import Requirement from "../models/requirement.model.js";
import Auth from "../models/auth.model.js";

export default class AchievementService {
    static async getAll(token) {
        const id = Auth.decodeToken(token);

        const achievements = await Achievement.getAll(id);
        const fullAchievements = [];

        for (const achievement of achievements) {
            const requirement = await Requirement.getById(
                achievement.requirement,
            );
            fullAchievements.push({
                name: achievement.name,
                reward: achievement.reward,
                progress: `${achievement.progress}/${requirement.value}`,
                requirement: requirement.name,
            });
        }
        return fullAchievements;
    }
}
