import { GET_FIRST_NAME_AND_AVATAR, GET_PROFILE_DETAIL_BY_ID_SAGA } from "../constants/types"

export const getProfileDetailByIdAction = (profileId) => {
    return {
        type: GET_PROFILE_DETAIL_BY_ID_SAGA,
        profileId: profileId
    }
}

export const getUserProfileAction = (userProfile) => {
    return {
        type: GET_FIRST_NAME_AND_AVATAR,
        userProfile: userProfile
        // avatar: avatar ? `${AWS_S3_BUCKET_LINK}/${avatar}` : ""
    }
}