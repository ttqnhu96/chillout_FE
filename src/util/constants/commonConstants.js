export const COMMON_CONSTANT = {
    MAX_COMMENTS_IN_A_PAGE: 3,
    MAX_NOTIFICATION: 10
}

export const LABELS = {
    firstName: 'First Name',
    lastName: 'Last Name',
    username: 'Username',
    password: 'Password',
    birthday: 'Date of birth'
}

export const MESSAGES = {
    E500: `Server error`,

    E001: `A user with this username already exists. Please log in.`,
    E002: `User does not exist.`,
    E003: `This account has not been registered. Please sign up.`,
    E004: `This account was deactivated.`,
    E005: `The password is incorrect. Please try again`,

    SIGN_UP_SUCCESS: `Congratulations, your account has been successfully created.`,
    UPDATE_SUCCESS: `Your change(s) has been successfully saved!`,
    CREATE_POST_SUCCESS: `Post created successfully.`
}

export const FOLDER_UPLOAD = {
    POST: 'post',
    AVATAR: 'avatar'
}

export const MODAL_TYPE = {
    CONFIRM_DELETE_COMMENT: 'CONFIRM_DELETE_COMMENT',
    CONFIRM_DELETE_PHOTO: 'CONFIRM_DELETE_PHOTO'
}

export const RELATIONSHIP_TYPE = {
    FRIEND: 'FRIEND',
    FRIEND_REQUEST_RECEIVER: 'FRIEND_REQUEST_RECEIVER',
    FRIEND_REQUEST_SENDER: 'FRIEND_REQUEST_SENDER'
}

export const NOTIFICATION_ACTION = {
    LIKE: 'LIKE',
    COMMENT: 'COMMENT',
    SEND_FRIEND_REQUEST: 'SEND_FRIEND_REQUEST',
    ACCEPT_FRIEND_REQUEST: 'ACCEPT_FRIEND_REQUEST'
}

export const OBJECT_TYPE = {
    POST: 'POST',
    FRIEND_REQUEST: 'FRIEND_REQUEST',
    USER: 'USER'
}

export const NOTIFICATION_MESSAGE = {
    REACTED_TO_YOUR_POST: 'REACTED_TO_YOUR_POST',
    COMMENTED_ON_YOUR_POST: 'COMMENTED_ON_YOUR_POST',
    SENT_FRIEND_REQUEST: 'SENT_FRIEND_REQUEST',
    ACCEPTED_FRIEND_REQUEST: 'ACCEPTED_FRIEND_REQUEST'
}

export const REGEX_EMAIL = /^(|[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,})$/