import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { SAMESITE_COOKIES, SECURE_COOKIES } from "../config/env.js";

const router = Router();

router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);
router.get("/is-authenticated", (req, res) => {
    if (!req.cookies.token)
        return res.status(401).json({ message: "Unauthorized!" });
    return res.status(200).json({ message: "User authenticated!" });
});
router.get("/logout", (req, res) => {
    res.clearCookie("token", { httpOnly: true, secure: SECURE_COOKIES === "true", sameSite: SAMESITE_COOKIES}).json({ message: "Logout!" });
});

export default router;
