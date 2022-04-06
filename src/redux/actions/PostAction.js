import { CREATE_POST_SAGA, DISPLAY_CREATE_POST_MODAL, GET_POST_LIST_WALL, GET_POST_LIST_WALL_SAGA, HIDE_CREATE_POST_MODAL } from "../constants/types";

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

export const createPostSagaAction = (newPost) => {
    return {
        type: CREATE_POST_SAGA,
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