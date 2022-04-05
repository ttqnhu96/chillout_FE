import { FUNCTION_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class CollegeService extends BaseService {
    //Get college list
    getCollegeList = () => {
        return this.get(FUNCTION_CONSTANTS.COLLEGE)
    }
}


export const collegeService = new CollegeService();