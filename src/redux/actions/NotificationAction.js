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

export const setAddFriendRequestNotificationToReducerAction = (data) => {
    return {
        type: types.REDUCER_ADD_FRIEND_REQUEST_NOTIFICATION,
        senderId: data.senderId,
        receiverId: data.receiverId,
        senderName: data.senderName,
        senderAvatar: data.senderAvatar
    }
}
export const setAcceptFriendRequestNotificationToReducerAction = (data) => {
    return {
        type: types.REDUCER_ACCEPT_FRIEND_REQUEST_NOTIFICATION,
        senderId: data.senderId,
        receiverId: data.receiverId,
        receiverName: data.receiverName,
        receiverAvatar: data.receiverAvatar
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