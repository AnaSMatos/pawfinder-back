import { insertUser, getUserByEmail, UserInfo } from "../repositories/usersRepository.js";
import { generateToken } from "../utils/token.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv";

dotenv.config();

async function createUser(data:UserInfo){
    const {name, email, age, country, region, password} = data;

    const emailExists = await getUserByEmail(email);
    if(emailExists.length > 0){
        throw{
            type: "conflict",
            message: "The email is already registered"
        }
    }

    const encryptedPassword = bcrypt.hashSync(password, +process.env.HASH)

    await insertUser({name, email, age, country, region, password: encryptedPassword})
}


const userServices = {
    createUser
}

export default userServices;