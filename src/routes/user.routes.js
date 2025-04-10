import { Router } from "express";
import { registerUser, login } from "../controllers/user.controller.js";  // Import login

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);  // Use login function

export default router;

