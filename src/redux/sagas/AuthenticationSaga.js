import { call, delay, takeLatest } from "redux-saga/effects";
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/constants/systemSettings";
import { history } from "../../util/history";
import { authenticationService } from "../../services/AuthenticationService";
import { LOGIN_SAGA } from "../constants/types";
import { notify } from "../../util/notification";

//--------------------------------------------------------------------------
/**
 * logIn
 * @param action 
 */
function* logIn(action) {
    try {
        const { data } = yield call(() => authenticationService.logIn(action.userLogin));
        //Save login information to sessionStore when login success
        sessionStorage.setItem(ACCESS_TOKEN, data.Data.accessToken);
        sessionStorage.setItem(USER_LOGIN, JSON.stringify(data.Data));
        
        history.push('/home');
    } catch (err) {
        console.log(err);
    }
}
/**
 * logInWatcher
 * @param
 */
export function* logInWatcher() {
    yield takeLatest(LOGIN_SAGA, logIn);
}
//--------------------------------------------------------------------------

