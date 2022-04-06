import { DISPLAY_CREATE_POST_MODAL, GET_POST_LIST_WALL, HIDE_CREATE_POST_MODAL } from "../constants/types";

const initialState = {
    isCreatePostModalVisible: false,
    postListWall: []
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
        case GET_POST_LIST_WALL: {
            state.postListWall = action.postListWall;
            return { ...state }
        }
        default:
            return state
    }
}