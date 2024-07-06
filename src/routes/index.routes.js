import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js"
import taskRoutes from "./task.routes.js"

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes)
router.use("/tasks", taskRoutes)

export default router;
