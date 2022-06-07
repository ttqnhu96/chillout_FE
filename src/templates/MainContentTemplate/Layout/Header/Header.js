/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import '../../../../index.css';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getLogInUserProfileSagaAction, getUserProfileAction, setIsReloadWallAction } from '../../../../redux/actions/ProfileActions';
import { ACCESS_TOKEN, USER_LOGIN } from '../../../../util/constants/systemSettings';
import { displayCreatePostModalAction, setIsReloadNewsFeedPostAction } from '../../../../redux/actions/PostAction';
import CreatePost from "../../../../components/CreatePost/CreatePost";
import { history } from "../../../../util/history";
import { useLocation } from 'react-router-dom';
import { DropdownNotification } from '../../../../components/DropdownNotification/DropdownNotification';
import SuggestionsSideBar from '../../../../components/SuggestionsSideBar/SuggestionsSideBar';
import MenuSideBar from '../../../../components/MenuSideBar/MenuSideBar';
import { Dropdown, Menu } from 'antd';

export default function Header() {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const dispatch = useDispatch();

    //Get state from reducer
    const { firstName, avatar } = useSelector(state => state.ProfileReducer).loginUserProfile;
    const { userId } = useSelector(state => state.ProfileReducer).userProfile;
    const isCreatePostModalVisible = useSelector(state => state.PostReducer).isCreatePostModalVisible;

    //Local state
    const [isShowSideBar, setIsShowSideBar] = useState(
        {
            leftSideBar: false,
            rightSideBar: false
        }
    );

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

    const showHideLeftSideBar = (isShowed) => {
        setIsShowSideBar(prevState => ({
            ...prevState,
            leftSideBar: isShowed
        }));
    }

    const showHideRightSideBar = (isShowed) => {
        setIsShowSideBar(prevState => ({
            ...prevState,
            rightSideBar: isShowed
        }));
    }

    const handleLogOut = () => {
        sessionStorage.removeItem(USER_LOGIN);
        sessionStorage.removeItem(ACCESS_TOKEN);
        history.push('/login');
    }

    const menu = (
        <Menu className={`${style['header-menu-PC']}`}>
            <Menu.Item key="1" onClick={handleClickUser}>Profile</Menu.Item>
            <Menu.Item key="2" onClick={() => { history.push('/settings') }}>Settings</Menu.Item>
            <hr style={{ margin: '0 auto' }} />
            <Menu.Item key="3" onClick={handleLogOut}>Log out</Menu.Item>
        </Menu>
    );

    return (
        <>
            {isCreatePostModalVisible && <CreatePost />}
            <div className={`${style['chillout-header']}`}>
                <div className={`${style['logo-container']}`}>
                    <label className={`${style['header-menu-icon']} ${style['header-menu-icon--left']}`}
                        onClick={() => { showHideLeftSideBar(true) }}>
                        <i className="fa-solid fa-bars"></i>
                    </label>
                    <img
                        className={`${style['logo']}`}
                        src="/image/logo/Chillout_logo_circle.png" height={35} alt="chillout_logo"
                        onClick={handleClickChilloutLogo}
                    />
                    <img
                        className={`${style['brand-name']}`}
                        src="/image/logo/Chillout_text.png" height={20} alt="chillout_brandname"
                        onClick={handleClickChilloutLogo}
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
                    {/* <DropdownMessage /> */}
                    <DropdownNotification />
                    <div className={`${style['user-container']}`}>
                        <span className={`${style['username']}`} onClick={handleClickUser}>{firstName}</span>
                        <Dropdown overlay={menu} placement="bottom" arrow>
                            <img src={avatar ? avatar : "/image/avatar/default_avatar.png"}
                                alt="avatar"
                                className={`${style['avatar']}`}
                            // onError={() => { window.location.reload() }}
                            />
                        </Dropdown>
                    </div>

                    <label className={`${style['header-menu-icon']} ${style['header-menu-icon--right']}`}
                        onClick={() => { showHideRightSideBar(true) }}>
                        <i className="fa-solid fa-bars"></i>
                    </label>
                    {/* Sidebars */}
                    {isShowSideBar.leftSideBar
                        &&
                        <div className={`${style['header-menu-sidebar-container']} ${style['header-menu-sidebar-container--left']}`}>
                            <div className={`${style['header-menu-sidebar']} ${style['header-menu-sidebar--left']}`}>
                                <MenuSideBar />
                                <div className={`${style['header-menu-sidebar-icon']}`}
                                    onClick={() => { showHideLeftSideBar(false) }}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className={`${style['header-menu-sidebar-overlay']}`}
                                onClick={() => { showHideLeftSideBar(false) }} />
                        </div>
                    }
                    {isShowSideBar.rightSideBar
                        &&
                        <div className={`${style['header-menu-sidebar-container']} ${style['header-menu-sidebar-container--right']}`}>
                            <div className={`${style['header-menu-sidebar']} ${style['header-menu-sidebar--right']}`}>
                                <SuggestionsSideBar />
                                <div className={`${style['header-menu-sidebar-icon']}`}
                                    onClick={() => { showHideRightSideBar(false) }}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className={`${style['header-menu-sidebar-overlay']}`}
                                onClick={() => { showHideRightSideBar(false) }} />
                        </div>
                    }
                </div>

            </div >
        </>
    )
}
