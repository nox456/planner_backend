import { Router } from "express"
import TaskController from "../controllers/task.controller.js"

const router = Router()

router.post("/save", TaskController.save)
router.put("/done", TaskController.setDone)

export default router
