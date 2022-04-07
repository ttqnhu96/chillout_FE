import { call, put, takeLatest } from "redux-saga/effects";
import { ERROR_CODE, } from "../../util/constants/systemSettings";
import { CREATE_COMMENT_SAGA, GET_COMMENT_LIST_BY_POST_ID_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { MESSAGES } from "../../util/constants/commonConstants";
import { commentService } from "../../services/CommentService";
import { getCommentListAction } from "../actions/CommentAction";
import { getPostListNewsFeedSagaAction, getPostListWallSagaAction } from "../actions/PostAction";

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
            //Call API to reload wall and news feed
            yield put(getPostListWallSagaAction({
                userId: response.userId,
                isPaginated: false
            }));
            yield put(getPostListNewsFeedSagaAction({
                userId: response.userId,
                isPaginated: false
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
        const response = data.Data.pageResults;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Set comment list to reducer
            yield put(getCommentListAction(action.request.postId, response));
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