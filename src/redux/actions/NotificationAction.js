import * as types from '../constants/types';
export const setCommentNotificationToReducerAction = (data) => {
    return {
        type: types.REDUCER_COMMENT_NOTIFICATION,
        postId: data.postId,
        fromUserId: data.fromUserId,
        fromUserName: data.fromUserName,
    }
}

export const setLikePostNotificationToReducerAction = (data) => {
    return {
        type: types.REDUCER_LIKE_POST_NOTIFICATION,
        fromUserId: data.fromUserId,
        like: data.like,
        fromUserName: data.fromUserName,
        postId: data.postId
    }
}