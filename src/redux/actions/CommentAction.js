import { CREATE_COMMENT_SAGA, SET_DELETED_COMMENT_ID, DELETE_COMMENT_SAGA, GET_COMMENT_LIST, GET_COMMENT_LIST_BY_POST_ID_SAGA } from "../constants/types";

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

export const getCommentListAction = (postId, commentList, pageIndex, totalRecord) => {
    return {
        type: GET_COMMENT_LIST,
        postId: postId,
        commentList: commentList,
        pageIndex: pageIndex,
        totalRecord: totalRecord
    }
}

export const setDeletedCommentIdAction = (deletedCommentId) => {
    return {
        type: SET_DELETED_COMMENT_ID,
        deletedCommentId: deletedCommentId
    }
}

export const deleteCommentSagaAction = (commentId) => {
    return {
        type: DELETE_COMMENT_SAGA,
        commentId: commentId
    }
}

// export const reloadCommentAction = (isReloadComment) => {
//     return {
//         type: RELOAD_COMMENT,
//         isReloadComment: isReloadComment
//     }
// }