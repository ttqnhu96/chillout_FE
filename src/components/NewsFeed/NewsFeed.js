/* eslint-disable react-hooks/exhaustive-deps */
import style from './NewsFeed.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPostListNewsFeedSagaAction } from '../../redux/actions/PostAction';
import NewsFeedPost from '../NewsFeedPost/NewsFeedPost';
import { deleteCommentSagaAction } from '../../redux/actions/CommentAction';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import { USER_LOGIN } from '../../util/constants/systemSettings';

export default function NewsFeed() {
    const dispatch = useDispatch();
    const { isConfirmDeleteModalVisible } = useSelector(state => state.ConfirmDeleteReducer);
    const { deletedCommentId } = useSelector(state => state.CommentReducer);
    
    const handleDeleteComment = () => {
        dispatch(deleteCommentSagaAction(deletedCommentId));
    }

    //Get state from reducer
    const currentUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN)).id;
    const { postListNewsFeed } = useSelector(state => state.PostReducer);

    //Local state
    const [requestToGetPostList, setRequestToGetPostList] = useState({
        userId: 0,
        isPaginated: false
    })

    //Set current user id
    useEffect(() => {
        setRequestToGetPostList(prevState => ({
            ...prevState,
            userId: currentUserId
        }))
    }, [currentUserId])

    useEffect(() => {
        if (requestToGetPostList.userId) {
            dispatch(getPostListNewsFeedSagaAction(requestToGetPostList))
        }
    }, [requestToGetPostList])

    //Render menu items
    const renderPostList = () => {
        return postListNewsFeed.map((post, index) => (
            <NewsFeedPost key={index}
                post={post}
                currentUserId={currentUserId} />
        ))
    }

    return (
        <div className={`${style['news-feed-container']}`}>
            {isConfirmDeleteModalVisible
                && <ConfirmDelete
                    title='Delete Comment?'
                    content='Are you sure you want to delete this comment?'
                    handleDelete={handleDeleteComment}
                />}
            {renderPostList()}
        </div>
    )
}