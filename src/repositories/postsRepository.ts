import prisma from "../database.js";

export interface postInfo {
    userId: number,
    animalName: string,
    animalType: string,
    animalAge: number,
    description: string,
    image: string
}

export async function getPosts(country: string, region:string){
    const posts = await prisma.$queryRaw`
        SELECT posts.*, users.country, users.region
        FROM posts
        JOIN users ON posts."userId" = users.id
        WHERE country = ${country} AND region = ${region}
        ORDER BY id DESC
    `

    return posts
}

export async function getPostsWithType(country: string, region: string, type){
    const posts = await prisma.$queryRaw`
        SELECT posts.*, users.country, users.region
        FROM posts
        JOIN users ON posts."userId" = users.id
        WHERE country = ${country} AND region = ${region} AND "animalType" = ${type}
        ORDER BY id DESC
    `

    return posts
}

export async function postPost(info: postInfo){
    await prisma.posts.create({
        data: info
    })
}