/*import { Router } from "express"

const router = Router()

// Simple test route
router.get("/test", (req, res) => {
    console.log("Test route hit!");
    res.status(200).json({ 
        message: "Test route working!",
        timestamp: new Date().toISOString()
    });
});

console.log("Test route registered");

export default router
*/



import { Router } from "express"
import { login, signup, logoutUser, changepassword, allUsers } from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()



router.post("/signup", signup)
router.post("/login", login)
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/changepassword").patch(verifyJWT, changepassword)
router.route("/allusers").get(verifyJWT,allUsers)

export default router

