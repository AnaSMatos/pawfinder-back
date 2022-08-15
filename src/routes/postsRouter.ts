import { Router } from "express";
import {getAllPosts, newPost} from "../controllers/postsController.js"

const postsRouter = Router()

postsRouter.get("/feed", getAllPosts)
postsRouter.post("/create", newPost)

export default postsRouter;