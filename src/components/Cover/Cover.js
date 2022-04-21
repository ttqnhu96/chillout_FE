import { Fragment, useEffect } from 'react';
import style from './Cover.module.css';
import { CameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { displayUploadImageModalAction } from '../../redux/actions/PhotoAction';
import UploadImageModal from '../UploadImageModal/UploadImageModal';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';

const menuItems = require('./coverMenuItems.json');
export default function Cover(props) {
    const dispatch = useDispatch();

    //Get state from reducer
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);
    //In case view logged in user profile
    const currentUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN)).id;
    const profileId = useSelector(state => state.ProfileReducer).userProfile.id;
    const avatar = useSelector(state => state.ProfileReducer).userProfile.avatar;
    const firstName = useSelector(state => state.ProfileReducer).userProfile.firstName;
    const lastName = useSelector(state => state.ProfileReducer).userProfile.lastName;

    //In case view friend profile
    const friendAvatar = useSelector(state => state.ProfileReducer).friendProfile.avatar;
    const friendFirstName = useSelector(state => state.ProfileReducer).friendProfile.firstName;
    const friendLastName = useSelector(state => state.ProfileReducer).friendProfile.lastName;
    const friendList = useSelector(state => state.ProfileReducer).friendProfile.friendList;

    const { isUploadImageModalVisible } = useSelector(state => state.PhotoReducer);



    useEffect(() => {
        //Hide scrollbar when modal is opened
        document.body.style.overflow = isUploadImageModalVisible ? 'hidden' : 'unset';
        document.body.style.paddingRight = isUploadImageModalVisible ? '0.6rem' : '0';
    }, [isUploadImageModalVisible])

    const { activeMenuId, setActiveMenuId } = props;
    const menuItemCSS = `${style['cover-menu-item']}`;
    const activeMenuItemCSS = `${style['cover-menu-item-active']}`;

    //Render menu items
    const renderMenu = () => {
        return menuItems.map((menuItem, index) => (
            <div key={index}
                className={activeMenuId === menuItem.id ? activeMenuItemCSS : menuItemCSS}
                onClick={() => { setActiveMenuId(menuItem.id) }}
            >
                {menuItem.name}
            </div>
        ))
    }

    //Handle events
    const handleUploadAvatar = () => {
        dispatch(displayUploadImageModalAction())
    }
    const renderAddFriendButton = () => {
        if (isViewFriendProfile) {
            const friendListUserId = friendList?.map(item => { return item.userId })
            if (friendListUserId?.includes(currentUserId)) {
                return (
                    <div className={`${style['friend-btn']}`}>
                        <img width={16} height={16} style={{opacity: 0.4}}
                            src="./image/icon/friend_added.png"
                            alt="friend_added"
                        />
                    </div>
                )
            } else {
                return (
                    <div className={`${style['add-friend-btn']}`}>
                        Add friend
                    </div>
                )
            }
        }
    }

    return (
        <Fragment>
            {isUploadImageModalVisible && <UploadImageModal profileId={profileId} />}
            <div className={`${style['cover-top-container']}`}>
                <div className={`${style['left-col-container']}`}>
                    {renderAddFriendButton()}
                </div>
                <div className={`${style['center-col-container']}`}>
                    {
                        isViewFriendProfile ?
                            <img
                                className={`${style['cover-avatar']}`}
                                src={friendAvatar ?
                                    `${AWS_S3_BUCKET_LINK}/${friendAvatar}` : "./image/avatar/default_avatar.png"}
                                alt="avatar"
                            />
                            :
                            <img
                                className={`${style['cover-avatar']}`}
                                src={avatar ?
                                    `${AWS_S3_BUCKET_LINK}/${avatar}` : "./image/avatar/default_avatar.png"}
                                alt="avatar"
                            />
                    }

                    {
                        !isViewFriendProfile
                        &&
                        <div className={`${style['cover-avatar']} ${style['upload-avatar-btn']}`}
                            onClick={handleUploadAvatar}>
                            <CameraOutlined />
                        </div>
                    }
                </div>
                <div className={`${style['right-col-container']}`}>
                    {
                        isViewFriendProfile
                        &&
                        <div className={`${style['message-btn']}`}>
                            Message
                        </div>
                    }
                </div>
            </div>
            <div className={`${style['cover-user-name']}`}>
                {
                    isViewFriendProfile ?
                        `${friendFirstName || ""} ${friendLastName || ""}`
                        :
                        `${firstName || ""} ${lastName || ""}`
                }
                <hr style={{ width: '95%' }} />
                <div className={`${style['cover-menu-container']}`}>
                    {renderMenu()}
                </div>
            </div>
        </Fragment>
    )
}