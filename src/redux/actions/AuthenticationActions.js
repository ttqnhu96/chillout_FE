import { USER_LOGIN_SAGA } from "../constants/types"

export const logInAction = (username, password) => {
    return {
        type: USER_LOGIN_SAGA,
        userLogin: {
            username: username,
            password: password
        }
    }
}