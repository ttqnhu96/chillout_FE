import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class PostService extends BaseService {
    //Create post
    createPost = (newPost) => {
        return this.post(FUNCTION_CONSTANTS.POST, newPost);
    }

    //Get post list on wall
    getPostListWall = (request) => {
        return this.post(`${FUNCTION_CONSTANTS.POST}/${URL_CONSTANTS.GET_POST_LIST_WALL}`, request);
    }
}


export const postService = new PostService();