import { SET_HOME_MENU_ID_ACTIVE, SET_FRIENDS_MENU_ID_ACTIVE } from "../constants/types";

const initialState = {
    homeMenuIdActive: 0,
    friendsMenuIdActive: 0
}

export const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_MENU_ID_ACTIVE:
            state.homeMenuIdActive = action.id;
            return { ...state }
        case SET_FRIENDS_MENU_ID_ACTIVE: {
            state.friendsMenuIdActive = action.id;
            return { ...state }
        }
        default:
            return state
    }
}