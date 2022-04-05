import { FUNCTION_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class SchoolService extends BaseService {
    //Get school list
    getSchoolList = () => {
        return this.get(FUNCTION_CONSTANTS.SCHOOL)
    }
}


export const schoolService = new SchoolService();