import { SET_FRIENDS_MENU_ID_ACTIVE, SET_HOME_MENU_ID_ACTIVE } from "../constants/types";

export const setHomeMenuIdActiveAction = (id) => {
    return {
        type: SET_HOME_MENU_ID_ACTIVE,
        id: id
    }
}

export const setFriendsMenuIdActiveAction = (id) => {
    return {
        type: SET_FRIENDS_MENU_ID_ACTIVE,
        id: id
    }
}