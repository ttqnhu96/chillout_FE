import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class PhotoService extends BaseService {
    //Upload multiple image
    uploadMultiImage = (files, folderUpload) => {
        return this.post(`${FUNCTION_CONSTANTS.UPLOAD_FILE}/${URL_CONSTANTS.UPLOAD_MULTI_IMAGE}/${folderUpload}`, files);
    }

    //Get photo list by user id
    getPhotoListByUserId = (request) => {
        return this.post(`${FUNCTION_CONSTANTS.PHOTO}/${URL_CONSTANTS.GET_PHOTO_LIST_BY_USER_ID}`, request)
    }

    //Upload single image
    uploadSingleImage = (file, folderUpload) => {
        return this.post(`${FUNCTION_CONSTANTS.UPLOAD_FILE}/${URL_CONSTANTS.UPLOAD_SINGLE_IMAGE}/${folderUpload}`, file);
    }

    //Delete photo
    deletePhoto = (id) => {
        return this.delete(`${FUNCTION_CONSTANTS.PHOTO}/${id}`);
    }
}


export const photoService = new PhotoService();
