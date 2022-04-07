import { CREATE_COMMENT_SAGA, GET_COMMENT_LIST, GET_COMMENT_LIST_BY_POST_ID_SAGA } from "../constants/types";

export const createCommentSagaAction = (newComment) => {
    return {
        type: CREATE_COMMENT_SAGA,
        newComment: newComment
    }
}

export const getCommentListByPostIdSagaAction = (request) => {
    return {
        type: GET_COMMENT_LIST_BY_POST_ID_SAGA,
        request: request
    }
}

export const getCommentListAction = (postId, commentList) => {
    return {
        type: GET_COMMENT_LIST,
        postId: postId,
        commentList: commentList
    }
}