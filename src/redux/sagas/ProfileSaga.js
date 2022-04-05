import { call, put, takeLatest } from "redux-saga/effects";
import { profileService } from "../../services/ProfileService";
import { ACCESS_TOKEN, ERROR_CODE, USER_LOGIN } from "../../util/constants/systemSettings";
import { GET_PROFILE_DETAIL_BY_ID_SAGA, UPDATE_PROFILE_SAGA } from "../constants/types";
import { getProfileDetailByIdSagaAction, getUserProfileAction } from '../actions/ProfileActions';
import { notify } from "../../util/notification";
import { messages } from "../../util/constants/commonConstants";
import { history } from "../../util/history";

/*=============================================
                GET PROFILE
==============================================*/
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
            //Set user profile state in reducer
            yield put(getUserProfileAction(response));
        } else {
            //Inform error
            return notify('error', messages[errorCode])
        }
    } catch (err) {
        sessionStorage.removeItem(ACCESS_TOKEN);
        sessionStorage.removeItem(USER_LOGIN);
        history.push('/login');
    }
}
/**
 * getProfileDetailByIdWatcher
 * @param
 */
export function* getProfileDetailByIdWatcher() {
    yield takeLatest(GET_PROFILE_DETAIL_BY_ID_SAGA, getProfileDetailById);
}

/*=============================================
                UPDATE PROFILE
==============================================*/
/**
 * updateProfile
 * @param action 
 */
function* updateProfile(action) {
    try {
        const { data } = yield call(() => profileService.updateProfile(action.profileId, action.profileUpdate));
        const errorCode = data.ErrorCode;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            notify('success', messages.UPDATE_SUCCESS);
        
            //Call API to reload user profile detail
            yield put(getProfileDetailByIdSagaAction(action.profileId));
        } else {
            //Inform error
            return notify('error', messages[errorCode])
        }
    } catch (err) {
        return notify('error', messages.E500)
    }
}
/**
 * updateProfileWatcher
 * @param
 */
export function* updateProfileWatcher() {
    yield takeLatest(UPDATE_PROFILE_SAGA, updateProfile);
}