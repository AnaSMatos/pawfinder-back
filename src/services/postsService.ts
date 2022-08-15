import {getUserById} from "../repositories/usersRepository.js";
import { getPosts, getPostsWithType, postInfo} from "../repositories/postsRepository.js";

async function getPostsByRegion(id: number){
    const user = await getUserById(id);
    const country = user[0].country
    const region = user[0].region
    const posts = getPosts(country, region)
    return posts;    
}

async function getPostsByRegionAndType(id: number, type){
    const user = await getUserById(id);
    const country = user[0].country
    const region = user[0].region
    const posts = getPostsWithType(country, region, type)
    return posts;   
}


const postServices = {
    getPostsByRegion,
    getPostsByRegionAndType
}

export default postServices;