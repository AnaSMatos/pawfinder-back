import { Router } from "express";
import {getAllPosts, newPost, adopt} from "../controllers/postsController.js"
import { validateToken } from "../middlewares/validateToken.js";

const postsRouter = Router()

postsRouter.get("/feed", validateToken, getAllPosts)
postsRouter.post("/create", newPost)
postsRouter.get("/adopt/:id", validateToken, adopt)

export default postsRouter;