import TextArea from 'antd/lib/input/TextArea';
import { Fragment, memo } from 'react';
import style from './PostFooter.module.css';

function PostFooter(props) {
    const { post } = props;

    const renderCommentList = () => {
        return post.commentList.map((comment, index) => (
            <Fragment key={index}>
                <div className={`${style['post-comment-container']}`}>
                    <img
                        className={`${style['post-comment-avatar']}`}
                        src={comment.avatar}
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
                    {comment.createdAt}
                </div>
            </Fragment>
        ))
    }

    return (
        <Fragment>
            {/* Comment list */}
            {renderCommentList()}

            {/* Comment text box */}
            <div className={`${style['write-comment-container']}`}>
                <img
                    className={`${style['avatar-current-user-comment']}`}
                    src="./image/avatar/default_avatar.png"
                    alt="avatar"
                />
                <div className={`${style['comment-text-area-button-container']}`}>
                    <TextArea
                        className={`${style['comment-text-area']}`}
                        placeholder="Add a comment..."
                        autoSize
                        onChange={() => { }}
                        onPressEnter={(e) => { console.log(e.target.value) }}
                    />
                    <img
                        className={`${style['send-comment-button']}`}
                        src="./image/icon/send.png"
                        alt="send"
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default memo(PostFooter)