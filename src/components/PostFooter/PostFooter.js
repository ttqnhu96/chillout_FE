/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentListByPostIdSagaAction } from '../../redux/actions/CommentAction';
import { COMMON_CONSTANT } from '../../util/constants/commonConstants';
import Comment from '../Comment/Comment';
import InputComment from '../InputComment/InputComment';
import style from './PostFooter.module.css';

function PostFooter(props) {
    const dispatch = useDispatch();
    const { postIdProps, commentListProps, totalCommentProps } = props;

    const [displayedCommentList, setDisplayedCommentList] = useState(commentListProps);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [currentMaxComments, setCurrentMaxComments] = useState(COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE);
    const [totalComment, setTotalComment] = useState(totalCommentProps);

    //Call API to load the next page of comments
    useEffect(() => {
        dispatch(getCommentListByPostIdSagaAction({
            postId: postIdProps,
            pageIndex: currentPageIndex,
            pageSize: COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE
        }))

        setCurrentMaxComments(COMMON_CONSTANT.MAX_COMMENTS_IN_A_PAGE * (currentPageIndex + 1))
    }, [currentPageIndex])

    //Set comment list to display (displayed comment list = old page of comments + new page of comments)
    const { postId, commentList, pageIndex, totalRecord } = useSelector(state => state.CommentReducer);
    useEffect(() => {
        if (postId === postIdProps) {
            if(pageIndex === 0) {
                setDisplayedCommentList(commentList);
                setCurrentPageIndex(0);
                setTotalComment(totalRecord);
            } else {
                setDisplayedCommentList([...displayedCommentList, ...commentList]);
            }

        }
    }, [commentList])

    //Render comment list
    const renderCommentList = () => {
        return displayedCommentList.map((comment, index) => (
            <Comment key={index} comment={comment} />
        ))
    }

    return (
        <Fragment>
            {/* Comment list */}
            {renderCommentList()}

            {/* Comment list */}
            {(totalComment > currentMaxComments)
                &&
                <div className={`${style['view-more-comment']}`}
                    onClick={() => { setCurrentPageIndex(prevState => prevState + 1) }}
                >
                    View more comments
                </div>
            }

            {/* Comment text box */}
            <InputComment postId={postIdProps} />
        </Fragment>
    )
}

export default memo(PostFooter)