import { Router } from "express";
import AchievementController from "../controllers/achievement.controller.js";

const router = Router()

router.get("/", AchievementController.getAll)

export default router
