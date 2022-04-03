import { GET_FIRST_NAME_AND_AVATAR } from "../constants/types"

const initialState = {
    userProfile: {}
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIRST_NAME_AND_AVATAR:
            state.userProfile = action.userProfile;
            return { ...state }
        default:
            return state;
    }
}