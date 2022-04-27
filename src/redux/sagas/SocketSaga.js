import { takeEvery, put, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/types'
import { io } from 'socket.io-client';
import * as actions from '../actions/SocketAction.js'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/constants/systemSettings';
import { setCommentNotificationToReducerAction, setLikePostNotificationToReducerAction } from '../actions/NotificationAction';
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
            case types.ADD_COMMENT_NOTIFICATION_FROM_SERVER:
                console.log('ADD_COMMENT_NOTIFICATION_FROM_SERVER', event.data)
                dispatch(setCommentNotificationToReducerAction(event.data));
                break;
            case types.UPDATE_COMMENT_MESSAGE_FROM_SERVER:
                dispatch(actions.updateCommentNotification(event.data));
                break;
            case types.LIKE_POST_MESSAGE_FROM_SERVER:
                dispatch(actions.likePostNotification(event.data))
                break;
            case types.LIKE_POST_NOTIFICATION_FROM_SERVER:
                dispatch(setLikePostNotificationToReducerAction(event.data))
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
        socket.emit('client-message', {
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

function* addCommentToPost(action) {
    if (!socket) {
        setupSocket();
    }
    socket.emit('client-add-comment', {
        data: {
            postId: action.commentInfomation.postId,
            fromUserId: action.commentInfomation.fromUserId,
            fromUserName: action.commentInfomation.fromUserName
        }
    });
}

// Handle comment for UI
export const addCommentToPostWatcher = function* addCommentToPostWatcher() {
    yield takeEvery(types.ADD_COMMENT_SOCKET_HANDLER, (action) => addCommentToPost(action));
}

function* updateCommentToPost(action) {
    if (!socket) {
        setupSocket();
    }
    socket.emit('client-update-comment', {
        data: {
            postId: action.commentInfomation.postId,
            fromUserId: action.commentInfomation.fromUserId,
            fromUserName: action.commentInfomation.fromUserName
        }
    });
}

// Handle comment for UI
export const updateCommentToPostWatcher = function* updateCommentToPostWatcher() {
    yield takeEvery(types.UPDATE_COMMENT_SOCKET_HANDLER, (action) => updateCommentToPost(action));
}

function* handleLikePost(action) {
    if (socket) {
        socket.emit('client-like-post', {
            data: {
                postId: action.reactPostInfomation.postId,
                like: action.reactPostInfomation.like,
                fromUserId: action.reactPostInfomation.fromUserId,
                fromUserName: action.reactPostInfomation.fromUserName
            }
        });
    }
}

// Handle react post for UI
export const reactPostWatcher = function* reactPostWatcher() {
    yield takeEvery(types.LIKE_POST_SOCKET_HANDLER, (action) => handleLikePost(action));
}