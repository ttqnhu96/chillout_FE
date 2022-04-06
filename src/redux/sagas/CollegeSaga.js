import { call, put, takeLatest } from "redux-saga/effects";
import { collegeService } from "../../services/CollegeService";
import { MESSAGES } from "../../util/constants/commonConstants";
import { ERROR_CODE } from "../../util/constants/systemSettings";
import { notify } from "../../util/notification";
import { getCollegeListAction } from "../actions/CollegeActions";
import { GET_COLLEGE_LIST_SAGA } from "../constants/types";

/*=============================================
                GET COLLEGE LIST
==============================================*/
/**
 * getCollegeList
 * @param action 
 */
function* getCollegeList(action) {
    try {
        const { data } = yield call(() => collegeService.getCollegeList());
        const response = data.Data;
        const errorCode = data.ErrorCode;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Set state in reducer
            yield put(getCollegeListAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}

/**
 * getCollegeListWatcher
 * @param
 */
export function* getCollegeListWatcher() {
    yield takeLatest(GET_COLLEGE_LIST_SAGA, getCollegeList)
}