import { SET_DELETED_COMMENT_ID, GET_COMMENT_LIST } from "../constants/types";

const initialState = {
    postId: 0,
    commentList: [],
    pageIndex: -1,
    totalRecord: 0,
    deletedCommentId: 0,
    isReloadComment: false
}

export const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENT_LIST:
            state.postId = action.postId;
            state.commentList = action.commentList;
            state.pageIndex = action.pageIndex;
            state.totalRecord = action.totalRecord;
            return { ...state }
        case SET_DELETED_COMMENT_ID:
            state.deletedCommentId = action.deletedCommentId;
            return { ...state }
        // case RELOAD_COMMENT:
        //     state.isReloadComment = action.isReloadComment;
        //     return { ...state }
        default:
            return state;
    }
}