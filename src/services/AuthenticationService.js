import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class AuthenticationService extends BaseService {
    //Login
    logIn = (userLogin) => {
        return this.post(FUNCTION_CONSTANTS.USER, URL_CONSTANTS.LOGIN, userLogin);
    }
}


export const authenticationService = new AuthenticationService();