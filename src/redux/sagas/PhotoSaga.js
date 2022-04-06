import { call, put, takeLatest } from "redux-saga/effects";
import { ERROR_CODE, } from "../../util/constants/systemSettings";
import { GET_PHOTO_LIST_BY_USER_ID_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { MESSAGES } from "../../util/constants/commonConstants";
import { photoService } from "../../services/PhotoService";
import { getPhotoListByUserIdAction } from "../actions/PhotoAction";

/*=============================================
        GET PHOTO LIST BY USER ID
==============================================*/
/**
 * getPhotoListByUserId
 * @param action 
 */
function* getPhotoListByUserId(action) {
    try {
        const { data } = yield call(() => photoService.getPhotoListByUserId(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Set photo list to reducer
            yield put(getPhotoListByUserIdAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getPhotoListByUserIdWatcher
 * @param
 */
export function* getPhotoListByUserIdWatcher() {
    yield takeLatest(GET_PHOTO_LIST_BY_USER_ID_SAGA, getPhotoListByUserId);
}