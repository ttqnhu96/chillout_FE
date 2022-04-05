import { GET_COLLEGE_LIST } from "../constants/types"

const initialState = {
    collegeList: []
}

export const CollegeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COLLEGE_LIST:
            state.collegeList = action.collegeList;
            return { ...state }
        default:
            return state;
    }
}