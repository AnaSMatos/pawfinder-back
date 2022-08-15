import {Request, Response} from "express"
import { UserInfo, LogIn } from "../repositories/usersRepository.js"
import userServices from "../services/usersService.js"

export async function signUp(req: Request, res: Response){
    const data: UserInfo = req.body

    await userServices.createUser(data)

    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response){
    const data: LogIn = req.body

    const token = await userServices.findUser(data)

    res.send(token).status(200)
}