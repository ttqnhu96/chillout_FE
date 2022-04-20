import { GET_USER_PROFILE, SET_IS_RELOAD_WALL, SET_IS_VIEW_FRIEND_PROFILE } from "../constants/types"

const initialState = {
    userProfile: {},
    friendProfile: {
        id: 2,
        firstName: "Thoai",
        lastName: "Nguyen",
        gender: "Male",
        birthday: "1996-12-29T00:00:00.000Z",
        avatar: "",
        phone: "0123456789",
        email: "qnhu@gmail.com",
        bio: "Tui la Thoai nee",
        cityId: 1,
        cityName: "Can Tho",
        schoolId: 1,
        schoolName: "THPT NVT",
        collegeId: 1,
        collegeName: "Đại học Cần Thơ",
        workplaceId: 15,
        workplaceName: "PTN",
        createdAt: "2022-04-04T13:03:53.266Z"
    },
    isViewFriendProfile: false,
    isReload: false
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            state.userProfile = action.userProfile;
            return { ...state }
        case SET_IS_VIEW_FRIEND_PROFILE:
            state.isViewFriendProfile = action.isViewFriendProfile;
            return { ...state }
        case SET_IS_RELOAD_WALL:
            state.isReload = action.isReload;
            return { ...state }
        default:
            return state;
    }
}