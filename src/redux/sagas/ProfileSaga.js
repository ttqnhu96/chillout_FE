import { call, put, takeLatest } from "redux-saga/effects";
import { profileService } from "../../services/ProfileService";
import { AWS_S3_BUCKET_LINK, STATUS_CODE } from "../../util/constants/systemSettings";
import { GET_FIRST_NAME_AND_AVATAR, GET_PROFILE_DETAIL_BY_ID_SAGA } from "../constants/types";

//--------------------------------------------------------------------------
/**
 * getProfileDetailById
 * @param action 
 */
function* getProfileDetailById(action) {
    try {
        const { data, status } = yield call(() => profileService.getProfileDetailById(action.profileId));
        if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_FIRST_NAME_AND_AVATAR,
                firstName: data.Data.firstName || "",
                avatar: data.Data.avatar ? `${AWS_S3_BUCKET_LINK}/${data.Data.avatar}` : ""
            });
        }
    } catch (err) {
        console.log(err);
    }
}
/**
 * logInWatcher
 * @param
 */
export function* getProfileDetailByIdWatcher() {
    yield takeLatest(GET_PROFILE_DETAIL_BY_ID_SAGA, getProfileDetailById);
}
//--------------------------------------------------------------------------