/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import style from './Header.module.css';
import '../../../../index.css';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfileDetailByIdAction } from '../../../../redux/actions/ProfileActions';
import { USER_LOGIN } from '../../../../util/constants/systemSettings';
import { displayCreatePostModalAction } from '../../../../redux/actions/PostAction';
import CreatePost from "../../../../components/CreatePost/CreatePost";
import { history } from "../../../../util/history";
import { useLocation } from 'react-router-dom';
import { setMenuIdActiveAction } from '../../../../redux/actions/MenuAction';

export default function Header() {
    //Call API to get user info
    const dispatch = useDispatch();

    //Get props from reducer
    const { firstName, avatar } = useSelector(state => state.ProfileReducer);
    const isCreatePostModalVisible = useSelector(state => state.PostReducer).isCreatePostModalVisible;

    useEffect(() => {
        //Hide scrollbar when sign up modal is opened
        document.body.style.overflow = isCreatePostModalVisible ? 'hidden' : 'unset';

        // Call API to get user profile
        const profileId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.profileId;
        dispatch(getProfileDetailByIdAction(profileId));

    }, [isCreatePostModalVisible])

    // extract pathname from location
    const { pathname } = useLocation();

    //Handle events
    const handleClickCreatePost = () => {
        dispatch(displayCreatePostModalAction())
    }

    const handleClickChilloutLogo = () => {
        history.push('/');
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
                        src="./image/logo/Chillout_logo_circle.png" height={35} alt="chillout_logo"
                    />
                    <img
                        className={`${style['brand-name']}`}
                        src="./image/logo/Chillout_text.png" height={20} alt="chillout_brandname"
                    />
                </div>
                <div className={`${style['home-icon-container']}`}>
                    <NavLink
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
                    <div className={`${style['message-icon']}`}><i height={20} className="far fa-comment-dots"></i></div>
                    <div className={`${style['notification-icon']}`}><i height={20} className="far fa-bell"></i></div>
                    <div className={`${style['user-container']}`}
                        onClick={() => { history.push('/wall') }}>
                        <span className={`${style['username']}`}>{firstName}</span>
                        <img src={avatar || "./image/avatar/default_avatar.png"}
                            alt="avatar"
                            className={`${style['avatar']}`}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}
