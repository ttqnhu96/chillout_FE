import { GET_USER_PROFILE } from "../constants/types"

const initialState = {
    userProfile: {}
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            state.userProfile = action.userProfile;
            return { ...state }
        default:
            return state;
    }
}