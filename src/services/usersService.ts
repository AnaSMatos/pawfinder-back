import { insertUser, getUserByEmail, UserInfo, LogIn } from "../repositories/usersRepository.js";
import { generateToken } from "../utils/token.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv";

dotenv.config();

async function createUser(data:UserInfo){
    const {name, email, age, country, region, password} = data;

    const emailExists = await getUserByEmail(email);
    if(emailExists){
        throw{
            type: "conflict",
            message: "The email is already registered"
        }
    }

    const encryptedPassword = bcrypt.hashSync(password, +process.env.HASH)

    await insertUser({name, email, age, country, region, password: encryptedPassword})
}

async function findUser(data: LogIn){
    const {email, password} = data
    const user = await getUserByEmail(email)

    if(!user){
        throw{
            type: "notFound",
            message: "This user is not registered"
        }
    }

    const checkPassword = bcrypt.compareSync(password, user.password)
    if(!checkPassword){
        throw{
            type: "unauthorized",
            message: "Wrong password"
        }
    }

    const token = generateToken(user.id)
    return token;
}


const userServices = {
    createUser,
    findUser
}

export default userServices;