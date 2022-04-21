import { GET_FRIEND_PROFILE, GET_USER_PROFILE, SET_IS_RELOAD_WALL, SET_IS_VIEW_FRIEND_PROFILE } from "../constants/types"

const initialState = {
    userProfile: {},
    friendProfile: {},
    isViewFriendProfile: false,
    isReload: false
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            state.userProfile = action.userProfile;
            return { ...state }
        case GET_FRIEND_PROFILE:
            console.log('GET_FRIEND_PROFILE')
            state.friendProfile = action.friendProfile;
            return { ...state }
        case SET_IS_VIEW_FRIEND_PROFILE:
            state.isViewFriendProfile = action.isViewFriendProfile;
            return { ...state }
        case SET_IS_RELOAD_WALL:
            state.isReload = action.isReload;
            return { ...state }
        default:
            return state;
    }
}