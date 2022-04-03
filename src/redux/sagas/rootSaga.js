import { all } from "redux-saga/effects";
import * as AuthenticationSaga from './AuthenticationSaga';
import * as ProfileSaga from './ProfileSaga';

export function* rootSaga() {
    yield all([
        AuthenticationSaga.signUpWatcher(),
        AuthenticationSaga.logInWatcher(),
        ProfileSaga.getProfileDetailByIdWatcher()
    ])
}