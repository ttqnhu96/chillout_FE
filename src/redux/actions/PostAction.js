import { DISPLAY_CREATE_POST_MODAL, HIDE_CREATE_POST_MODAL } from "../constants/types";

export const displayCreatePostModalAction = () => {
    return {
        type: DISPLAY_CREATE_POST_MODAL
    }
}

export const hideCreatePostModalAction = () => {
    return {
        type: HIDE_CREATE_POST_MODAL
    }
}