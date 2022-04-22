import { DISPLAY_CREATE_POST_MODAL, GET_POST_DETAIL_BY_ID, GET_POST_LIST_NEWSFEED, GET_POST_LIST_WALL, HIDE_CREATE_POST_MODAL, SET_IS_RELOAD_NEWS_FEED_POST } from "../constants/types";

const initialState = {
    isCreatePostModalVisible: false,
    postListWall: [],
    postListNewsFeed: [],
    postDetail: {},
    isReloadNewsFeedPost: false
}

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_CREATE_POST_MODAL:
            state.isCreatePostModalVisible = true;
            return { ...state }
        case HIDE_CREATE_POST_MODAL: {
            state.isCreatePostModalVisible = false;
            return { ...state }
        }
        case GET_POST_LIST_WALL: {
            state.postListWall = action.postListWall;
            return { ...state }
        }
        case GET_POST_LIST_NEWSFEED: {
            state.postListNewsFeed = action.postListNewsFeed;
            return { ...state }
        }
        case GET_POST_DETAIL_BY_ID: {
            state.postDetail = action.postDetail;
            return { ...state }
        }
        case SET_IS_RELOAD_NEWS_FEED_POST: {
            state.isReloadNewsFeedPost = action.isReloadNewsFeedPost;
            return { ...state }
        }
        default:
            return state
    }
}