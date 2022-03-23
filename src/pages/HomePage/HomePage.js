import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileDetailByIdAction } from '../../redux/actions/ProfileActions';
import { USER_LOGIN } from '../../util/constants/systemSettings';
import style from './HomePage.module.css';

export default function HomePage() {
    let dispatch = useDispatch();
    useEffect(() => {
        // Call API to get user profile
        const profileId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.profileId;
        dispatch(getProfileDetailByIdAction(profileId));
    }, [])

    return (
        <div className={`${style['home-page']}`}>
            <div className={`${style['menu-container']}`}>
                <div className={`${style['menu-item-container']}`}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-profile.svg"
                        alt="menu-profile"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Profile
                    </div>
                </div>
                <div className={`${style['menu-item-container']}`}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-friends.png"
                        alt="menu-friends"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Friends
                    </div>
                </div>
                <div className={`${style['menu-item-container']}`}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-message.svg"
                        alt="menu_message"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Messenger
                    </div>
                </div>
                <div className={`${style['menu-item-container']}`}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-most-recent.png"
                        alt="menu-most-recent"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Most Recent
                    </div>
                </div>
                <div className={`${style['menu-item-container']}`}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-settings.svg"
                        alt="menu-settings"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Settings
                    </div>
                </div>
            </div>
            <div className={`${style['news-feed-container']}`}>
                news feed
            </div >
            <div className={`${style['contact-container']}`}>
                contact
            </div>
        </div>
    )
}
