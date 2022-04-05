import { GET_CITY_LIST, GET_CITY_LIST_SAGA } from "../constants/types"

export const getCityListSagaAction = () => {
    return {
        type: GET_CITY_LIST_SAGA
    }
}

export const getCityListAction = (cityList) => {
    return {
        type: GET_CITY_LIST,
        cityList: cityList
    }
}