import { LOGIN_SAGA, SIGN_UP_SAGA } from "../constants/types"

export const signUpAction = (userSignUp) => {
    return {
        type: SIGN_UP_SAGA,
        userSignUp: {
            username: userSignUp.username,
            password: userSignUp.password,
            firstName: userSignUp.firstName,
            lastName: userSignUp.lastName,
            birthday: userSignUp.birthday,
            gender: userSignUp.gender
        }
    }
}

export const logInAction = (username, password) => {
    return {
        type: LOGIN_SAGA,
        userLogin: {
            username: username,
            password: password
        }
    }
}