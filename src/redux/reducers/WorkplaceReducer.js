import { GET_WORKPLACE_LIST } from "../constants/types"

const initialState = {
    workplaceList: []
}

export const WorkplaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKPLACE_LIST:
            state.workplaceList = action.workplaceList;
            return { ...state }
        default:
            return state;
    }
}