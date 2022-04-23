import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoListByUserIdAction } from '../../redux/actions/PhotoAction';
import { getPostListWallAction } from '../../redux/actions/PostAction';
import { getFriendProfileAction, getProfileDetailByIdSagaAction, setIsReloadWallAction, setIsViewFriendProfileAction } from '../../redux/actions/ProfileActions';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import Search from '../Search/Search';
import style from './FriendList.module.css';

export default function FriendList() {
    const dispatch = useDispatch();
    const currentUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const loggedInUserfriendList = useSelector(state => state.ProfileReducer).userProfile.friendList; //In case view logged in user profile
    const friendFriendList = useSelector(state => state.ProfileReducer).friendProfile.friendList; //In case view friend profile
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);
    const friendId = useSelector(state => state.ProfileReducer).friendProfile.userId;

    //Handle events
    const handleClickFriend = (userId, profileId) => {
        if (userId === currentUserId) {
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
            //If prev profile is not current friend's profile, 
            // clear old data and get new data
            if (friendId !== userId) {
                dispatch(getFriendProfileAction({}));
            }
        }

        dispatch(setIsReloadWallAction(true));
        dispatch(getProfileDetailByIdSagaAction(profileId, false));
        history.push('/wall');
    }

    const renderFriendList = () => {
        const friendList = isViewFriendProfile ? friendFriendList : loggedInUserfriendList;
        return (
            friendList?.map((friend, index) => {
                return (
                    <div key={index} className={`${style['friendlist-item']}`}>
                        <img
                            src={friend.avatar ?
                                `${AWS_S3_BUCKET_LINK}/${friend.avatar}` : "./image/avatar/default_avatar.png"}
                            alt="avatar"
                            className={`${style['friendlist-item-avatar']}`}
                            onClick={() => { handleClickFriend(friend.userId, friend.profileId) }}
                        />
                        <div className={`${style['friendlist-item-name']}`}
                            onClick={() => { handleClickFriend(friend.userId, friend.profileId) }}>
                            {`${friend.firstName || ""} ${friend.lastName || ""}`}
                        </div>
                        {/* <div className={`${style['friendlist-options']}`}>
                            <img

                                height={15} width={15}
                                src="./image/icon/more-options.png"
                                alt="more-options"
                            />
                        </div> */}
                    </div>
                )
            })
        )
    }
    return (
        <Fragment>
            <div className={`${style['friendlist-title']}`}>Friends</div>
            <div className={`${style['friends-search-row']}`}>
                <Search />
            </div>
            <div className={`${style['friendlist-item-container']}`}>
                {renderFriendList()}
                {/* <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}