import { GET_FIRST_NAME_AND_AVATAR } from "../constants/types"

const initialState = {
    firstName: "",
    lastName: "",
    avatar: ""
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIRST_NAME_AND_AVATAR:
            state.firstName = action.firstName;
            state.avatar = action.avatar;
            return { ...state };
        default:
            return state;
    }
}