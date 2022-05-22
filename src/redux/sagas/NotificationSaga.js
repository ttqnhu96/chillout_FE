//--------------------------------------------------------------------------
import { call, put, takeLatest } from "redux-saga/effects";
import { ERROR_CODE } from "../../util/constants/systemSettings";
import { CREATE_NOTIFICATION_SAGA, GET_NOTIFICATION_LIST_BY_RECEIVER_ID_SAGA } from "../constants/types";
import { notify } from "../../util/notification";
import { COMMON_CONSTANT, MESSAGES } from "../../util/constants/commonConstants";
import { getCommentListByPostIdSagaAction } from "../actions/CommentAction";
import { notificationService } from "../../services/NotificationService";
import { getNotificationListAction, getNotificationListByReceiverIdSagaAction } from "../actions/NotificationAction";

/*=============================================
            CREATE NOTIFICATION 
==============================================*/
/**
 * createNotification
 * @param action 
 */
function* createNotification(action) {
    try {
        const { data } = yield call(() => notificationService.createNotification(action.newNotification));
        const errorCode = data.ErrorCode;
        const response = data.Data;

        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Call API to reload notication list
            yield put(getNotificationListByReceiverIdSagaAction({
                receiverId: response.receiverId,
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
 * createNotificationWatcher
 * @param
 */
export function* createNotificationWatcher() {
    yield takeLatest(CREATE_NOTIFICATION_SAGA, createNotification);
}

/*=============================================
            GET NOTIFICATION LIST 
==============================================*/
/**
 * getNotificationListByReceiverId
 * @param action 
 */
function* getNotificationListByReceiverId(action) {
    try {
        const { data } = yield call(() => notificationService.getNotificationByReceiverId(action.request));
        const errorCode = data.ErrorCode;
        const response = data.Data;
        
        if (errorCode === ERROR_CODE.SUCCESSFUL) {
            //Set comment list to reducer
            yield put(getNotificationListAction(response));
        } else {
            //Inform error
            return notify('error', MESSAGES[errorCode])
        }
    } catch (err) {
        return notify('error', MESSAGES.E500)
    }
}
/**
 * getNotificationListByReceiverIdWatcher
 * @param
 */
export function* getNotificationListByReceiverIdWatcher() {
    yield takeLatest(GET_NOTIFICATION_LIST_BY_RECEIVER_ID_SAGA, getNotificationListByReceiverId);
}