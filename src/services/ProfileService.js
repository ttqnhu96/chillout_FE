import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class ProfileService extends BaseService {
    //Get profile detail by user id
    getProfileDetailByUserId = (userId) => {
        return this.get(`${FUNCTION_CONSTANTS.PROFILE}/${URL_CONSTANTS.GET_DETAIL}/${userId}`);
    }

    //Update profile
    updateProfile = (id, profileUpdate) => {
        return this.put(`${FUNCTION_CONSTANTS.PROFILE}/${id}`, profileUpdate);
    }

    //Update avatar
    updateAvatar = (avatarUpdate) => {
        return this.put(`${FUNCTION_CONSTANTS.PROFILE}/${URL_CONSTANTS.UPDATE_AVATAR}`, avatarUpdate);
    }
}


export const profileService = new ProfileService();