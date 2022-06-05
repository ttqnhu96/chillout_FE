import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/types'
import { io } from 'socket.io-client';
import * as actions from '../actions/SocketAction.js'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/constants/systemSettings';
import * as notifyAction from '../actions/NotificationAction'
const url = 'http://localhost:3006';
let socket;
const setupSocket = (dispatch) => {
    console.log('setupSocket')
    const token = sessionStorage.getItem(ACCESS_TOKEN);
    socket = io(url, {
        query: { token }
    });

    socket.on('connect', function () {
        socket.emit('message', { test: 'test' });
    });

    socket.on('message', function (event) {
        switch (event.type) {
            case types.MESSAGE_NOTIFICATION_RECEIVED:
                dispatch(actions.messageReceived(event.data));
                break;
            case types.ADD_COMMENT_MESSAGE_FROM_SERVER:
                dispatch(actions.addCommentNotification(event.data));
                break;
            case types.ADD_COMMENT_NOTIFICATION_MESSAGE_FROM_SERVER:
                dispatch(notifyAction.setCommentNotificationToReducerAction(event.data));
                break;
            case types.UPDATE_COMMENT_MESSAGE_FROM_SERVER:
                dispatch(actions.updateCommentNotification(event.data));
                break;
            case types.LIKE_POST_MESSAGE_FROM_SERVER:
                dispatch(actions.likePostNotification(event.data))
                break;
            case types.LIKE_POST_NOTIFICATION_MESSAGE_FROM_SERVER:
                dispatch(notifyAction.setLikePostNotificationToReducerAction(event.data));
                break;
            case types.ADD_FRIEND_MESSAGE_FROM_SERVER:
                dispatch(actions.addFriendNotification(event.data))
                break;
            case types.ACCEPT_FRIEND_MESSAGE_FROM_SERVER:
                dispatch(actions.acceptFriendNotification(event.data))
                break;
            case types.ACCEPT_FRIEND_NOTIFICATION_MESSAGE_FROM_SERVER:
                dispatch(notifyAction.setAcceptFriendRequestNotificationToReducerAction(event.data))
                break;
            case types.ADD_FRIEND_NOTIFICATION_MESSAGE_FROM_SERVER:
                dispatch(notifyAction.setAddFriendRequestNotificationToReducerAction(event.data))
                break;
            case types.CANCEL_FRIEND_REQUEST_MESSAGE_FROM_SERVER:
                dispatch(actions.cancelFriendRequestNotification(event.data));
                break;
            case types.DELETE_FRIEND_REQUEST_MESSAGE_FROM_SERVER:
                dispatch(actions.deleteFriendRequestNotification(event.data));
                break;
            default:
                break;
        }
    });

    socket.on('exception', function (data) {
        console.log('event', data);
    });

    socket.on('disconnect', function () {
        console.log('Disconnected');
    });

    socket.on('connect_error', () => {
        setTimeout(() => {
            socket.connect();
        }, 1000);
    });

    return socket
}

export const socketInitWatcher = function* socketInitWatcher(dispatch) {
    yield takeEvery(types.SOCKET_INIT, (action) => setupSocket(dispatch));
    if (sessionStorage.getItem(USER_LOGIN)) {
        setupSocket(dispatch)
    }

}

const disconnectSocket = () => {
    if (socket) {
        socket.disconnect()
    }
}

export const disconnectSocketWatcher = function* disconnectSocketWatcher() {
    yield takeEvery(types.SOCKET_DISCONNECT, () => disconnectSocket())
}

function* sendMessage(action) {
    if (socket) {
        yield socket.emit('client-message', {
            data: {
                toUserId: action.messageInfomation.toUserId,
                message: action.messageInfomation.message
            }
        });
    }
}

// Handle chat for UI
export const newMessageSocketWatcher = function* newMessageSocketWatcher() {
    yield takeEvery(types.ADD_MESSAGE, (action) => sendMessage(action));
}

/*=============================================
            ADD COMMENT SOCKET HANDLE
==============================================*/

