import React, { useState } from 'react';
import style from './HomePage.module.css';

export default function HomePage() {
    const [activeMenuItem, setActiveMenuItem] = useState('');
    const handleClickMenuItem = (itemName) => {
        setActiveMenuItem(itemName);
    }
    const menuItemCSS = `${style['menu-item-container']}`;
    const activeMenuItemCSS = `${style['menu-item-container-active']}`;

    return (
        <div className={`${style['home-page']}`}>
            <div className={`${style['menu-container']}`}>
                <div
                    className={activeMenuItem === 'profile' ? activeMenuItemCSS : menuItemCSS}
                    onClick={() => { handleClickMenuItem('profile') }}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-profile.svg"
                        alt="menu-profile"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Profile
                    </div>
                </div>
                <div
                    className={activeMenuItem === 'friends' ? activeMenuItemCSS : menuItemCSS}
                    onClick={() => { handleClickMenuItem('friends') }}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-friends.png"
                        alt="menu-friends"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Friends
                    </div>
                </div>
                <div
                    className={activeMenuItem === 'messenger' ? activeMenuItemCSS : menuItemCSS}
                    onClick={() => { handleClickMenuItem('messenger') }}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-message.svg"
                        alt="menu_message"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Messenger
                    </div>
                </div>
                <div
                    className={activeMenuItem === 'mostRecent' ? activeMenuItemCSS : menuItemCSS}
                    onClick={() => { handleClickMenuItem('mostRecent') }}>
                    <img className={`${style['menu-item-icon']}`}
                        src="./image/icon/menu-most-recent.png"
                        alt="menu-most-recent"
                    />
                    <div className={`${style['menu-item-text']}`}>
                        Most Recent
                    </div>
                </div>
                <div
                    className={activeMenuItem === 'settings' ? activeMenuItemCSS : menuItemCSS}
                    onClick={() => { handleClickMenuItem('settings') }}>
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
