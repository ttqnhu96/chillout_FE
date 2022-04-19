import { call, put, takeLatest } from "redux-saga/effects";
import { ERROR_CODE, } from "../../util/constants/systemSettings";
import { DELETE_PHOTO_SAGA, GET_PHOTO_LIST_BY_USER_ID_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { MESSAGES } from "../../util/constants/commonConstants";
import { photoService } from "../../services/PhotoService";
import { getPhotoListByUserIdAction, getPhotoListByUserIdSagaAction } from "../actions/PhotoAction";
import { hideConfirmDeleteModalAction } from "../actions/ConfirmDeleteAction";

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

/*=============================================
                DELETE PHOTO 
==============================================*/
/**
 * deletePhoto
 * @param action 
 */
function* deletePhoto(action) {
    try {
        const { data } = yield call(() => photoService.deletePhoto(action.photoId));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            yield put(hideConfirmDeleteModalAction());

            //Call API to reload comment list
            yield put(getPhotoListByUserIdSagaAction({
                userId: response.userId,
                isPaginated: false
            }));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        console.log(err)
        return notify('error', MESSAGES.E500)
    }
}
/**
 * deletePhotoWatcher
 * @param
 */
export function* deletePhotoWatcher() {
    yield takeLatest(DELETE_PHOTO_SAGA, deletePhoto);
}