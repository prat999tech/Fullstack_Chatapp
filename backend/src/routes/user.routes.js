import Router from "express"
import { login } from "../controllers/user.controller.js"
import { signup } from "../controllers/user.controller.js"
import { logoutUser } from "../controllers/user.controller.js"
import { changepassword } from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"
const router=Router()
router.post("/login",login)
router.post("/signup",signup)
router.route("/logout").post(verifyJWT,sendMessage)

router.route("/changepassword").patch(verifyJWT,changepassword)
export default router