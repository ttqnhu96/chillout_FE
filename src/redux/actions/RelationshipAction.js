import { ACCEPT_FRIEND_REQUEST_SAGA, CREATE_FRIEND_REQUEST_SAGA, DELETE_FRIEND_REQUEST_SAGA, GET_FRIEND_LIST, GET_FRIEND_LIST_SAGA, GET_RECEIVED_FRIEND_REQUEST_LIST, GET_RECEIVED_FRIEND_REQUEST_LIST_SAGA, GET_RELATIONSHIP_WITH_CURRENT_USER, GET_RELATIONSHIP_WITH_CURRENT_USER_SAGA, GET_SUGGESTIONS_LIST, GET_SUGGESTIONS_LIST_SAGA } from "../constants/types"

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

export const getFriendListSagaAction = (request) => {
    return {
        type: GET_FRIEND_LIST_SAGA,
        request: request
    }
}

export const getFriendListAction = (friendList) => {
    return {
        type: GET_FRIEND_LIST,
        friendList: friendList
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

export const deleteFriendRequestSagaAction = (friendRequestId, currentUserId) => {
    return {
        type: DELETE_FRIEND_REQUEST_SAGA,
        currentUserId: currentUserId,
        friendRequestId: friendRequestId
    }
}

export const createFriendRequestSagaAction = (newFriendRequest) => {
    return {
        type: CREATE_FRIEND_REQUEST_SAGA,
        newFriendRequest: newFriendRequest
    }
}

export const getRelationshipWithCurrentUserSagaAction = (request) => {
    return {
        type: GET_RELATIONSHIP_WITH_CURRENT_USER_SAGA,
        request: request
    }
}

export const getRelationshipWithCurrentUserAction = (data) => {
    return {
        type: GET_RELATIONSHIP_WITH_CURRENT_USER,
        relationshipWithCurrentUser: data.type,
        friendRequestId: data.friendRequestId
    }
}
