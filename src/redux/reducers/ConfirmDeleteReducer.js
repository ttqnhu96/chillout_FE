import { DISPLAY_CONFIRM_DELETE_MODAL, HIDE_CONFIRM_DELETE_MODAL, SET_MODAL_TYPE } from "../constants/types";

const initialState = {
    isConfirmDeleteModalVisible: false,
    modalType: ''
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
        case SET_MODAL_TYPE: {
            state.modalType = action.modalType;
            return { ...state }
        }
        default:
            return state
    }
}