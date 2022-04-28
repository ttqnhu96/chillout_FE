/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import style from './Header.module.css';
import '../../../../index.css';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getLogInUserProfileSagaAction, getUserProfileAction, setIsReloadWallAction } from '../../../../redux/actions/ProfileActions';
import { ACCESS_TOKEN, AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../../../util/constants/systemSettings';
import { displayCreatePostModalAction, setIsReloadNewsFeedPostAction } from '../../../../redux/actions/PostAction';
import CreatePost from "../../../../components/CreatePost/CreatePost";
import { history } from "../../../../util/history";
import { useLocation } from 'react-router-dom';
import { DropdownNotification } from '../../../../components/DropdownNotification/DropdownNotification';
import { DropdownMessage } from '../../../../components/DropdownMessage/DropdownMessage';

export default function Header() {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const dispatch = useDispatch();

    //Get state from reducer
    const { firstName, avatar } = useSelector(state => state.ProfileReducer).loginUserProfile;
    const { userId } = useSelector(state => state.ProfileReducer).userProfile;
   
    const isCreatePostModalVisible = useSelector(state => state.PostReducer).isCreatePostModalVisible;

    useEffect(() => {
        if (sessionStorage.getItem(USER_LOGIN) && sessionStorage.getItem(ACCESS_TOKEN)) {
            // Call API to get user profile
            dispatch(getLogInUserProfileSagaAction(loginUserId));
        } else {
            history.push('/login');
        }
        //Hide scrollbar when modal is opened
        document.body.style.overflow = isCreatePostModalVisible ? 'hidden' : 'unset';
        document.body.style.paddingRight = isCreatePostModalVisible ? '0.6rem' : '0';
    }, [isCreatePostModalVisible])

    // extract pathname from location
    const { pathname } = useLocation();

    //Handle events
    const handleClickCreatePost = () => {
        dispatch(displayCreatePostModalAction())
    }

    const handleClickChilloutLogo = () => {
        history.push('/');
        dispatch(setIsReloadNewsFeedPostAction(true));
    }

    const handleClickHomeIcon = () => {
        dispatch(setIsReloadNewsFeedPostAction(true));
    }

    const handleClickUser = () => {
        //If navigated profile page is different from previous one, clear old data
        if (userId && userId !== loginUserId) {
            dispatch(getUserProfileAction({}));
        }
        dispatch(setIsReloadWallAction(true));
        history.push(`/user/${loginUserId}`);
    }

    return (
        <>
            {isCreatePostModalVisible && <CreatePost />}
            <div className={`${style['chillout-header']}`}>
                <div className={`${style['logo-container']}`}
                    onClick={handleClickChilloutLogo}
                >
                    <img
                        className={`${style['logo']}`}
                        src="/image/logo/Chillout_logo_circle.png" height={35} alt="chillout_logo"
                    />
                    <img
                        className={`${style['brand-name']}`}
                        src="/image/logo/Chillout_text.png" height={20} alt="chillout_brandname"
                    />
                </div>
                <div className={`${style['home-icon-container']}`}>
                    <NavLink
                        onClick={handleClickHomeIcon}
                        className={`${style['home-icon']}`}
                        activeClassName={`${style['home-icon-active']}`}
                        isActive={() => ['/', '/home'].includes(pathname)}
                        to='/'>
                        <svg style={{ marginTop: '0.5rem' }} xmlns="http://www.w3.org/2000/svg" height={17} focusable="false" viewBox="0 0 12 12">
                            <path fill="none" stroke="currentColor" d="M2 11.5h2a.5.5 0 00.5-.5V8a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V6.5h.389a.496.496 0 00.413-.838L6.422.681a.59.59 0 00-.844 0L.698 5.662a.496.496 0 00.413.838H1.5V11a.5.5 0 00.5.5z" />
                        </svg>
                    </NavLink>
                </div>
                <div className={`${style['search-container']}`}>
                    <div className={`${style['search-box']}`}>
                        <input type="text" className={`${style['search-input']}`} placeholder="Search..." />
                        <div className={`${style['search-button']}`}><i className="fa fa-search"></i></div>
                    </div>
                </div>
                <div className={`${style['create-post-button-container']}`}>
                    <div
                        className={`${style['button-create']}`}
                        onClick={handleClickCreatePost}
                    />
                </div>
                <div className={`${style['notification-user-container']}`}>
                    <DropdownMessage />
                    <DropdownNotification />
                    <div className={`${style['user-container']}`}
                        onClick={handleClickUser}>
                        <span className={`${style['username']}`}>{firstName}</span>
                        <img src={avatar ?
                            `${AWS_S3_BUCKET_LINK}/${avatar}` : "/image/avatar/default_avatar.png"}
                            alt="avatar"
                            className={`${style['avatar']}`}
                            // onError={() => { window.location.reload() }}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}
