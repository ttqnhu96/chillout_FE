import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoListByUserIdAction } from '../../redux/actions/PhotoAction';
import { getPostListWallAction } from '../../redux/actions/PostAction';
import { getFriendProfileAction, getProfileDetailByIdSagaAction, setIsReloadWallAction, setIsViewFriendProfileAction } from '../../redux/actions/ProfileActions';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import style from './PostHeader.module.css';

function PostHeader(props) {
    const { post } = props;
    const dispatch = useDispatch();
    const currentUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);

    const handleClickUser = (postAuthorId, postAuthorProfileId) => {
        if (postAuthorId === currentUserId) {
            if (isViewFriendProfile === true) {
                dispatch(getPostListWallAction([]));
                dispatch(getPhotoListByUserIdAction([]));
                dispatch(setIsViewFriendProfileAction(false));
            }
        } else {
            if (isViewFriendProfile === false) {
                dispatch(getPostListWallAction([]));
                dispatch(getPhotoListByUserIdAction([]));
                dispatch(setIsViewFriendProfileAction(true));
            }
            dispatch(getFriendProfileAction({}));
            dispatch(getProfileDetailByIdSagaAction(postAuthorProfileId, false));
        }
        
        history.push('/wall');
        dispatch(setIsReloadWallAction(true));
    }

    return (
        <div className={`${style['post-header']}`}>
            <div className={`${style['avatar-container']}`}>
                <img
                    className={`${style['avatar-image']}`}
                    src={post.avatar ?
                        `${AWS_S3_BUCKET_LINK}/${post.avatar}` : "./image/avatar/default_avatar.png"}
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
                    src="./image/icon/more-options.png"
                    alt="more-options"
                />
            </div>
        </div>
    )
}

export default memo(PostHeader)