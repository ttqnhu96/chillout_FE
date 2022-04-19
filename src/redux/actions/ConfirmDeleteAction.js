import { DISPLAY_CONFIRM_DELETE_MODAL, HIDE_CONFIRM_DELETE_MODAL, SET_MODAL_TYPE } from "../constants/types"

export const displayConfirmDeleteModalAction = () => {
    return {
        type: DISPLAY_CONFIRM_DELETE_MODAL
    }
}

export const hideConfirmDeleteModalAction = () => {
    return {
        type: HIDE_CONFIRM_DELETE_MODAL
    }
}

export const setModalTypeAction = (modalType) => {
    return {
        type: SET_MODAL_TYPE,
        modalType: modalType
    }
}