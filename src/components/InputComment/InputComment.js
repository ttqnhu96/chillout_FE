import TextArea from 'antd/lib/input/TextArea';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentSagaAction } from '../../redux/actions/CommentAction';
import style from './InputComment.module.css';

export default function InputComment(props) {
    const dispatch = useDispatch();
    const inputCommentRef = useRef();
    const { postId } = props;

    const currentUserAvatar = useSelector(state => state.ProfileReducer).loginUserProfile.avatar;

    const [commentContent, setCommentContent] = useState('');

    const handleChangeValue = (e) => {
        setCommentContent(e.target.value);
    }

    const handlePostComment = () => {
        const newComment = {
            postId: postId,
            content: commentContent
        }
        dispatch(createCommentSagaAction(newComment));
        setCommentContent('');
        inputCommentRef.current.focus();
    }
    return (
        <div className={`${style['write-comment-container']}`}>
            <img
                className={`${style['avatar-current-user-comment']}`}
                src={currentUserAvatar ? currentUserAvatar : "/image/avatar/default_avatar.png"}
                alt="avatar"
            />
            <div className={`${style['comment-text-area-button-container']}`}>
                <TextArea
                    ref={inputCommentRef}
                    className={`${style['comment-text-area']}`}
                    placeholder="Add a comment..."
                    autoSize
                    onChange={handleChangeValue}
                    value={commentContent}
                    maxLength={5000}
                />
                <img
                    className={commentContent ? `${style['send-comment-button']}`: `${style['send-comment-button--disabled']}`}
                    src="/image/icon/send.png"
                    alt="send"
                    onClick={handlePostComment}
                />
            </div>
        </div>
    )
}