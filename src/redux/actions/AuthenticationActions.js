import { LOGIN_SAGA } from "../constants/types"

export const logInAction = (username, password) => {
    return {
        type: LOGIN_SAGA,
        userLogin: {
            username: username,
            password: password
        }
    }
}