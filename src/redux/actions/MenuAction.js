import { SET_FRIENDS_MENU_ID_ACTIVE, SET_HOME_MENU_ID_ACTIVE } from "../constants/types";

export const setMenuIdActiveAction = (pageName, id) => {
    switch(pageName) {
        case 'home':
            return {
                type: SET_HOME_MENU_ID_ACTIVE,
                id: id
            }
        case 'friends':
            return {
                type: SET_FRIENDS_MENU_ID_ACTIVE,
                id: id
            }
        default:
            break;
    }
    
}

// export const setFriendsMenuIdActiveAction = (id) => {
//     return {
//         type: SET_FRIENDS_MENU_ID_ACTIVE,
//         id: id
//     }
// }