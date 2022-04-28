import { REDUCER_LIKE_POST_RECEIVED, DISPLAY_CREATE_POST_MODAL, GET_POST_DETAIL_BY_ID, GET_POST_LIST_NEWSFEED, GET_POST_LIST_WALL, HIDE_CREATE_POST_MODAL, SET_IS_RELOAD_NEWS_FEED_POST } from "../constants/types";

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
        case REDUCER_LIKE_POST_RECEIVED: {
            updateLikeByPostIdInListNewsFeed(action.data.postId, action.data, state);
            updateLikeByPostIdInListWall(action.data.postId, action.data, state);
            return { ...state }
        }
        default:
            return state
    }
}

const updateLikeByPostIdInListWall = (postId, data, state) => {
    const { postListWall } = state;
    const index = postListWall.findIndex(item => item.id === postId);
    if (index !== -1) {
        postListWall[index].likes = data.likes;
        postListWall[index].userIdLikePostList = data.userIdLikePostList;
    }
}

const updateLikeByPostIdInListNewsFeed = (postId, data, state) => {
    const { postListNewsFeed } = state;
    const index = postListNewsFeed.findIndex(item => item.id === postId);
    if (index !== -1) {
        postListNewsFeed[index].likes = data.likes;
        postListNewsFeed[index].userIdLikePostList = data.userIdLikePostList;
    }
}