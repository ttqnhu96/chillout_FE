import { GET_SCHOOL_LIST, GET_SCHOOL_LIST_SAGA } from "../constants/types"

export const getSchoolListSagaAction = () => {
    return {
        type: GET_SCHOOL_LIST_SAGA
    }
}

export const getSchoolListAction = (schoolList) => {
    return {
        type: GET_SCHOOL_LIST,
        schoolList: schoolList
    }
}