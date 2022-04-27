import { put, takeEvery } from "redux-saga/effects";
import { LIKE_POST_MESSAGE_FROM_SERVER, REDUCER_LIKE_POST_RECEIVED } from "../constants/types";
import { setCommentNotificationToReducerAction } from "../actions/NotificationAction";

//--------------------------------------------------------------------------
/**
 * getProfileDetailById
 * @param action 
 */
function* handleReceiveReactPost(action) {
    yield put({
        type: REDUCER_LIKE_POST_RECEIVED,
        data: action.data
    });
}
/**
 * logInWatcher
 * @param
 */
export function* receiveLikePostWatcher() {
    yield takeEvery(LIKE_POST_MESSAGE_FROM_SERVER, handleReceiveReactPost);
}
//--------------------------------------------------------------------------