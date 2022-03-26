import { DISPLAY_SIGN_UP_MODAL, HIDE_SIGN_UP_MODAL } from "../constants/types";

export const displaySignUpModalAction = () => {
    return {
        type: DISPLAY_SIGN_UP_MODAL
    }
}

export const hideSignUpModalAction = () => {
    return {
        type: HIDE_SIGN_UP_MODAL
    }
}