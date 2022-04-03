import { call, put, takeLatest } from "redux-saga/effects";
import { profileService } from "../../services/ProfileService";
import { ERROR_CODE } from "../../util/constants/systemSettings";
import { GET_PROFILE_DETAIL_BY_ID_SAGA } from "../constants/types";
import { getUserProfileAction } from '../actions/ProfileActions';
import { notify } from "../../util/notification";
import { messages } from "../../util/constants/commonConstants";

//--------------------------------------------------------------------------
/**
 * getProfileDetailById
 * @param action 
 */
function* getProfileDetailById(action) {
    try {
        const { data } = yield call(() => profileService.getProfileDetailById(action.profileId));
        const response = data.Data;
        const errorCode = data.ErrorCode;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Call API successfully
            yield put(getUserProfileAction(response));
        } else {
            //Inform error
            return notify('error', messages[errorCode])
        }
    } catch (err) {
        return notify('error', messages.E500)
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