import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setIsReloadWallAction } from '../../redux/actions/ProfileActions';
import { history } from '../../util/history';
import style from './PostHeader.module.css';

function PostHeader(props) {
    const { post } = props;
    const dispatch = useDispatch();

    //Handle events
    const handleClickUser = (postAuthorId) => {
        history.push(`/user/${postAuthorId}`);
        dispatch(setIsReloadWallAction(true));
    }

    return (
        <div className={`${style['post-header']}`}>
            <div className={`${style['avatar-container']}`}>
                <img
                    className={`${style['avatar-image']}`}
                    src={post.avatar ? post.avatar : "/image/avatar/default_avatar.png"}
                    alt="avatar"
                    onClick={() => handleClickUser(post.userId, post.profileId)}
                />
            </div>
            <div className={`${style['name-time-container']}`}>
                <div className={`${style['name-text']}`}
                    onClick={() => handleClickUser(post.userId, post.profileId)}>
                    {`${post.firstName} ${post.lastName}`}
                </div>
                <div className={`${style['time-text']}`}>
                    {new Date(post.createdAt).toLocaleString()} - {post.privacySettingId}
                </div>
            </div>
            <div className={`${style['post-options-container']}`}>
                <img height={20} width={20}
                    src="/image/icon/more-options.png"
                    alt="more-options"
                />
            </div>
        </div>
    )
}

export default memo(PostHeader)