/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import style from './PostBody.module.css';
import PostContent from '../PostContent/PostContent';
import PostLikes from '../PostLikes/PostLikes';
import PostPhotoLists from '../PostPhotoLists/PostPhotoLists';
import PostCommentQuantity from '../PostCommentQuantity/PostCommentQuantity';
import { useSelector } from 'react-redux';

export default function PostBody(props) {
    const { post, likeIcon, totalLikes, handleLikePost } = props;
    const [totalComment, setTotalComment] = useState(post.totalComment);
    const { postId, totalRecord } = useSelector(state => state.CommentReducer);
    useEffect(() => {
        if (postId === post.id) {
            setTotalComment(totalRecord);
        } else {
            setTotalComment(post.totalComment);
        }
    }, [totalRecord])

    return (
        <Fragment>
            {/* Content */}
            <PostContent content={post.content} />

            {/* Photo */}
            <PostPhotoLists photoList={post.photoList} />

            {/* Like and comment quantity */}
            <div className={`${style['like-comment-quantity-container']}`}>
                <PostLikes likeIcon={likeIcon} totalLikes={totalLikes} handleLikePost={handleLikePost} />
                <PostCommentQuantity totalComment={totalComment} />
            </div>
            <hr style={{ width: '95%' }} />
        </Fragment>
    )
}