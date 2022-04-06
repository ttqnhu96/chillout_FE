import { call, put, takeLatest } from "redux-saga/effects";
import { ERROR_CODE, } from "../../util/constants/systemSettings";
import { CREATE_POST_SAGA, GET_POST_LIST_WALL_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { FOLDER_UPLOAD, MESSAGES } from "../../util/constants/commonConstants";
import { postService } from "../../services/PostService";
import { getPostListWallAction, hideCreatePostModalAction } from "../actions/PostAction";
import { photoService } from "../../services/PhotoService";

/*=============================================
                CREATE POST
==============================================*/
/**
 * createPost
 * @param action 
 */
function* createPost(action) {
    try {
        //Set photo list to upload
        const photoListUpload = action.photoListUpload;

        const photosUpload = photoListUpload.map(file => file.originFileObj);
        var formData = new FormData();
        photosUpload.forEach(item => {
            formData.append('files', item);
        })
        //Call API to upload file
        const uploadFileResponse = yield call(() => photoService.uploadPhoto(formData, FOLDER_UPLOAD.POST));

        //Update photo list to create post
        const fileNameList = uploadFileResponse.data.Data;
        const post = { ...action.newPost, photoList: fileNameList };

        const { data } = yield call(() => postService.createPost(post));
        const errorCode = data.ErrorCode;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            notify('success', MESSAGES.CREATE_POST_SUCCESS);

            //Hide create post modal
            yield put(hideCreatePostModalAction());
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * createPostWatcher
 * @param
 */
export function* createPostWatcher() {
    yield takeLatest(CREATE_POST_SAGA, createPost);
}

/*=============================================
            GET POST LIST ON WALL
==============================================*/
/**
 * getPostListWall
 * @param action 
 */
function* getPostListWall(action) {
    try {
        const { data } = yield call(() => postService.getPostListWall(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Set post list to reducer
            yield put(getPostListWallAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getPostListWallWatcher
 * @param
 */
export function* getPostListWallWatcher() {
    yield takeLatest(GET_POST_LIST_WALL_SAGA, getPostListWall);
}