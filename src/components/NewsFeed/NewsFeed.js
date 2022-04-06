/* eslint-disable react-hooks/exhaustive-deps */
import style from './NewsFeed.module.css';
import PostBody from '../PostBody/PostBody';
import PostFooter from '../PostFooter/PostFooter';
import PostHeader from "../PostHeader/PostHeader";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPostListNewsFeedSagaAction } from '../../redux/actions/PostAction';

export default function NewsFeed() {
    const dispatch = useDispatch();

    //Get state from reducer
    const currentUserId = useSelector(state => state.ProfileReducer).userProfile.id;
    const { postListNewsFeed } = useSelector(state => state.PostReducer);

    //Local state
    const [requestToGetPostList, setRequestToGetPostList] = useState({
        userId: 0,
        isPaginated: false
        // pageIndex: 0,
        // pageSize: 10
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
            <div key={index} className={`${style['post-container']}`}>
                <PostHeader post={post} />
                <PostBody post={post} />
                <PostFooter post={post} />
            </div>
        ))
    }

    return (
        <div className={`${style['news-feed-container']}`}>
            {renderPostList()}
        </div>
    )
}