import * as types from '../constants/types'
import { USER_LOGIN } from "../../util/constants/systemSettings";

const initialState = {
    haveNotification: false,
    notificationList: [],
}

export const NotificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REDUCER_COMMENT_NOTIFICATION: {
            // debugger
            const user = JSON.parse(sessionStorage.getItem(USER_LOGIN));
            if (action.fromUserId !== user?.id) {
                state.haveNotification = true;
            }
            return { ...state };
        };
        case types.REDUCER_READ_NOTIFICATION: {
            state.haveNotification = false;
            return { ...state };
        }
        case types.REDUCER_UPDATE_LIST_NOTIFICATION: {
            return { ...state };
        }
        case types.REDUCER_LIKE_POST_NOTIFICATION: {
            const user = JSON.parse(sessionStorage.getItem(USER_LOGIN));
            const { like, fromUserId } = action;
            if (like && fromUserId !== user?.id) {
                state.haveNotification = true;
            }
            return { ...state };
        }
        default:
            return state;
    }
}