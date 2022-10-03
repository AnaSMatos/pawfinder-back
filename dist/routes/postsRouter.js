import { Router } from "express";
import { getAllPosts, newPost, adopt } from "../controllers/postsController.js";
var postsRouter = Router();
postsRouter.get("/feed", getAllPosts);
postsRouter.post("/create", newPost);
postsRouter.get("/adopt/:id", adopt);
export default postsRouter;
