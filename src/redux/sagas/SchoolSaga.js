import { call, put, takeLatest } from "redux-saga/effects";
import { schoolService } from "../../services/SchoolService";
import { MESSAGES } from "../../util/constants/commonConstants";
import { ERROR_CODE } from "../../util/constants/systemSettings";
import { notify } from "../../util/notification";
import { getSchoolListAction } from "../actions/SchoolActions";
import { GET_SCHOOL_LIST_SAGA } from "../constants/types";

/*=============================================
                GET SCHOOL LIST
==============================================*/
/**
 * getSchoolList
 * @param action 
 */
function* getSchoolList(action) {
    try {
        const { data } = yield call(() => schoolService.getSchoolList());
        const response = data.Data;
        const errorCode = data.ErrorCode;
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set state in reducer
            yield put(getSchoolListAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}

/**
 * getSchoolListWatcher
 * @param
 */
export function* getSchoolListWatcher() {
    yield takeLatest(GET_SCHOOL_LIST_SAGA, getSchoolList)
}