import { put, takeLatest } from "redux-saga/effects";
import { LIKE_POST_MESSAGE_FROM_SERVER, REDUCER_LIKE_POST_RECEIVED } from "../constants/types";

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
    yield takeLatest(LIKE_POST_MESSAGE_FROM_SERVER, handleReceiveReactPost);
}
//--------------------------------------------------------------------------