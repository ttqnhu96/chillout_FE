import { GET_WORKPLACE_LIST, GET_WORKPLACE_LIST_SAGA } from "../constants/types"

export const getWorkplaceListSagaAction = () => {
    return {
        type: GET_WORKPLACE_LIST_SAGA
    }
}

export const getWorkplaceListAction = (workplaceList) => {
    return {
        type: GET_WORKPLACE_LIST,
        workplaceList: workplaceList
    }
}