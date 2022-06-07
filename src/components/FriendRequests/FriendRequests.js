/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from 'react';
import style from './FriendRequests.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { acceptFriendRequestSagaAction, deleteFriendRequestSagaAction, getReceivedFriendRequestListSagaAction } from '../../redux/actions/RelationshipAction';
import { USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import { getUserProfileAction, setIsReloadWallAction } from '../../redux/actions/ProfileActions';

export default function FriendRequests() {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const { receivedFriendRequestList } = useSelector(state => state.RelationshipReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReceivedFriendRequestListSagaAction(
            {
                receiverId: loginUserId,
                isPaginated: false
            }))
    }, [])

    //Handle events
    const handleClickFriend = (friendId) => {
        // dispatch(getProfileDetailByUserIdSagaAction(profileId));
        if (friendId !== loginUserId) {
            dispatch(getUserProfileAction({}));
        }
        dispatch(setIsReloadWallAction(true));
        history.push(`/user/${friendId}`);
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
                            src={friendRequest.avatar ? friendRequest.avatar : "/image/avatar/default_avatar.png"}
                            alt="avatar"
                            className={`${style['friend-request-item-avatar']}`}
                            onClick={() => { handleClickFriend(friendRequest.senderId) }}
                        />
                        <div className={`${style['friend-request-item-name']}`}
                            onClick={() => { handleClickFriend(friendRequest.senderId) }}>
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
                    <img src="/image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-request-item-avatar']}`}
                    />
                    <div className={`${style['friend-request-item-name']}`}>
                        Thoai Thoai Thoai Thoai Hihih Thoai Thoai Nhu
                    </div>
                    <div className={`${style['friend-request-confirm-btn']}`}>
                        Confirm
                    </div>
                    <div className={`${style['friend-request-delete-btn']}`}>
                        Delete
                    </div>
                </div>
                <div className={`${style['friend-request-item']}`}>
                    <img src="/image/avatar/default_avatar.png"
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
                    <img src="/image/avatar/default_avatar.png"
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
                    <img src="/image/avatar/default_avatar.png"
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
                    <img src="/image/avatar/default_avatar.png"
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
                    <img src="/image/avatar/default_avatar.png"
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
                    <img src="/image/avatar/default_avatar.png"
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
                    <img src="/image/avatar/default_avatar.png"
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
                    <img src="/image/avatar/default_avatar.png"
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