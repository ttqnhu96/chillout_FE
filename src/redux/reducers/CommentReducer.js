import { GET_COMMENT_LIST } from "../constants/types";

const initialState = {
    postId: 0,
    commentList: []
}

export const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENT_LIST:
            state.postId = action.postId;
            state.commentList = action.commentList;
            return { ...state }
        default:
            return state;
    }
}