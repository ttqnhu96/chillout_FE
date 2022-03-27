import { DISPLAY_CREATE_POST_MODAL, HIDE_CREATE_POST_MODAL } from "../constants/types";

const initialState = {
    isCreatePostModalVisible: false
}

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_CREATE_POST_MODAL:
            state.isCreatePostModalVisible = true;
            return { ...state }
        case HIDE_CREATE_POST_MODAL: {
            state.isCreatePostModalVisible = false;
            return { ...state }
        }
        default:
            return state
    }
}