import { Fragment } from 'react';
import style from './FriendRequests.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getReceivedFriendRequestListSagaAction } from '../../redux/actions/RelationshipAction';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';

export default function FriendRequests() {
    const currentUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const { receivedFriendRequestList } = useSelector(state => state.RelationshipReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReceivedFriendRequestListSagaAction(
            {
                receiverId: currentUserId,
                isPaginated: false
            }))
    }, [])

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
                        />
                        <div className={`${style['friend-request-item-name']}`}>
                            {`${friendRequest.firstName || ""} ${friendRequest.lastName || ""}`}
                        </div>
                        <div className={`${style['friend-request-confirm-btn']}`}>
                            Confirm
                        </div>
                        <div className={`${style['friend-request-delete-btn']}`}>
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