import { call, put, takeLatest } from "redux-saga/effects";
import { ERROR_CODE, } from "../../util/constants/systemSettings";
import { CREATE_POST_SAGA, GET_POST_LIST_NEWSFEED_SAGA, GET_POST_LIST_WALL_SAGA, UPDATE_LIKES_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { FOLDER_UPLOAD, MESSAGES } from "../../util/constants/commonConstants";
import { postService } from "../../services/PostService";
import { getPostDetailByIdAction, getPostListNewsFeedAction, getPostListNewsFeedSagaAction, getPostListWallAction, getPostListWallSagaAction, hideCreatePostModalAction } from "../actions/PostAction";
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
        const fileNameList = uploadFileResponse.data.Data || [];
        const post = { ...action.newPost, photoList: fileNameList };

        const { data } = yield call(() => postService.createPost(post));
        const errorCode = data.ErrorCode;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            notify('success', MESSAGES.CREATE_POST_SUCCESS);

            //Hide create post modal
            yield put(hideCreatePostModalAction());

            //Call API to reload wall and news feed
            yield put(getPostListWallSagaAction({
                userId: action.currentUserId,
                isPaginated: false
            }));
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

/*=============================================
            GET POST LIST ON WALL
==============================================*/
/**
 * getPostListNewsFeed
 * @param action 
 */
function* getPostListNewsFeed(action) {
    try {
        const { data } = yield call(() => postService.getPostListNewsFeed(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            //Set post list to reducer
            yield put(getPostListNewsFeedAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getPostListNewsFeedWatcher
 * @param
 */
export function* getPostListNewsFeedWatcher() {
    yield takeLatest(GET_POST_LIST_NEWSFEED_SAGA, getPostListNewsFeed);
}

/*=============================================
                UPDATE LIKES
==============================================*/
/**
 * updateLikes
 * @param action 
 */
function* updateLikes(action) {
    try {
        const { data } = yield call(() => postService.updateLikes(action.request));
        const errorCode = ERROR_CODE.SUCCESSFUL;

        if (data.ErrorCode !== ERROR_CODE.SUCCESSFUL) {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}

/**
 * updateLikesWatcher
 * @param
 */
export function* updateLikesWatcher() {
    yield takeLatest(UPDATE_LIKES_SAGA, updateLikes);
}