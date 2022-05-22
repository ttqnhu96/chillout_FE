import { call, put, takeLatest } from "redux-saga/effects";
import { relationshipService } from "../../services/RelationshipService";
import { MESSAGES } from "../../util/constants/commonConstants";
import { ERROR_CODE } from "../../util/constants/systemSettings";
import { notify } from "../../util/notification";
import { getFriendListAction, getFriendListSagaAction, getReceivedFriendRequestListAction, getReceivedFriendRequestListSagaAction, getRelationshipWithCurrentUserSagaAction, getRelationshipWithCurrentUserAction, getSuggestionsListAction } from "../actions/RelationshipAction";
import { ACCEPT_FRIEND_REQUEST_SAGA, CREATE_FRIEND_REQUEST_SAGA, DELETE_FRIEND_REQUEST_SAGA, GET_FRIEND_LIST_SAGA, GET_RECEIVED_FRIEND_REQUEST_LIST_SAGA, GET_RELATIONSHIP_WITH_CURRENT_USER_SAGA, GET_SUGGESTIONS_LIST_SAGA } from "../constants/types";

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
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set suggestions list state in reducer
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
            GET FRIEND LIST
==============================================*/
/**
 * getFriendList
 * @param action 
 */
function* getFriendList(action) {
    try {
        const { data } = yield call(() => relationshipService.getFriendList(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set friend list state in reducer
            yield put(getFriendListAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getFriendListWatcher
 * @param
 */
export function* getFriendListWatcher() {
    yield takeLatest(GET_FRIEND_LIST_SAGA, getFriendList);
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
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
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

/*=============================================
            ACCEPT FRIEND REQUEST
==============================================*/
/**
 * acceptFriendRequest
 * @param action 
 */
function* acceptFriendRequest(action) {
    try {
        const { data } = yield call(() => relationshipService.acceptFriendRequest(action.friendRequestId));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set friend request list to reducer
            yield put(getReceivedFriendRequestListSagaAction({
                receiverId: response.receiverId,
                isPaginated: false
            }));
            //Reload friend list of request sender
            yield put(getFriendListSagaAction({
                userId: response.senderId,
                isPaginated: false
            }));
            //Reload friend list of request receiver
            yield put(getFriendListSagaAction({
                userId: response.receiverId,
                isPaginated: false
            }));
            yield put(getRelationshipWithCurrentUserSagaAction({
                userId: Number(response.senderId)
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
 * acceptFriendRequestWatcher
 * @param
 */
export function* acceptFriendRequestWatcher() {
    yield takeLatest(ACCEPT_FRIEND_REQUEST_SAGA, acceptFriendRequest);
}

/*=============================================
            DELETE FRIEND REQUEST
==============================================*/
/**
 * deleteFriendRequest
 * @param action 
 */
function* deleteFriendRequest(action) {
    try {
        const { data } = yield call(() => relationshipService.deletetFriendRequest(action.friendRequestId));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set friend request list to reducer
            yield put(getReceivedFriendRequestListSagaAction({
                receiverId: response.receiverId,
                isPaginated: false
            }));
            yield put(getRelationshipWithCurrentUserSagaAction({
                userId: Number(response.receiverId)
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
 * deleteFriendRequestWatcher
 * @param
 */
export function* deleteFriendRequestWatcher() {
    yield takeLatest(DELETE_FRIEND_REQUEST_SAGA, deleteFriendRequest);
}

/*=============================================
            CREATE FRIEND REQUEST 
==============================================*/
/**
 * createFriendRequest
 * @param action 
 */
function* createFriendRequest(action) {
    try {
        const { data } = yield call(() => relationshipService.createFriendRequest(action.newFriendRequest));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            yield put(getRelationshipWithCurrentUserSagaAction({
                userId: Number(response.receiverId)
            }));
            //Set friend request list to reducer
            yield put(getReceivedFriendRequestListSagaAction({
                receiverId: response.receiverId,
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
 * createFriendRequestWatcher
 * @param
 */
export function* createFriendRequestWatcher() {
    yield takeLatest(CREATE_FRIEND_REQUEST_SAGA, createFriendRequest);
}

/*=============================================
        GET RELATIONSHIP WITH CURRENT USER
==============================================*/
/**
 * getRelationshipWithCurrentUser
 * @param action 
 */
function* getRelationshipWithCurrentUser(action) {
    try {
        const { data } = yield call(() => relationshipService.getRelationshipWithCurrentUser(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set state in reducer
            yield put(getRelationshipWithCurrentUserAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getRelationshipWithCurrentUserWatcher
 * @param
 */
export function* getRelationshipWithCurrentUserWatcher() {
    yield takeLatest(GET_RELATIONSHIP_WITH_CURRENT_USER_SAGA, getRelationshipWithCurrentUser);
}