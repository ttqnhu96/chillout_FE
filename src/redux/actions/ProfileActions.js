import { AWS_S3_BUCKET_LINK } from "../../util/constants/systemSettings"
import { GET_FIRST_NAME_AND_AVATAR, GET_PROFILE_DETAIL_BY_ID_SAGA } from "../constants/types"

export const getProfileDetailByIdAction = (profileId) => {
    return {
        type: GET_PROFILE_DETAIL_BY_ID_SAGA,
        profileId: profileId
    }
}

export const getFirstNameAndAvatarAction = (firstName, avatar) => {
    return {
        type: GET_FIRST_NAME_AND_AVATAR,
        firstName: firstName || "",
        avatar: avatar ? `${AWS_S3_BUCKET_LINK}/${avatar}` : ""
    }
}