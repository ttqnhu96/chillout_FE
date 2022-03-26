import { DISPLAY_SIGN_UP_MODAL, HIDE_SIGN_UP_MODAL } from "../constants/types";

const initialState = {
    isSignUpModalVisible: false
}

export const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_SIGN_UP_MODAL:
            state.isSignUpModalVisible = true;
            return { ...state }
        case HIDE_SIGN_UP_MODAL: {
            state.isSignUpModalVisible = false;
            return { ...state }
        }
        default:
            return state
    }
}