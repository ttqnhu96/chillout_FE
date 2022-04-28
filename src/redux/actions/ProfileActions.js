import { GET_USER_PROFILE, GET_PROFILE_DETAIL_BY_USER_ID_SAGA, UPDATE_PROFILE_SAGA, UPDATE_AVATAR_SAGA, SET_IS_RELOAD_WALL, GET_FRIEND_PROFILE, GET_LOGIN_USER_PROFILE_SAGA, GET_LOGIN_USER_PROFILE } from "../constants/types"

export const getLogInUserProfileSagaAction = (userId) => {
    return {
        type: GET_LOGIN_USER_PROFILE_SAGA,
        userId: userId
    }
}

export const getLogInUserProfileAction = (loginUserProfile) => {
    return {
        type: GET_LOGIN_USER_PROFILE,
        loginUserProfile: loginUserProfile
    }
}

export const getProfileDetailByUserIdSagaAction = (userId) => {
    return {
        type: GET_PROFILE_DETAIL_BY_USER_ID_SAGA,
        userId: userId
    }
}

export const getUserProfileAction = (userProfile) => {
    return {
        type: GET_USER_PROFILE,
        userProfile: userProfile
    }
}

export const getFriendProfileAction = (friendProfile) => {
    return {
        type: GET_FRIEND_PROFILE,
        friendProfile: friendProfile
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

export const setIsReloadWallAction = (isReload) => {
    return {
        type: SET_IS_RELOAD_WALL,
        isReload: isReload
    }
}