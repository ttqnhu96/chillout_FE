import { memo } from 'react';
import style from './PostCommentQuantity.module.css';

function PostCommentQuantity(props) {
    const { totalComment } = props;

    return (
        <span className={`${style['comment-quantity']}`}>
            {totalComment} Comments
        </span>
    )
}

export default memo(PostCommentQuantity)