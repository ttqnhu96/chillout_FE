import { GET_SUGGESTIONS_LIST } from "../constants/types";

const initialState = {
    suggestionsList: []
}

export const RelationshipReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUGGESTIONS_LIST:
            state.suggestionsList = action.suggestionsList;
            return { ...state }
        default:
            return state
    }
}