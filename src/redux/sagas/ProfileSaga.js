import { call, put, takeLatest } from "redux-saga/effects";
import { profileService } from "../../services/ProfileService";
import { STATUS_CODE } from "../../util/constants/systemSettings";
import { GET_PROFILE_DETAIL_BY_ID_SAGA } from "../constants/types";
import { getFirstNameAndAvatarAction } from '../actions/ProfileActions';

//--------------------------------------------------------------------------
/**
 * getProfileDetailById
 * @param action 
 */
function* getProfileDetailById(action) {
    try {
        const { data, status } = yield call(() => profileService.getProfileDetailById(action.profileId));
        if(status === STATUS_CODE.SUCCESS) {
            yield put(getFirstNameAndAvatarAction(data.Data.firstName, data.Data.avatar));
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