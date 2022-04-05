import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class ProfileService extends BaseService {
    //Get profile detail by id
    getProfileDetailById = (profileId) => {
        return this.get(`${FUNCTION_CONSTANTS.PROFILE}/${URL_CONSTANTS.GET_DETAIL}/${profileId}`);
    }

    //Update profile
    updateProfile = (id, profileUpdate) => {
        return this.put(`${FUNCTION_CONSTANTS.PROFILE}/${id}`, profileUpdate);
    }
}


export const profileService = new ProfileService();