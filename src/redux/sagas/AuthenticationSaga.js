import { call, takeLatest } from "redux-saga/effects";
import { ACCESS_TOKEN, USER_LOGIN } from "../../common/constants/systemSettings";
import { history } from "../../common/history";
import { authenticationService } from "../../services/AuthenticationService";
import { USER_LOGIN_SAGA } from "../constants/types";

//--------------------------------------------------------------------------
/**
 * logIn
 * @param action 
 */
function* logIn(action) {
    try {
        const { data } = yield call(() => authenticationService.logIn(action.userLogin));
        //Save login information to localstorage when login success
        localStorage.setItem(ACCESS_TOKEN, data.Data.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.Data));
        history.push('/home');
    } catch (err) {
        console.log("err",err);
    }
}
/**
 * logInWatcher
 * @param
 */
export function* logInWatcher() {
    yield takeLatest(USER_LOGIN_SAGA, logIn);
}
//--------------------------------------------------------------------------

