import { Router } from "express";
import {signUp, signIn} from "../controllers/authController.js"
import {validateSchema} from "../middlewares/validateSchema.js"
import signUpSchema from "../schemas/signUpSchema.js";

const authRouter = Router()

authRouter.post("/sign-in", signIn)
authRouter.post("/sign-up", validateSchema(signUpSchema) ,signUp)

export default authRouter;