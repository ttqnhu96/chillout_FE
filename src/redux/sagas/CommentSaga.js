//--------------------------------------------------------------------------
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { ERROR_CODE, USER_LOGIN, } from "../../util/constants/systemSettings";
import { UPDATE_COMMENT_MESSAGE_SAGA, CREATE_COMMENT_SAGA, DELETE_COMMENT_SAGA, GET_COMMENT_LIST_BY_POST_ID_SAGA, UPDATE_COMMENT_SAGA, ADD_COMMENT_MESSAGE_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { COMMON_CONSTANT, MESSAGES, NOTIFICATION_ACTION, NOTIFICATION_MESSAGE, OBJECT_TYPE } from "../../util/constants/commonConstants";
import { commentService } from "../../services/CommentService";
import { getCommentListAction, getCommentListByPostIdSagaAction } from "../actions/CommentAction";
import { addCommentSocketHandlerAction, updateCommentSocketHandlerAction } from "../actions/SocketAction";
import { hideConfirmDeleteModalAction } from "../actions/ConfirmDeleteAction";
import { createNotificationSagaAction } from "../actions/NotificationAction";

/*=============================================
                CREATE COMMENT 
==============================================*/
/**
 * createComment
 * @param action 
 */
function* createComment(action) {
    try {
        const { data } = yield call(() => commentService.createComment(action.newComment));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        const { id, username } = JSON.parse(sessionStorage.getItem(USER_LOGIN));
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Call API to reload comment list
            yield put(getCommentListByPostIdSagaAction({
                postId: response.postId,
                pageIndex: 0,
                pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
            }));

            //Create notification
            const executorId = id;
            const receiverId = response.postAuthorId; 
            if (executorId !== receiverId) {
                yield put(createNotificationSagaAction({
                    executorId: executorId,
                    receiverId: receiverId,
                    action: NOTIFICATION_ACTION.COMMENT,
                    objectType: OBJECT_TYPE.POST,
                    objectId: response.postId,
                    message: NOTIFICATION_MESSAGE.COMMENTED_ON_YOUR_POST
                }));
            }

            yield put(addCommentSocketHandlerAction({
                postId: action.newComment.postId,
                fromUserId: id,
                fromUserName: username
            }));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * createCommentWatcher
 * @param
 */
export function* createCommentWatcher() {
    yield takeLatest(CREATE_COMMENT_SAGA, createComment);
}

/*=============================================
            GET COMMENT LIST 
==============================================*/
/**
 * getCommentListByPostId
 * @param action 
 */
function* getCommentListByPostId(action) {
    try {
        const { data } = yield call(() => commentService.getCommentListByPostId(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set comment list to reducer
            yield put(getCommentListAction(action.request.postId, response.pageResults, response.pageIndex, response.totalRecord));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getCommentListByPostIdWatcher
 * @param
 */
export function* getCommentListByPostIdWatcher() {
    yield takeLatest(GET_COMMENT_LIST_BY_POST_ID_SAGA, getCommentListByPostId);
}

/*=============================================
                DELETE COMMENT 
==============================================*/
/**
 * deleteComment
 * @param action 
 */
function* deleteComment(action) {
    try {
        const { data } = yield call(() => commentService.deleteComment(action.commentId));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        const { id, username } = JSON.parse(sessionStorage.getItem(USER_LOGIN));
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            yield put(hideConfirmDeleteModalAction());

            //Call API to reload comment list
            yield put(getCommentListByPostIdSagaAction({
                postId: response.postId,
                pageIndex: 0,
                pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
            }));
            yield put(updateCommentSocketHandlerAction({
                postId: response.postId,
                fromUserId: id,
                fromUserName: username
            }));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * deleteCommentWatcher
 * @param
 */
export function* deleteCommentWatcher() {
    yield takeLatest(DELETE_COMMENT_SAGA, deleteComment);
}

/*=============================================
                UPDATE COMMENT
==============================================*/
/**
 * updateComment
 * @param action 
 */
function* updateComment(action) {
    try {
        const { data } = yield call(() => commentService.updateComment(action.id, action.commentUpdate));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        const { id, username } = JSON.parse(sessionStorage.getItem(USER_LOGIN));
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Call API to reload comment list
            yield put(getCommentListByPostIdSagaAction({
                postId: response.postId,
                pageIndex: 0,
                pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
            }));
            yield put(updateCommentSocketHandlerAction({
                postId: response.postId,
                fromUserId: id,
                fromUserName: username
            }));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * updateCommentWatcher
 * @param
 */
export function* updateCommentWatcher() {
    yield takeLatest(UPDATE_COMMENT_SAGA, updateComment);
}

//--------------------------------------------------------------------------
/**
 * getProfileDetailById
 * @param action 
 */
function* handleAddCommentBySocket(action) {
    yield put(getCommentListByPostIdSagaAction({
        postId: action.data.postId,
        pageIndex: 0,
        pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
    }));
}
/**
 * logInWatcher
 * @param
 */
export function* handleAddCommentBySocketWatcher() {
    yield takeEvery(ADD_COMMENT_MESSAGE_SAGA, handleAddCommentBySocket);
}

/**
 * getProfileDetailById
 * @param action 
 */
function* handleUpdateCommentBySocket(action) {
    yield put(getCommentListByPostIdSagaAction({
        postId: action.data.postId,
        pageIndex: 0,
        pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
    }));
}
/**
 * logInWatcher
 * @param
 */
export function* handleUpdateCommentBySocketWatcher() {
    yield takeEvery(UPDATE_COMMENT_MESSAGE_SAGA, handleUpdateCommentBySocket);
}
