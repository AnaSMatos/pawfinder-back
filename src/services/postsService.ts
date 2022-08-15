import {getUserById} from "../repositories/usersRepository.js";
import { getPosts, getPostsWithType, postInfo} from "../repositories/postsRepository.js";

async function getPostsByRegion(id: number){
    const user = await getUserById(id);
    const country = user.country
    const region = user.region
    const posts = getPosts(country, region)
    return posts;    
}

async function getPostsByRegionAndType(id: number, type){
    const user = await getUserById(id);
    const country = user.country
    const region = user.region
    const posts = getPostsWithType(country, region, type)
    return posts;   
}

async function getEmail(recipientId: number){
    const recipientEmail = (await getUserById(recipientId)).email

    return recipientEmail
}


const postServices = {
    getPostsByRegion,
    getPostsByRegionAndType,
    getEmail
}

export default postServices;