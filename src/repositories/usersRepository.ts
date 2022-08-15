import prisma from "../database.js";

export interface User {
    id: number,
    name: string,
    email: string,
    age: number,
    country: string,
    region: string,
    password: string
}

export interface LogIn{
    email: string,
    password: string
}

export type UserInfo = Omit<User, "id">


export async function insertUser(userData: UserInfo){
    const {name, email, age, country, region, password} = userData;

    await prisma.users.create({
        data: {
            name, email, age, country, region, password
        }
    })
}

export async function getUserByEmail(email: string){
    const user = await prisma.users.findMany({where: {email}})

    return user
}

export async function getUserById(id: number){
    const user = await prisma.users.findMany({where: {id}})

    return user
}