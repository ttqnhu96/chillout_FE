import { FUNCTION_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class WorkplaceService extends BaseService {
    //Get Workplace list
    getWorkplaceList = () => {
        return this.get(FUNCTION_CONSTANTS.WORKPLACE)
    }
}


export const workplaceService = new WorkplaceService();