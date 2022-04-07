import { Fragment } from 'react';
import style from './PostBody.module.css';
import PostContent from '../PostContent/PostContent';
import PostLikes from '../PostLikes/PostLikes';
import PostPhotoLists from '../PostPhotoLists/PostPhotoLists';
import PostCommentQuantity from '../PostCommentQuantity/PostCommentQuantity';

export default function PostBody(props) {
    const { post, likeIcon, totalLikes, handleLikePost } = props;

    return (
        <Fragment>
            {/* Content */}
            <PostContent content={post.content} />

            {/* Photo */}
            <PostPhotoLists photoList={post.photoList} />

            {/* Like and comment quantity */}
            <div className={`${style['like-comment-quantity-container']}`}>
                <PostLikes likeIcon={likeIcon} totalLikes={totalLikes} handleLikePost={handleLikePost}/>
                <PostCommentQuantity totalComment={post.totalComment} />
            </div>
            <hr style={{ width: '95%' }} />
        </Fragment>
    )
}