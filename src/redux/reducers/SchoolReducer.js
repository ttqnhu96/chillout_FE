import { GET_SCHOOL_LIST } from "../constants/types"

const initialState = {
    schoolList: []
}

export const SchoolReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SCHOOL_LIST:
            state.schoolList = action.schoolList;
            return { ...state }
        default:
            return state;
    }
}