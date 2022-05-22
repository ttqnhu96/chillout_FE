import { call, put, takeLatest } from "redux-saga/effects";
import { cityService } from "../../services/CityService";
import { MESSAGES } from "../../util/constants/commonConstants";
import { ERROR_CODE } from "../../util/constants/systemSettings";
import { notify } from "../../util/notification";
import { getCityListAction } from "../actions/CityActions";
import { GET_CITY_LIST_SAGA } from "../constants/types";

/*=============================================
                GET CITY LIST
==============================================*/
/**
 * getCityList
 * @param action 
 */
function* getCityList() {
    try {
        const { data } = yield call(() => cityService.getCityList());
        const response = data.Data;
        const errorCode = data.ErrorCode;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set state in reducer
            yield put(getCityListAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}

export function* getCityListWatcher() {
    yield takeLatest(GET_CITY_LIST_SAGA, getCityList)
}