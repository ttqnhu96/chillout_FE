/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, memo, useEffect } from 'react';
import style from './Cover.module.css';
import { CameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { displayUploadImageModalAction } from '../../redux/actions/PhotoAction';
import UploadImageModal from '../UploadImageModal/UploadImageModal';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { acceptFriendRequestSagaAction, createFriendRequestSagaAction, deleteFriendRequestSagaAction, getRelationshipWithCurrentUserSagaAction } from '../../redux/actions/RelationshipAction';
import { RELATIONSHIP_TYPE } from '../../util/constants/commonConstants';
import { Dropdown, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const menuItems = require('./coverMenuItems.json');
function Cover() {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const dispatch = useDispatch();

    //State from reducer
    const { id, userId, avatar, firstName, lastName } = useSelector(state => state.ProfileReducer).userProfile;
    const { relationshipWithCurrentUser, friendRequestId } = useSelector(state => state.RelationshipReducer);
    const { isUploadImageModalVisible } = useSelector(state => state.PhotoReducer);

    //Use effect
    useEffect(() => {
        if (userId && userId !== loginUserId) {
            dispatch(getRelationshipWithCurrentUserSagaAction({
                userId: Number(userId)
            }))
        }
    }, [userId])


    //Use effect
    useEffect(() => {
        //Hide scrollbar when modal is opened
        document.body.style.overflow = isUploadImageModalVisible ? 'hidden' : 'unset';
        document.body.style.paddingRight = isUploadImageModalVisible ? '0.6rem' : '0';
    }, [isUploadImageModalVisible])

    const menuItemCSS = `${style['cover-menu-item']}`;
    const activeMenuItemCSS = `${style['cover-menu-item-active']}`;

    //Render menu items
    const renderMenu = () => {
        return menuItems.map((menuItem, index) => (
            <NavLink key={index}
                exact
                className={menuItemCSS} activeClassName={activeMenuItemCSS}
                to={`/user/${userId}${menuItem.path}`}
            >
                {menuItem.name}
            </NavLink>
        ))
    }

    //Handle events
    const handleUploadAvatar = () => {
        dispatch(displayUploadImageModalAction())
    }
    const handleCreateFriendRequest = () => {
        dispatch(createFriendRequestSagaAction({
            receiverId: userId
        }))
    }
    const handleAcceptFriendRequest = () => {
        if (friendRequestId) {
            dispatch(acceptFriendRequestSagaAction(friendRequestId))
        }
    }
    const handleCancelFriendRequest = () => {
        if (friendRequestId) {
            dispatch(deleteFriendRequestSagaAction(friendRequestId))
        }
    }

    const responseRequestMenu = (
        <Menu>
            <Menu.Item key="1" onClick={handleAcceptFriendRequest}>Confirm</Menu.Item>
            <Menu.Item key="2" onClick={handleCancelFriendRequest}>Delete request</Menu.Item>
        </Menu>
    );

    const renderAddFriendButton = () => {
        switch (relationshipWithCurrentUser) {
            case RELATIONSHIP_TYPE.FRIEND:
                return (
                    <div className={`${style['friend-btn']}`}>
                        <img width={16} height={16} style={{ opacity: 0.4 }}
                            src="/image/icon/friend-added.png"
                            alt="friend_added"
                        /> <span style={{ opacity: 0.4 }}>Friends</span>
                    </div>
                )
            case RELATIONSHIP_TYPE.FRIEND_REQUEST_RECEIVER:
                return (
                    <div className={`${style['cancel-request-btn']}`}
                        onClick={handleCancelFriendRequest}>
                        <img width={16} height={16}
                            src="/image/icon/cancel-friend-request.png"
                            alt="cancel_friend_request"
                        /> Cancel Request
                    </div>
                )
            case RELATIONSHIP_TYPE.FRIEND_REQUEST_SENDER:
                return (
                    <Dropdown overlay={responseRequestMenu} placement="bottom" trigger={['click']} arrow>
                        <div className={`${style['response-request-btn']}`}>
                            <img width={16} height={16}
                                src="/image/icon/friend-added.png"
                                alt="response_friend_request"
                            /> Response
                        </div>
                    </Dropdown>
                )
            default:
                return (
                    <div className={`${style['add-friend-btn']}`}
                        onClick={handleCreateFriendRequest}>
                        Add friend
                    </div>
                )
        }
    }

    return (
        <Fragment>
            {isUploadImageModalVisible && <UploadImageModal profileId={id} />}
            <div className={`${style['cover-top-container']}`}>
                <div className={`${style['left-col-container']}`}>
                    {(userId && userId !== loginUserId) && renderAddFriendButton()}
                </div>
                <div className={`${style['center-col-container']}`}>
                    <img
                        className={`${style['cover-avatar']}`}
                        src={avatar ?
                            `${AWS_S3_BUCKET_LINK}/${avatar}` : "/image/avatar/default_avatar.png"}
                        alt="avatar"
                    />

                    {
                        (userId && userId === loginUserId)
                        &&
                        <div className={`${style['cover-avatar']} ${style['upload-avatar-btn']}`}
                            onClick={handleUploadAvatar}>
                            <CameraOutlined />
                        </div>
                    }
                </div>
                <div className={`${style['right-col-container']}`}>
                    {
                        (userId && userId !== loginUserId)
                        &&
                        <div className={`${style['message-btn']}`}>
                            Message
                        </div>
                    }
                </div>
            </div>
            <div className={`${style['cover-user-name']}`}>
                {`${firstName || ""} ${lastName || ""}`}
                <hr style={{ width: '95%' }} />
                <div className={`${style['cover-menu-container']}`}>
                    {userId && renderMenu()}
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Cover);