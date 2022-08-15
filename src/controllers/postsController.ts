import {Request, Response} from "express"
import { decodeToken } from "../utils/token.js";
import postsServices from "../services/postsService.js"
import { postPost, postInfo} from "../repositories/postsRepository.js";

export async function getAllPosts(req: Request, res: Response){
    const token = req.headers.authorization
    const {type} = req.query
    const id = await decodeToken(token).userId
    let posts;
    if(!type){
        posts = await postsServices.getPostsByRegion(id)
    }
    else{
        posts = await postsServices.getPostsByRegionAndType(id, type)
    }

    res.send(posts).status(200)
}


export async function newPost(req: Request, res: Response){
    const token = req.headers.authorization
    const id = await decodeToken(token).userId
    const info = {...req.body, userId: id}

    await postPost(info)

    res.sendStatus(201)
}

export async function adopt(req: Request, res: Response) {
    const recipientId = Number(req.params.id)
    const token = req.headers.authorization

    const emails = await postsServices.getEmail(recipientId)

    res.send(emails).status(200)
}