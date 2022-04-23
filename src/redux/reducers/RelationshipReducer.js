import { GET_FRIEND_LIST, GET_RECEIVED_FRIEND_REQUEST_LIST, GET_SUGGESTIONS_LIST } from "../constants/types";

const initialState = {
    suggestionsList: [],
    friendList: [],
    receivedFriendRequestList: []
}

export const RelationshipReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUGGESTIONS_LIST:
            state.suggestionsList = action.suggestionsList;
            return { ...state }
        case GET_FRIEND_LIST:
            state.friendList = action.friendList;
            return { ...state }
        case GET_RECEIVED_FRIEND_REQUEST_LIST:
            state.receivedFriendRequestList = action.receivedFriendRequestList;
            return { ...state }
        default:
            return state
    }
}