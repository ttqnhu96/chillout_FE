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

export const addFriendSocketHandlerAction = (addFriendInfomation) => {
    return {
        type: types.ADD_FRIEND_SOCKET_HANDLER,
        addFriendInfomation: {
            senderId: addFriendInfomation.senderId,
            receiverId: addFriendInfomation.receiverId,
        }
    }
}

export const acceptFriendSocketHandlerAction = (acceptFriendInfomation) => {
    return {
        type: types.ACCEPT_FRIEND_REQUEST_SOCKET_HANDLER,
        acceptFriendInfomation: {
            senderId: acceptFriendInfomation.senderId,
            receiverId: acceptFriendInfomation.receiverId,
        }
    }
}

export const cancelFriendRequestSocketHandlerAction = (cancelFriendReuestInfomation) => {
    return {
        type: types.CANCEL_FRIEND_REQUEST_SOCKET_HANDLER,
        cancelFriendReuestInfomation: {
            senderId: cancelFriendReuestInfomation.senderId,
            receiverId: cancelFriendReuestInfomation.receiverId,
        }
    }
}

export const deleteFriendRequestSocketHandlerAction = (deleteFriendReuestInfomation) => {
    return {
        type: types.DELETE_FRIEND_REQUEST_SOCKET_HANDLER,
        deleteFriendReuestInfomation: {
            senderId: deleteFriendReuestInfomation.senderId,
            receiverId: deleteFriendReuestInfomation.receiverId,
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
    type: types.ADD_COMMENT_MESSAGE_SAGA,
    data: {
        postId: data.postId,
        fromUserName: data.fromUserName,
        fromUserId: data.fromUserId
    }
})

export const updateCommentNotification = (data) => ({
    type: types.UPDATE_COMMENT_MESSAGE_SAGA,
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

export const addFriendNotification = (data) => ({
    type: types.ADD_FRIEND_REQUEST_MESSAGE_SAGA,
    data: {
        senderId: data.senderId,
        receiverId: data.receiverId
    }
})

export const acceptFriendNotification = (data) => ({
    type: types.ACCEPT_FRIEND_REQUEST_MESSAGE_SAGA,
    data: {
        senderId: data.senderId,
        receiverId: data.receiverId
    }
})

export const cancelFriendRequestNotification = (data) => ({
    type: types.CANCEL_FRIEND_REQUEST_MESSAGE_SAGA,
    data: {
        senderId: data.senderId,
        receiverId: data.receiverId
    }
})

export const deleteFriendRequestNotification = (data) => ({
    type: types.DELETE_FRIEND_REQUEST_MESSAGE_SAGA,
    data: {
        senderId: data.senderId,
        receiverId: data.receiverId
    }
})

export const socketInit = () => ({
    type: types.SOCKET_INIT,
})







