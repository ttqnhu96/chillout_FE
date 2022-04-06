export const labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    username: 'Username',
    password: 'Password',
    birthday: 'Date of birth'
}

export const messages = {
    E500: `Server error`,

    E001: `A user with this username already exists. Please log in.`,
    E002: `User does not exist.`,
    E003: `This account has not been registered. Please sign up.`,
    E004: `This account was deactivated.`,

    SIGN_UP_SUCCESS: `Congratulations, your account has been successfully created.`,
    UPDATE_SUCCESS: `Your change(s) has been successfully saved!`,
    CREATE_POST_SUCCESS: `Post created successfully.`
}

export const REGEX_EMAIL = /^(|[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,})$/