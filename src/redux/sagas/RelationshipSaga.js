import { call, put, takeLatest } from "redux-saga/effects";
import { relationshipService } from "../../services/RelationshipService";
import { MESSAGES } from "../../util/constants/commonConstants";
import { ERROR_CODE } from "../../util/constants/systemSettings";
import { notify } from "../../util/notification";
import { getReceivedFriendRequestListAction, getSuggestionsListAction } from "../actions/RelationshipAction";
import { GET_RECEIVED_FRIEND_REQUEST_LIST_SAGA, GET_SUGGESTIONS_LIST_SAGA } from "../constants/types";

/*=============================================
            GET SUGGESTIONS LIST
==============================================*/
/**
 * getSuggestionsList
 * @param action 
 */
function* getSuggestionsList(action) {
    try {
        const { data } = yield call(() => relationshipService.getSuggestionsList(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Set suggestions list to reducer
            yield put(getSuggestionsListAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getSuggestionsListWatcher
 * @param
 */
export function* getSuggestionsListWatcher() {
    yield takeLatest(GET_SUGGESTIONS_LIST_SAGA, getSuggestionsList);
}

/*=============================================
            GET FRIEND REQUEST LIST
==============================================*/
/**
 * getReceivedFriendRequestList
 * @param action 
 */
 function* getReceivedFriendRequestList(action) {
    try {
        const { data } = yield call(() => relationshipService.getReceivedFriendRequestList(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Set friend request list to reducer
            yield put(getReceivedFriendRequestListAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getReceivedFriendRequestListWatcher
 * @param
 */
export function* getReceivedFriendRequestListWatcher() {
    yield takeLatest(GET_RECEIVED_FRIEND_REQUEST_LIST_SAGA, getReceivedFriendRequestList);
}