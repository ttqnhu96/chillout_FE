import { Fragment, useState, useEffect } from 'react';
import style from './Comment.module.css';
import { Menu, Dropdown } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { displayConfirmDeleteModalAction } from '../../redux/actions/ConfirmDeleteAction';
import { setDeletedCommentIdAction, updateCommentSagaAction } from '../../redux/actions/CommentAction';
import { AWS_S3_BUCKET_LINK } from '../../util/constants/systemSettings';

export default function Comment(props) {
    const { comment, postAuthorId } = props;
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.ProfileReducer).userProfile.id;

    //Local state
    const [commentValue, setCommentValue] = useState(comment.content);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        setCommentValue(comment.content)
    }, [comment.content])

    //Handle events
    const handleChangeValue = (event) => {
        setCommentValue(event.target.value);
    }
    const handleClickEditButton = () => {
        setIsEditMode(true);
    }
    const handleClickDeleteButton = () => {
        dispatch(displayConfirmDeleteModalAction());
        dispatch(setDeletedCommentIdAction(comment.id));
    }
    const handleClickCancelButton = () => {
        setIsEditMode(false);
        setCommentValue(comment.content);
    }
    const handleClickSaveButton = () => {
        dispatch(updateCommentSagaAction(comment.id, commentValue));
        setIsEditMode(false);
    }

    const menu = (
        <Menu>
            {(currentUserId === comment.userId) &&
                <Menu.Item key="1" onClick={handleClickEditButton}>Edit</Menu.Item>}
            <Menu.Item key="2" onClick={handleClickDeleteButton}>Delete</Menu.Item>
        </Menu>
    );

    return (
        <Fragment>
            <div className={`${style['post-comment-container']}`}>
                <img
                    className={`${style['post-comment-avatar']}`}
                    src={comment.avatar ?
                        `${AWS_S3_BUCKET_LINK}/${comment.avatar}` : "./image/avatar/default_avatar.png"}
                    alt="avatar"
                />
                <div className={`${style['post-comment-username-content-container']}`}>
                    <div className={`${style['post-comment-username']}`}>
                        {`${comment.firstName} ${comment.lastName}`}
                    </div>
                    {
                        isEditMode ?
                            <input
                                autoFocus
                                className={`${style['comment-input']}`}
                                value={commentValue}
                                onChange={handleChangeValue}
                            />
                            :
                            <div className={`${style['post-comment-content']}`}>
                                {commentValue}
                            </div>
                    }
                </div>

                <div className={`${style['post-comments-options-container']}`}>
                    {
                        (currentUserId === comment.userId || currentUserId === postAuthorId)
                        &&
                        <Dropdown overlay={menu} placement="bottom" trigger={['click']} arrow>
                            <img
                                style={{ cursor: 'pointer' }}
                                height={15} width={15}
                                src="./image/icon/more-options.png"
                                alt="more-options"
                            />
                        </Dropdown>
                    }

                </div>
            </div>
            {
                isEditMode ?
                    <div className={`${style['edit-comment-buttons-container']}`}>
                        <div
                            className={`${style['cancel-btn']}`}
                            onClick={handleClickCancelButton}>
                            Cancel
                        </div>
                        ·
                        <div
                            className={`${style['save-btn']}`}
                            onClick={handleClickSaveButton}>
                            Save
                        </div>
                    </div>
                    :
                    <div className={`${style['post-comment-time']}`}>
                        {new Date(comment.createdAt).toLocaleString()}
                    </div>
            }
        </Fragment>
    )
}