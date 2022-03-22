import { GET_PROFILE_DETAIL_BY_ID_SAGA } from "../constants/types"

export const getProfileDetailByIdAction = (profileId) => {
    return {
        type: GET_PROFILE_DETAIL_BY_ID_SAGA,
        profileId: profileId
    }
}