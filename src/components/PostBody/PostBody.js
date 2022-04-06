import { Fragment } from 'react';
import style from './PostBody.module.css';

export default function PostBody(props) {
    const { post } = props;

    return (
        <Fragment>
            {/* Content */}
            <div className={`${style['post-content-container']}`}>
                {post.content}
            </div>

            {/* Photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={`${style['post-photo-container']}`}>
                    <img
                        className={`${style['post-photo']}`}
                        src={post.photo ? post.photo[0] : "https://cdn.brvn.vn/news/480px/2017/13343_Maruko.jpg"}
                        alt="post_photo"
                    />
                </div>
            </div>
            <hr style={{ width: '95%' }} />

            {/* Like and comment quantity */}
            <div className={`${style['like-container']}`}>
                <img height={18} width={18}
                    src="./image/icon/like.png"
                    alt="like"
                />
                <span className={`${style['likes-quantity']}`}>
                    {post.likes}
                </span>
                <span className={`${style['comment-quantity']}`}>
                    {post.totalComment} Comments
                </span>
            </div>
            <hr style={{ width: '95%' }} />
        </Fragment>
    )
}