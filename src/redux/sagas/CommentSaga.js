import { call, put, takeLatest } from "redux-saga/effects";
import { ERROR_CODE, } from "../../util/constants/systemSettings";
import { CREATE_COMMENT_SAGA, DELETE_COMMENT_SAGA, GET_COMMENT_LIST_BY_POST_ID_SAGA, UPDATE_COMMENT_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { COMMON_CONSTANT, MESSAGES } from "../../util/constants/commonConstants";
import { commentService } from "../../services/CommentService";
import { getCommentListAction, getCommentListByPostIdSagaAction } from "../actions/CommentAction";
import { hideConfirmDeleteModalAction } from "../actions/ConfirmDeleteAction";

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
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Call API to reload comment list
            yield put(getCommentListByPostIdSagaAction({
                postId: response.postId,
                pageIndex: 0,
                pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
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
        console.log(response)
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
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
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            yield put(hideConfirmDeleteModalAction());

            //Call API to reload comment list
            yield put(getCommentListByPostIdSagaAction({
                postId: response.postId,
                pageIndex: 0,
                pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
            }));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        console.log(err)
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
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            notify('success', MESSAGES.UPDATE_SUCCESS);
        
            //Call API to reload comment list
            yield put(getCommentListByPostIdSagaAction({
                postId: response.postId,
                pageIndex: 0,
                pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
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