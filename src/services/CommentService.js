import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class CommentService extends BaseService {
    //Create comment
    createComment = (newComment) => {
        return this.post(FUNCTION_CONSTANTS.COMMENT, newComment);
    }

    //Get comment list by post id
    getCommentListByPostId = (request) => {
        return this.post(`${FUNCTION_CONSTANTS.COMMENT}/${URL_CONSTANTS.GET_COMMENT_LIST_BY_POST_ID}`, request);
    }

    //Delete comment
    deleteComment = (id) => {
        return this.delete(`${FUNCTION_CONSTANTS.COMMENT}/${id}`);
    }

    //Update comment
    updateComment = (id, commentUpdate) => {
        return this.put(`${FUNCTION_CONSTANTS.COMMENT}/${id}`, commentUpdate);
    }
}


export const commentService = new CommentService();