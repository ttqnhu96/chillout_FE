import { GET_COLLEGE_LIST, GET_COLLEGE_LIST_SAGA } from "../constants/types"

export const getCollegeListSagaAction = () => {
    return {
        type: GET_COLLEGE_LIST_SAGA
    }
}

export const getCollegeListAction = (collegeList) => {
    return {
        type: GET_COLLEGE_LIST,
        collegeList: collegeList
    }
}