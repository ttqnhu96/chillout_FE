/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLikesSagaAction } from '../../redux/actions/PostAction';
import PostBody from '../PostBody/PostBody';
import PostFooter from '../PostFooter/PostFooter';
import PostHeader from '../PostHeader/PostHeader';
import style from './NewsFeedPost.module.css';

export default function NewsFeedPost(props) {
    const dispatch = useDispatch();
    const likeIconSrc = "./image/icon/like.png";
    const unlikeIconSrc = "./image/icon/unlike.png";

    //Get props
    const { post, currentUserId } = props;

    //Initial state
    const initialIsLiked = post.userIdLikePostList?.includes(currentUserId);
    const initialLikeIcon = initialIsLiked ? likeIconSrc : unlikeIconSrc;
    const initialLikes = post.likes;
    
    //Local state
    const [isLiked, setIsLiked] = useState(initialIsLiked);
    const [likeIcon, setLikeIcon] = useState(initialLikeIcon);
    const [totalLikes, setTotalLikes] = useState(initialLikes);

    const handleLikePost = useCallback(() => {
        dispatch(updateLikesSagaAction({ postId: post.id }));

        if (isLiked) {
            //If current state is "like", set to "unlike"
            setLikeIcon(unlikeIconSrc);
            setTotalLikes(Number(totalLikes) - 1);
            setIsLiked(false);
        } else {
            //If current state is "unlike", set to "like"
            setLikeIcon(likeIconSrc);
            setTotalLikes(Number(totalLikes) + 1);
            setIsLiked(true);
        }
    }, [isLiked])

    useEffect(() => {
        setLikeIcon(initialLikeIcon);
        setTotalLikes(initialLikes);
        setIsLiked(initialIsLiked);
    }, [post.likes])

    return (
        <div className={`${style['post-container']}`}>
            <PostHeader post={post} />
            <PostBody post={post} likeIcon={likeIcon} totalLikes={totalLikes} handleLikePost={handleLikePost} />
            <PostFooter postIdProps={post.id} commentListProps={post.commentList} totalCommentProps={post.totalComment} />
        </div>
    )
}