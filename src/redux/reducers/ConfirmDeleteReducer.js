import { DISPLAY_CONFIRM_DELETE_MODAL, HIDE_CONFIRM_DELETE_MODAL } from "../constants/types";

const initialState = {
    isConfirmDeleteModalVisible: false,
}

export const ConfirmDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_CONFIRM_DELETE_MODAL:
            state.isConfirmDeleteModalVisible = true;
            return { ...state }
        case HIDE_CONFIRM_DELETE_MODAL: {
            state.isConfirmDeleteModalVisible = false;
            return { ...state }
        }
        default:
            return state
    }
}