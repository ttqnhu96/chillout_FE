import { call, put, takeLatest } from "redux-saga/effects";
import { ACCESS_TOKEN, ERROR_CODE, USER_LOGIN } from "../../util/constants/systemSettings";
import { history } from "../../util/history";
import { authenticationService } from "../../services/AuthenticationService";
import { LOGIN_SAGA, SIGN_UP_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { messages } from "../../util/constants/commonConstants";
import { hideSignUpModalAction } from "../actions/SignUpAction";

/*=============================================
                    LOGIN
==============================================*/
/**
 * logIn
 * @param action 
 */
function* logIn(action) {
    try {
        const { data } = yield call(() => authenticationService.logIn(action.userLogin));
        const response = data.Data;
        const errorCode = data.ErrorCode;

        if(data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Save login information to sessionStore when login success
            sessionStorage.setItem(ACCESS_TOKEN, response.accessToken);
            sessionStorage.setItem(USER_LOGIN, JSON.stringify(response));
            history.push('/home');
        } else {
            //Inform error
            return notify('error', messages[errorCode])
        }

    } catch (err) {
        return notify('error', messages.E500);
    }
}
/**
 * logInWatcher
 * @param
 */
export function* logInWatcher() {
    yield takeLatest(LOGIN_SAGA, logIn);
}


/*=============================================
                  SIGN UP
==============================================*/
/**
 * signUp
 * @param action 
 */
 function* signUp(action) {
    try {
        const { data } = yield call(() => authenticationService.signUp(action.userSignUp));
        const errorCode = data.ErrorCode;

        if(data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Inform sign up successfully
            notify('success', messages.SIGN_UP_SUCCESS);
            yield put(hideSignUpModalAction());
        }
        else {
            //Inform error
            return notify('error', messages[errorCode])
        }
    } catch (err) {
        return notify('error', messages.E500);
    }
}
/**
 * signUpWatcher
 * @param
 */
export function* signUpWatcher() {
    yield takeLatest(SIGN_UP_SAGA, signUp);
}
//--------------------------------------------------------------------------

