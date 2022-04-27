import { ADD_MESSAGE, MESSAGE_NOTIFICATION_RECEIVED, REDUCER_MESSAGE_RECEIVED } from "../constants/types"

const initialState = {
    message: "",
    fromUser: ""
}

export const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUCER_MESSAGE_RECEIVED:
            state.message = action.data.message;
            state.fromUser = action.data.fromUserName;
            return { ...state };
        default:
            return state;
    }
}