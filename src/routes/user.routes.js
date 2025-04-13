import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken} from "../controllers/user.controller.js";  // Import login
import { upload } from "../middleware/multer.middleware.js"
import { verifyJWT } from "../middleware/auth.middleware.js";



const router = Router();

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },        // ✅ changed to lowercase
        { name: "coverImage", maxCount: 1 }
      ]),
    registerUser);

router.route("/login").post(loginUser);  // Use login function

// secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)




export default router;

