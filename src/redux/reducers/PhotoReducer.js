import { DISPLAY_UPLOAD_IMAGE_MODAL, DISPLAY_VIEW_PHOTO_MODAL, HIDE_UPLOAD_IMAGE_MODAL, HIDE_VIEW_PHOTO_MODAL } from "../constants/types";

const initialState = {
    isViewPhotoModalVisible: false,
    imageSrc: "",
    isUploadImageModalVisible: false,
}

export const PhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_VIEW_PHOTO_MODAL:
            state.isViewPhotoModalVisible = true;
            state.imageSrc = action.imageSrc;
            return { ...state }
        case HIDE_VIEW_PHOTO_MODAL: {
            state.isViewPhotoModalVisible = false;
            return { ...state }
        }
        case DISPLAY_UPLOAD_IMAGE_MODAL: {
            state.isUploadImageModalVisible = true;
            return { ...state }
        }
        case HIDE_UPLOAD_IMAGE_MODAL: {
            state.isUploadImageModalVisible = false;
            return { ...state }
        }
        default:
            return state;
    }
}