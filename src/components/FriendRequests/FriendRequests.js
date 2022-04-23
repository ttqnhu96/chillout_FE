/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from 'react';
import style from './FriendRequests.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { acceptFriendRequestSagaAction, deleteFriendRequestSagaAction, getReceivedFriendRequestListSagaAction } from '../../redux/actions/RelationshipAction';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import { getFriendProfileAction, getProfileDetailByIdSagaAction, setIsReloadWallAction, setIsViewFriendProfileAction } from '../../redux/actions/ProfileActions';
import { getPhotoListByUserIdAction } from '../../redux/actions/PhotoAction';
import { getPostListWallAction } from '../../redux/actions/PostAction';

export default function FriendRequests() {
    const currentUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const { receivedFriendRequestList } = useSelector(state => state.RelationshipReducer);
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);
    const friendId = useSelector(state => state.ProfileReducer).friendProfile.userId;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReceivedFriendRequestListSagaAction(
            {
                receiverId: currentUserId,
                isPaginated: false
            }))
    }, [])

    //Handle events
    const handleClickFriend = (userId, profileId) => {
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

        dispatch(setIsReloadWallAction(true));
        dispatch(getProfileDetailByIdSagaAction(profileId, false));
        history.push('/wall');
    }

    //Handle accept friend request
    const handleAcceptFriendRequest = (friendRequestId) => {
        dispatch(acceptFriendRequestSagaAction(friendRequestId))
    }

    //Handle delete friend request
    const handleDeleteFriendRequest = (friendRequestId) => {
        dispatch(deleteFriendRequestSagaAction(friendRequestId))
    }

    const renderFriendRequestList = () => {
        return (
            receivedFriendRequestList?.map((friendRequest, index) => {
                return (
                    <div key={index} className={`${style['friend-request-item']}`}>
                        <img
                            src={friendRequest.avatar ?
                                `${AWS_S3_BUCKET_LINK}/${friendRequest.avatar}` : "./image/avatar/default_avatar.png"}
                            alt="avatar"
                            className={`${style['friend-request-item-avatar']}`}
                            onClick={() => { handleClickFriend(friendRequest.userId, friendRequest.profileId) }}
                        />
                        <div className={`${style['friend-request-item-name']}`}
                            onClick={() => { handleClickFriend(friendRequest.userId, friendRequest.profileId) }}>
                            {`${friendRequest.firstName || ""} ${friendRequest.lastName || ""}`}
                        </div>
                        <div
                            className={`${style['friend-request-confirm-btn']}`}
                            onClick={() => { handleAcceptFriendRequest(friendRequest.id) }}>
                            Confirm
                        </div>
                        <div className={`${style['friend-request-delete-btn']}`}
                            onClick={() => { handleDeleteFriendRequest(friendRequest.id) }}>
                            Delete
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <Fragment>
            <div className={`${style['friend-request-title']}`}>Friend Request</div>
            <div className={`${style['friend-request-item-container']}`}>
                {renderFriendRequestList()}
                {/* <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai Nguyen
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai Nguyen
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai Nguyen
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai Nguyen
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai Nguyen
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}