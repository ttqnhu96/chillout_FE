import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class PhotoService extends BaseService {
    //Upload photo
    uploadPhoto = (files, folderUpload) => {
        return this.post(`${FUNCTION_CONSTANTS.UPLOAD_FILE}/${URL_CONSTANTS.UPLOAD_MULTI_IMAGE}/${folderUpload}`, files);
    }
}


export const photoService = new PhotoService();