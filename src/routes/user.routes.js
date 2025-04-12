import { Router } from "express";
import { registerUser, login } from "../controllers/user.controller.js";  // Import login
import { upload } from "../midllewares/multer.middleware.js"

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser);

router.route("/login").post(login);  // Use login function

export default router;

