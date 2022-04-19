import { all } from "redux-saga/effects";
import * as AuthenticationSaga from './AuthenticationSaga';
import * as ProfileSaga from './ProfileSaga';
import * as CitySaga from './CitySaga';
import * as WorkplaceSaga from './WorkplaceSaga';
import * as SchoolSaga from './SchoolSaga';
import * as CollegeSaga from './CollegeSaga';
import * as PostSaga from './PostSaga';
import * as PhotoSaga from './PhotoSaga';
import * as CommentSaga from './CommentSaga';

export function* rootSaga() {
    yield all([
        //Authen
        AuthenticationSaga.signUpWatcher(),
        AuthenticationSaga.logInWatcher(),

        //Profile
        ProfileSaga.getProfileDetailByIdWatcher(),
        ProfileSaga.updateProfileWatcher(),

        //City
        CitySaga.getCityListWatcher(),

        //Workplace
        WorkplaceSaga.getWorkplaceListWatcher(),

        //School
        SchoolSaga.getSchoolListWatcher(),

        //College
        CollegeSaga.getCollegeListWatcher(),

        //Post
        PostSaga.createPostWatcher(),
        PostSaga.getPostListWallWatcher(),
        PostSaga.getPostListNewsFeedWatcher(),
        PostSaga.updateLikesWatcher(),

        //Photo
        PhotoSaga.getPhotoListByUserIdWatcher(),

        //Comment
        CommentSaga.getCommentListByPostIdWatcher(),
        CommentSaga.createCommentWatcher(),
        CommentSaga.deleteCommentWatcher(),
        CommentSaga.updateCommentWatcher()
    ])
}