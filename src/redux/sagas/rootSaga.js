import { all } from "redux-saga/effects";
import * as AuthenticationSaga from './AuthenticationSaga';

export function* rootSaga() {
    yield all([
        AuthenticationSaga.logInWatcher(),
    ])
}