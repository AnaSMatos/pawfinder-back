import { Router } from "express";
import {signUp} from "../controllers/authController.js"
import {validateSchema} from "../middlewares/validateSchema.js"

const authRouter = Router()

authRouter.post("/sign-up", signUp)
// authRouter.post("/sign-in", signIn)

export default authRouter;