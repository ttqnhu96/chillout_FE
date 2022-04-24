import { GET_FRIEND_LIST, GET_RECEIVED_FRIEND_REQUEST_LIST, GET_RELATIONSHIP_WITH_CURRENT_USER, GET_SUGGESTIONS_LIST } from "../constants/types";

const initialState = {
    suggestionsList: [],
    friendList: [],
    receivedFriendRequestList: [],
    relationshipWithCurrentUser: '',
    friendRequestId: 0
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
        case GET_RELATIONSHIP_WITH_CURRENT_USER:
            state.relationshipWithCurrentUser = action.relationshipWithCurrentUser;
            state.friendRequestId = action.friendRequestId;
            return { ...state }
        default:
            return state
    }
}