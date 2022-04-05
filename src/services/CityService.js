import { FUNCTION_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class CityService extends BaseService {
    //Get city list
    getCityList = () => {
        return this.get(FUNCTION_CONSTANTS.CITY)
    }
}


export const cityService = new CityService();