import { Router } from "express"
import TaskController from "../controllers/task.controller.js"

const router = Router()

router.post("/save", TaskController.save)

export default router
