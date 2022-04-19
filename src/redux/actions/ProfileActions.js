import { GET_USER_PROFILE, GET_PROFILE_DETAIL_BY_ID_SAGA, UPDATE_PROFILE_SAGA, UPDATE_AVATAR_SAGA } from "../constants/types"

export const getProfileDetailByIdSagaAction = (profileId) => {
    return {
        type: GET_PROFILE_DETAIL_BY_ID_SAGA,
        profileId: profileId
    }
}

export const getUserProfileAction = (userProfile) => {
    return {
        type: GET_USER_PROFILE,
        userProfile: userProfile
    }
}

export const updateProfileSagaAction = (profileId, profileUpdate, fieldNameList) => {
    return {
        type: UPDATE_PROFILE_SAGA,
        profileId: profileId,
        profileUpdate: profileUpdate,
        fieldNameList: fieldNameList
    }
}

export const updateAvatarSagaAction = (profileId, photoListUpload) => {
    return {
        type: UPDATE_AVATAR_SAGA,
        profileId: profileId,
        photoListUpload: photoListUpload
    }
}