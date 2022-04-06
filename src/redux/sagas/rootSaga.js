import { all } from "redux-saga/effects";
import * as AuthenticationSaga from './AuthenticationSaga';
import * as ProfileSaga from './ProfileSaga';
import * as CitySaga from './CitySaga';
import * as WorkplaceSaga from './WorkplaceSaga';
import * as SchoolSaga from './SchoolSaga';
import * as CollegeSaga from './CollegeSaga';
import * as PostSaga from './PostSaga';

export function* rootSaga() {
    yield all([
        AuthenticationSaga.signUpWatcher(),
        AuthenticationSaga.logInWatcher(),
        ProfileSaga.getProfileDetailByIdWatcher(),
        ProfileSaga.updateProfileWatcher(),
        CitySaga.getCityListWatcher(),
        WorkplaceSaga.getWorkplaceListWatcher(),
        SchoolSaga.getSchoolListWatcher(),
        CollegeSaga.getCollegeListWatcher(),
        PostSaga.createPostWatcher(),
        PostSaga.getPostListWallWatcher()
    ])
}