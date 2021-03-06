import { call, put, takeLatest } from "redux-saga/effects";
import { workplaceService } from "../../services/WorkplaceService";
import { MESSAGES } from "../../util/constants/commonConstants";
import { ERROR_CODE } from "../../util/constants/systemSettings";
import { notify } from "../../util/notification";
import { getWorkplaceListAction } from "../actions/WorkplaceActions";
import { GET_WORKPLACE_LIST_SAGA } from "../constants/types";

/*=============================================
                GET WORKPLACE LIST
==============================================*/
/**
 * getWorkplaceList
 * @param action 
 */
function* getWorkplaceList() {
    try {
        const { data } = yield call(() => workplaceService.getWorkplaceList());
        const response = data.Data;
        const errorCode = data.ErrorCode;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set state in reducer
            yield put(getWorkplaceListAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}

/**
 * getWorkplaceListWatcher
 * @param
 */
export function* getWorkplaceListWatcher() {
    yield takeLatest(GET_WORKPLACE_LIST_SAGA, getWorkplaceList)
}