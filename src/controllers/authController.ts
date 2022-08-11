import {Request, Response} from "express"
import { UserInfo } from "../repositories/usersRepository.js"
import userServices from "../services/usersService.js"

export async function signUp(req: Request, res: Response){
    const data: UserInfo = req.body

    await userServices.createUser(data)

    res.sendStatus(201)
}