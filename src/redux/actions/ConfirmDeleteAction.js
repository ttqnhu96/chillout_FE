import { DISPLAY_CONFIRM_DELETE_MODAL, HIDE_CONFIRM_DELETE_MODAL } from "../constants/types"

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