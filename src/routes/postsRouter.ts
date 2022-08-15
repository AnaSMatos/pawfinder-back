import { Router } from "express";
import {getAllPosts, newPost, adopt} from "../controllers/postsController.js"

const postsRouter = Router()

postsRouter.get("/feed", getAllPosts)
postsRouter.post("/create", newPost)
postsRouter.get("/adopt/:id", adopt)

export default postsRouter;