import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class RelationshipService extends BaseService {
    //Get suggestions list
    getSuggestionsList = (request) => {
        return this.post(`${FUNCTION_CONSTANTS.RELATIONSHIP}/${URL_CONSTANTS.GET_SUGGESTIONS_LIST}`, request);
    }

    //Get friend list
    getFriendList = (request) => {
        return this.post(`${FUNCTION_CONSTANTS.RELATIONSHIP}/${URL_CONSTANTS.GET_FRIEND_LIST}`, request);
    }

    //Get friend request list
    getReceivedFriendRequestList = (request) => {
        return this.post(`${FUNCTION_CONSTANTS.FRIEND_REQUEST}/${URL_CONSTANTS.GET_RECEIVED_FRIEND_REQUEST_LIST}`, request);
    }

    //Accept friend request
    acceptFriendRequest = (id) => {
        return this.put(`${FUNCTION_CONSTANTS.FRIEND_REQUEST}/${id}`);
    }

    //Delete friend request
    deletetFriendRequest = (id) => {
        return this.delete(`${FUNCTION_CONSTANTS.FRIEND_REQUEST}/${id}`);
    }

    //Create friend request
    createFriendRequest = (newFriendRequest) => {
        return this.post(FUNCTION_CONSTANTS.FRIEND_REQUEST, newFriendRequest);
    }
}

export const relationshipService = new RelationshipService();