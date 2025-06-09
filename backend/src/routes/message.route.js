import {Router} from "express"
import { sendMessage } from "../controllers/message.controller.js"
const router=Router()
router.route("/send/:id").post(sendMessage)
export default router;