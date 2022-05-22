import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class NotificationService extends BaseService {
    //Create notification
    createNotification = (newNotification) => {
        return this.post(FUNCTION_CONSTANTS.NOTIFICATION, newNotification);
    }

    //Get notication list by receiver id
    getNotificationByReceiverId = (request) => {
        return this.post(`${FUNCTION_CONSTANTS.NOTIFICATION}/${URL_CONSTANTS.GET_NOTIFICATION_LIST_BY_RECEIVER_ID}`, request);
    }
}


export const notificationService = new NotificationService();