import { GET_SUGGESTIONS_LIST, GET_SUGGESTIONS_LIST_SAGA } from "../constants/types"

export const getSuggestionsListSagaAction = (request) => {
    return {
        type: GET_SUGGESTIONS_LIST_SAGA,
        request: request
    }
}

export const getSuggestionsListAction = (suggestionsList) => {
    return {
        type: GET_SUGGESTIONS_LIST,
        suggestionsList: suggestionsList
    }
}