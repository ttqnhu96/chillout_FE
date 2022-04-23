import { ACCEPT_FRIEND_REQUEST_SAGA, DELETE_FRIEND_REQUEST_SAGA, GET_RECEIVED_FRIEND_REQUEST_LIST, GET_RECEIVED_FRIEND_REQUEST_LIST_SAGA, GET_SUGGESTIONS_LIST, GET_SUGGESTIONS_LIST_SAGA } from "../constants/types"

export const getSuggestionsListSagaAction = (request) => {
    return {
        type: GET_SUGGESTIONS_LIST_SAGA,
        request: request
    }
}

export const getSuggestionsListAction = (suggestionsList) => {
    return {
        type: GET_SUGGESTIONS_LIST,
        suggestionsList: suggestionsList
    }
}

export const getReceivedFriendRequestListSagaAction = (request) => {
    return {
        type: GET_RECEIVED_FRIEND_REQUEST_LIST_SAGA,
        request: request
    }
}

export const getReceivedFriendRequestListAction = (receivedFriendRequestList) => {
    return {
        type: GET_RECEIVED_FRIEND_REQUEST_LIST,
        receivedFriendRequestList: receivedFriendRequestList
    }
}

export const acceptFriendRequestSagaAction = (friendRequestId) => {
    return {
        type: ACCEPT_FRIEND_REQUEST_SAGA,
        friendRequestId: friendRequestId
    }
}

export const deleteFriendRequestSagaAction = (friendRequestId) => {
    return {
        type: DELETE_FRIEND_REQUEST_SAGA,
        friendRequestId: friendRequestId
    }
}