import { DISPLAY_UPLOAD_IMAGE_MODAL, DISPLAY_VIEW_PHOTO_MODAL, HIDE_UPLOAD_IMAGE_MODAL, HIDE_VIEW_PHOTO_MODAL } from "../constants/types";


export const displayViewPhotoModalAction = (imageSrc) => {
    return {
        type: DISPLAY_VIEW_PHOTO_MODAL,
        imageSrc: imageSrc
    }
}

export const hideViewPhotoModalAction = () => {
    return {
        type: HIDE_VIEW_PHOTO_MODAL
    }
}

export const displayUploadImageModalAction = () => {
    return {
        type: DISPLAY_UPLOAD_IMAGE_MODAL
    }
}

export const hideUploadImageModalAction = () => {
    return {
        type: HIDE_UPLOAD_IMAGE_MODAL
    }
}