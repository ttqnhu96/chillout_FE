import { GET_FRIEND_PROFILE, GET_LOGIN_USER_PROFILE, GET_USER_PROFILE, SET_IS_RELOAD_WALL } from "../constants/types"

const initialState = {
    loginUserProfile: {},
    userProfile: {},
    isReload: false
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_USER_PROFILE:
            state.loginUserProfile = action.loginUserProfile;
            return { ...state }
        case GET_USER_PROFILE:
            state.userProfile = action.userProfile;
            return { ...state }
        case GET_FRIEND_PROFILE:
            state.friendProfile = action.friendProfile;
            return { ...state }
        case SET_IS_RELOAD_WALL:
            state.isReload = action.isReload;
            return { ...state }
        default:
            return state;
    }
}