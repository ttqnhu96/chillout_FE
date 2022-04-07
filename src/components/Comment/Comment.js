import { Fragment } from 'react';
import style from './Comment.module.css';

export default function Comment(props) {
    const { comment } = props;

    return (
        <Fragment>
            <div className={`${style['post-comment-container']}`}>
                <img
                    className={`${style['post-comment-avatar']}`}
                    src={comment.avatar || "./image/avatar/default_avatar.png"}
                    alt="avatar"
                />
                <div className={`${style['post-comment-username-content-container']}`}>
                    <div className={`${style['post-comment-username']}`}>
                        {`${comment.firstName} ${comment.lastName}`}
                    </div>
                    <div className={`${style['post-comment-content']}`}>
                        {comment.content}
                    </div>
                </div>
                <div className={`${style['post-comments-options-container']}`}>
                    <img
                        style={{ cursor: 'pointer' }}
                        height={15} width={15}
                        src="./image/icon/more-options.png"
                        alt="more-options"
                    />
                </div>
            </div>
            <div className={`${style['post-comment-time']}`}>
                {new Date(comment.createdAt).toLocaleString()}
            </div>
        </Fragment>
    )
}