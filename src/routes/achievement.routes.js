import { Router } from "express";
import AchievementController from "../controllers/achievement.controller.js";

const router = Router()

router.get("/unfinished", AchievementController.getUnfinished)
router.get("/finished", AchievementController.getFinished)

export default router
