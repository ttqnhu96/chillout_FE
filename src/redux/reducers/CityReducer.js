import { GET_CITY_LIST } from "../constants/types"

const initialState = {
    cityList: []
}

export const CityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY_LIST:
            state.cityList = action.cityList;
            return { ...state }
        default:
            return state;
    }
}