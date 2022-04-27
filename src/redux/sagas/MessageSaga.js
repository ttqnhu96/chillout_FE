import { put, takeEvery } from "redux-saga/effects";
import { MESSAGE_NOTIFICATION_RECEIVED, REDUCER_MESSAGE_RECEIVED } from "../constants/types";

//--------------------------------------------------------------------------
/**
 * getProfileDetailById
 * @param action 
 */
function* handleReceiveMessage(action) {
    yield put({
        type: REDUCER_MESSAGE_RECEIVED,
        data: action.data
    })
}
/**
 * logInWatcher
 * @param
 */
export function* receiveMessageWatcher() {
    yield takeEvery(MESSAGE_NOTIFICATION_RECEIVED, handleReceiveMessage);
}
//--------------------------------------------------------------------------