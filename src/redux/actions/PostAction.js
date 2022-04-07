import { CREATE_POST_SAGA, DISPLAY_CREATE_POST_MODAL, GET_POST_DETAIL_BY_ID, GET_POST_DETAIL_BY_ID_SAGA, GET_POST_LIST_NEWSFEED, GET_POST_LIST_NEWSFEED_SAGA, GET_POST_LIST_WALL, GET_POST_LIST_WALL_SAGA, HIDE_CREATE_POST_MODAL, UPDATE_LIKES_SAGA } from "../constants/types";

export const displayCreatePostModalAction = () => {
    return {
        type: DISPLAY_CREATE_POST_MODAL
    }
}

export const hideCreatePostModalAction = () => {
    return {
        type: HIDE_CREATE_POST_MODAL
    }
}

export const createPostSagaAction = (currentUserId, photoListUpload, newPost) => {
    return {
        type: CREATE_POST_SAGA,
        currentUserId: currentUserId,
        photoListUpload: photoListUpload,
        newPost: newPost
    }
}

export const getPostListWallSagaAction = (request) => {
    return {
        type: GET_POST_LIST_WALL_SAGA,
        request: request
    }
}

export const getPostListWallAction = (postListWall) => {
    return {
        type: GET_POST_LIST_WALL,
        postListWall: postListWall
    }
}

export const getPostListNewsFeedSagaAction = (request) => {
    return {
        type: GET_POST_LIST_NEWSFEED_SAGA,
        request: request
    }
}

export const getPostListNewsFeedAction = (postListNewsFeed) => {
    return {
        type: GET_POST_LIST_NEWSFEED,
        postListNewsFeed: postListNewsFeed
    }
}

export const updateLikesSagaAction = (request) => {
    return {
        type: UPDATE_LIKES_SAGA,
        request: request
    }
}

export const getPostDetailByIdSagaAction = (postId) => {
    return {
        type: GET_POST_DETAIL_BY_ID_SAGA,
        postId: postId
    }
}

export const getPostDetailByIdAction = (postDetail) => {
    return {
        type: GET_POST_DETAIL_BY_ID,
        postDetail: postDetail
    }
}