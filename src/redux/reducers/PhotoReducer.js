import { DISPLAY_UPLOAD_IMAGE_MODAL, DISPLAY_VIEW_PHOTO_MODAL, GET_PHOTO_LIST_BY_USER_ID, HIDE_UPLOAD_IMAGE_MODAL, HIDE_VIEW_PHOTO_MODAL, SET_DELETED_PHOTO_ID } from "../constants/types";

const initialState = {
    isViewPhotoModalVisible: false,
    imageSrc: "",
    isUploadImageModalVisible: false,
    photoList: [],
    deletedPhotoId: 0
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
        case GET_PHOTO_LIST_BY_USER_ID: {
            state.photoList = action.photoList;
            return { ...state }
        }
        case SET_DELETED_PHOTO_ID:
            state.deletedPhotoId = action.deletedPhotoId;
            return { ...state }
        default:
            return state;
    }
}