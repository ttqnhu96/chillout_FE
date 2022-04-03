import { FUNCTION_CONSTANTS, URL_CONSTANTS } from "../util/constants/apiUrls";
import { BaseService } from "./BaseService";

export class AuthenticationService extends BaseService {
    //Log in
    logIn = (userLogin) => {
        return this.post(`${FUNCTION_CONSTANTS.USER}/${URL_CONSTANTS.LOGIN}`, userLogin);
    }

    //Sign up
    signUp = (userSignUp) => {
        return this.post(FUNCTION_CONSTANTS.USER, userSignUp);
    }
}


export const authenticationService = new AuthenticationService();