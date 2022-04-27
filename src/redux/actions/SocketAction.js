import * as types from '../constants/types';


export const addMessage = (messageInfomation) => {
    return {
        type: types.ADD_MESSAGE,
        messageInfomation: {
            toUserId: messageInfomation.toUserId,
            message: messageInfomation.message
        }
    }
}

export const addCommentSocketHandlerAction = (commentInfomation) => {
    return {
        type: types.ADD_COMMENT_SOCKET_HANDLER,
        commentInfomation: {
            postId: commentInfomation.postId,
            fromUserId: commentInfomation.fromUserId,
            fromUserName: commentInfomation.fromUserName
        }
    }
}

export const updateCommentSocketHandlerAction = (commentInfomation) => {
    return {
        type: types.UPDATE_COMMENT_SOCKET_HANDLER,
        commentInfomation: {
            postId: commentInfomation.postId,
            fromUserId: commentInfomation.fromUserId,
            fromUserName: commentInfomation.fromUserName
        }
    }
}

export const likePostSocketHandlerAction = (reactPostInfomation) => {
    return {
        type: types.LIKE_POST_SOCKET_HANDLER,
        reactPostInfomation: {
            postId: reactPostInfomation.postId,
            like: reactPostInfomation.like,
            fromUserId: reactPostInfomation.fromUserId,
            fromUserName: reactPostInfomation.fromUserName
        }
    }
}

export const messageReceived = (data) => ({
    type: types.MESSAGE_NOTIFICATION_RECEIVED,
    data: {
        message: data.message,
        fromUserName: data.fromUserName,
        fromUserId: data.fromUserId
    }
})

export const addCommentNotification = (data) => ({
    type: types.ADD_COMMENT_NOTIFICATION_SAGA,
    data: {
        postId: data.postId,
        fromUserName: data.fromUserName,
        fromUserId: data.fromUserId
    }
})

export const updateCommentNotification = (data) => ({
    type: types.UPDATE_COMMENT_NOTIFICATION_SAGA,
    data: {
        postId: data.postId,
        fromUserName: data.fromUserName,
        fromUserId: data.fromUserId
    }
})

export const likePostNotification = (data) => ({
    type: types.LIKE_POST_MESSAGE_FROM_SERVER,
    data: {
        postId: data.postId,
        likes: data.likes,
        userIdLikePostList: data.userIdLikePostList,
        fromUserName: data.fromUserName,
        fromUserId: data.fromUserId
    }
})

export const socketInit = () => ({
    type: types.SOCKET_INIT,
})







