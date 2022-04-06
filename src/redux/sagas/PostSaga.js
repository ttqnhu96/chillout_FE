import { call, put, takeLatest } from "redux-saga/effects";
import { ERROR_CODE, } from "../../util/constants/systemSettings";
import { CREATE_POST_SAGA, GET_POST_LIST_WALL_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { messages } from "../../util/constants/commonConstants";
import { postService } from "../../services/PostService";
import { getPostListWallAction, hideCreatePostModalAction } from "../actions/PostAction";

/*=============================================
                CREATE POST
==============================================*/
/**
 * createPost
 * @param action 
 */
function* createPost(action) {
    try {
        const { data } = yield call(() => postService.createPost(action.newPost));
        const errorCode = data.ErrorCode;
        if (data.ErrorCode === ERROR_CODE.SUCCESSFUL) {
            notify('success', messages.CREATE_POST_SUCCESS);
        
            //Hide create post modal
            yield put(hideCreatePostModalAction());

            //Call API to reload user profile detail
            //yield put(getProfileDetailByIdSagaAction(action.profileId));
        } else {
            //Inform error
            return notify('error', messages[errorCode])
        }
    } catch (err) {
        return notify('error', messages.E500)
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
            console.log('getPostListWall response: ', response)

            //Set post list to reducer
            yield put(getPostListWallAction(response));
        } else {
            //Inform error
            return notify('error', messages[errorCode])
        }
    } catch (err) {
        return notify('error', messages.E500)
    }
}
/**
 * getPostListWallWatcher
 * @param
 */
export function* getPostListWallWatcher() {
    yield takeLatest(GET_POST_LIST_WALL_SAGA, getPostListWall);
}