function* addCommentToPost(action) {
    if (!socket) {
        setupSocket();
    }
    yield socket.emit('client-add-comment', {
        data: {
            postId: action.commentInfomation.postId,
            fromUserId: action.commentInfomation.fromUserId,
            fromUserName: action.commentInfomation.fromUserName
        }
    });
}

export const addCommentToPostWatcher = function* addCommentToPostWatcher() {
    yield takeEvery(types.ADD_COMMENT_SOCKET_HANDLER, (action) => addCommentToPost(action));
}

/*=============================================
            UPDATE COMMENT SOCKET HANDLE
==============================================*/

function* updateCommentToPost(action) {
    if (!socket) {
        setupSocket();
    }
    yield socket.emit('client-update-comment', {
        data: {
            postId: action.commentInfomation.postId,
            fromUserId: action.commentInfomation.fromUserId,
            fromUserName: action.commentInfomation.fromUserName
        }
    });
}

export const updateCommentToPostWatcher = function* updateCommentToPostWatcher() {
    yield takeEvery(types.UPDATE_COMMENT_SOCKET_HANDLER, (action) => updateCommentToPost(action));
}

/*=============================================
            LIKE POST SOCKET HANDLE
==============================================*/

function* handleLikePost(action) {
    if (socket) {
        yield socket.emit('client-like-post', {
            data: {
                postId: action.reactPostInfomation.postId,
                like: action.reactPostInfomation.like,
                fromUserId: action.reactPostInfomation.fromUserId,
                fromUserName: action.reactPostInfomation.fromUserName
            }
        });
    }
}


export const reactPostWatcher = function* reactPostWatcher() {
    yield takeLatest(types.LIKE_POST_SOCKET_HANDLER, handleLikePost);
}

/*=============================================
            ADD FRIEND SOCKET HANDLE
==============================================*/

function* handleAddFriend(action) {
    if (socket) {
        yield socket.emit('client-add-friend', {
            senderId: action.addFriendInfomation.senderId,
            receiverId: action.addFriendInfomation.receiverId
        });
    }
}

export const addFriendWatcher = function* addFriendWatcher() {
    yield takeEvery(types.ADD_FRIEND_SOCKET_HANDLER, (action) => handleAddFriend(action));
}

/*=============================================
        ACCEPT FRIEND REQUEST SOCKET HANDLE
==============================================*/
function* handleAcceptFriendRequest(action) {
    if (socket) {
        yield socket.emit('client-accept-friend', {
            senderId: action.acceptFriendInfomation.senderId,
            receiverId: action.acceptFriendInfomation.receiverId
        });
    }
}

export const acceptFriendRequestWatcher = function* acceptFriendRequestWatcher() {
    yield takeEvery(types.ACCEPT_FRIEND_REQUEST_SOCKET_HANDLER, (action) => handleAcceptFriendRequest(action));
}

/*=============================================
        CANCEL FRIEND REQUEST SOCKET HANDLE
==============================================*/

function* handleCancelFriendRequest(action) {
    if (socket) {
        yield socket.emit('client-cancel-friend-request', {
            senderId: action.cancelFriendReuestInfomation.senderId,
            receiverId: action.cancelFriendReuestInfomation.receiverId
        });
    }
}

export const cancelFriendRequestWatcher = function* cancelFriendRequestWatcher() {
    yield takeEvery(types.CANCEL_FRIEND_REQUEST_SOCKET_HANDLER, handleCancelFriendRequest)
}

/*=============================================
        DELETE FRIEND REQUEST SOCKET HANDLE
==============================================*/

function* handleDeleteFriendRequest(action) {
    if (socket) {
        yield socket.emit('client-delete-friend-request', {
            senderId: action.deleteFriendReuestInfomation.senderId,
            receiverId: action.deleteFriendReuestInfomation.receiverId
        });
    }
}

export const deleteFriendRequestWatcher = function* deleteFriendRequestWatcher() {
    yield takeEvery(types.DELETE_FRIEND_REQUEST_SOCKET_HANDLER, handleDeleteFriendRequest)
}