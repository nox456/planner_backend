import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router()

router.get("/info", UserController.getInfo)
router.delete("/", UserController.delete)

export default router
