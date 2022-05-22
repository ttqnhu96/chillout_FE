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

export const createNotificationSagaAction = (newNotification) => {
    return {
        type: types.CREATE_NOTIFICATION_SAGA,
        newNotification: newNotification
    }
}

export const getNotificationListByReceiverIdSagaAction = (request) => {
    return {
        type: types.GET_NOTIFICATION_LIST_BY_RECEIVER_ID_SAGA,
        request: request
    }
}

export const getNotificationListAction = (notificationList) => {
    return {
        type: types.REDUCER_GET_NOTIFICATION_LIST,
        notificationList: notificationList
    }
}