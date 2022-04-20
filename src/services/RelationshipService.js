import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class RelationshipService extends BaseService {
    //Get suggestions list
    getSuggestionsList = (request) => {
        return this.post(`${FUNCTION_CONSTANTS.RELATIONSHIP}/${URL_CONSTANTS.GET_SUGGESTIONS_LIST}`, request);
    }
}

export const relationshipService = new RelationshipService();