import { Fragment, memo } from 'react';
import style from './PostLikes.module.css';

function PostLikes(props) {
    const { likeIcon, totalLikes, handleLikePost } = props;

    return (
        <Fragment>
            <img height={18} width={18}
                src={likeIcon}
                alt="like"
                style={{ cursor: 'pointer' }}
                onClick={handleLikePost}
            />
            <span className={`${style['likes-quantity']}`}>
                {totalLikes}
            </span>
        </Fragment>
    )
}

export default memo(PostLikes);