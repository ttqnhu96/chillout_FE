import { call, put, takeLatest } from "redux-saga/effects";
import { profileService } from "../../services/ProfileService";
import { ACCESS_TOKEN, ERROR_CODE, USER_LOGIN } from "../../util/constants/systemSettings";
import { GET_PROFILE_DETAIL_BY_ID_SAGA, UPDATE_AVATAR_SAGA, UPDATE_PROFILE_SAGA } from "../constants/types";
import { getFriendProfileAction, getProfileDetailByIdSagaAction, getUserProfileAction } from '../actions/ProfileActions';
import { notify } from "../../util/notification";
import { FOLDER_UPLOAD, MESSAGES } from "../../util/constants/commonConstants";
import { history } from "../../util/history";
import { photoService } from "../../services/PhotoService";
import { hideUploadImageModalAction } from "../actions/PhotoAction";
import { getPostListWallSagaAction } from "../actions/PostAction";

/*=============================================
                GET PROFILE
==============================================*/
/**
 * getProfileDetailById
 * @param action 
 */
function* getProfileDetailById(action) {
    try {
        const { data } = yield call(() => profileService.getProfileDetailById(action.profileId));
        const response = data.Data;
        const errorCode = data.ErrorCode;

        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            if(action.isLoggedInUser) {
                //Set user profile state in reducer
                yield put(getUserProfileAction(response));
            } else {
                //Set friend profile state in reducer
                yield put(getFriendProfileAction(response));
            }         
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        sessionStorage.removeItem(ACCESS_TOKEN);
        sessionStorage.removeItem(USER_LOGIN);
        history.push('/login');
    }
}
/**
 * getProfileDetailByIdWatcher
 * @param
 */
export function* getProfileDetailByIdWatcher() {
    yield takeLatest(GET_PROFILE_DETAIL_BY_ID_SAGA, getProfileDetailById);
}

/*=============================================
                UPDATE PROFILE
==============================================*/
/**
 * updateProfile
 * @param action 
 */
function* updateProfile(action) {
    try {
        const { data } = yield call(() => profileService.updateProfile(action.profileId, action.profileUpdate));
        const errorCode = data.ErrorCode;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            notify('success', MESSAGES.UPDATE_SUCCESS);
            //Call API to reload user profile detail
            yield put(getProfileDetailByIdSagaAction(action.profileId, true));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * updateProfileWatcher
 * @param
 */
export function* updateProfileWatcher() {
    yield takeLatest(UPDATE_PROFILE_SAGA, updateProfile);
}

/*=============================================
                UPDATE AVATAR
==============================================*/
/**
 * updateAvatar
 * @param action 
 */
function* updateAvatar(action) {
    try {
        //Set photo list to upload
        const photoListUpload = action.photoListUpload;

        const photosUpload = photoListUpload.map(file => file.originFileObj);
        var formData = new FormData();
        photosUpload.forEach(item => {
            formData.append('files', item);
        })
        //Call API to upload file
        const uploadFileResponse = yield call(() => photoService.uploadMultiImage(formData, FOLDER_UPLOAD.AVATAR));

        //Update avatar
        const fileName = uploadFileResponse.data.Data?.[0] || '';
        const { data } = yield call(() => profileService.updateAvatar({
            profileId: action.profileId,
            avatar: fileName
        }));

        const response = data.Data;
        const errorCode = data.ErrorCode;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //notify('success', MESSAGES.CREATE_POST_SUCCESS);
            //Hide create post modal
            yield put(hideUploadImageModalAction());

            //Call API to reload wall and news feed
            yield put(getPostListWallSagaAction({
                userId: response.userId,
                isPaginated: false
            }));

            //Call API to reload user profile detail
            yield put(getProfileDetailByIdSagaAction(action.profileId, true));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * updateAvatarWatcher
 * @param
 */
export function* updateAvatarWatcher() {
    yield takeLatest(UPDATE_AVATAR_SAGA, updateAvatar);
}