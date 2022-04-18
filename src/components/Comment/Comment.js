import { Fragment } from 'react';
import style from './Comment.module.css';
import { Menu, Dropdown } from 'antd';
import { useDispatch } from 'react-redux';
import { displayConfirmDeleteModalAction } from '../../redux/actions/ConfirmDeleteAction';
import { setDeletedCommentIdAction } from '../../redux/actions/CommentAction';

export default function Comment(props) {
    const { comment } = props;
    const dispatch = useDispatch();

    const menu = (
        <Menu>
            <Menu.Item key="1">Edit</Menu.Item>
            <Menu.Item key="2"
                onClick={() => {
                    dispatch(displayConfirmDeleteModalAction());
                    dispatch(setDeletedCommentIdAction(comment.id));
                }}
            >Delete
            </Menu.Item>
        </Menu>
    );

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
                    <Dropdown overlay={menu} placement="bottom" trigger={['click']} arrow>
                        <img
                            style={{ cursor: 'pointer' }}
                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </Dropdown>
                </div>
            </div>
            <div className={`${style['post-comment-time']}`}>
                {new Date(comment.createdAt).toLocaleString()}
            </div>
        </Fragment>
    )
}