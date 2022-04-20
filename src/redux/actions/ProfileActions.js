import { GET_USER_PROFILE, GET_PROFILE_DETAIL_BY_ID_SAGA, UPDATE_PROFILE_SAGA, UPDATE_AVATAR_SAGA, SET_IS_VIEW_FRIEND_PROFILE, SET_IS_RELOAD_WALL } from "../constants/types"

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

export const setIsViewFriendProfileAction = (isViewFriendProfile) => {
    return {
        type: SET_IS_VIEW_FRIEND_PROFILE,
        isViewFriendProfile: isViewFriendProfile
    }
}

export const setIsReloadWallAction = (isReload) => {
    return {
        type: SET_IS_RELOAD_WALL,
        isReload: isReload
    }
}