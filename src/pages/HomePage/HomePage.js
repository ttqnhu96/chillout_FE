import React, { useState } from 'react';
import style from './HomePage.module.css';
import { Input } from 'antd';

const { TextArea } = Input;

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
                <div className={`${style['post-container']}`}>
                    <div className={`${style['user-time-privacy-container']}`}>
                        <div className={`${style['avatar-container']}`}>
                            <img
                                className={`${style['avatar-image']}`}
                                src="./image/avatar/default_avatar.png"
                                alt="avatar"
                            />
                        </div>
                        <div className={`${style['name-time-privacy-container']}`}>
                            <div className={`${style['name-text']}`}>
                                Username
                            </div>
                            <div className={`${style['time-text']}`}>
                                2022/03/24 00:18
                            </div>
                        </div>
                        <div className={`${style['post-options-container']}`}>
                            <img height={17} width={17}
                                src="./image/icon/more-options.png"
                                alt="more-options"
                            />
                        </div>
                    </div>
                    <div className={`${style['post-content-container']}`}>
                        {/* <div className={`${style['post-content']}`}> */}
                        VỊ TRÍ : dàn hoa giấy cực xịn này nằm ở gần Paradise
                        (Ngay khách sạn cao đường thuỳ vân có hẻm to đi vào .... cạnh hông khách sạn “LÂM ĐƯỜNG”)
                        Ngoài ra địa điểm để chụp hoa giấy tại VT rất nhiều vì mùa này nở rộ, các bạn có thể đi dọc đường Phan Chu Trinh, Núi Lớn, đường Thùy Vân.......
                        Toàn bộ ảnh mình chụp bằng cam Thường Sau đó chỉnh ảnh bằng Vsco và lightroom
                        Thời gian chụp ảnh:
                        Khung thời gian từ 8h30 - 9h30 sẽ cho ra những bức ảnh xịn xò nhất theo mình là vậy
                        {/* </div > */}
                    </div>
                    <div className={`${style['post-photo-container']}`}>
                        <img
                            className={`${style['post-photo']}`}
                            src="https://images.unsplash.com/photo-1581881067989-7e3eaf45f4f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt="avatar"
                        />
                    </div>
                    <div className={`${style['like-container']}`}>
                        <img height={22} width={21}
                            src="./image/icon/like.png"
                            alt="like"
                        />
                        <span className={`${style['likes-quantity']}`}>
                            1
                        </span>
                        <span className={`${style['comment-quantity']}`}>1 Comments</span>
                    </div>
                    <div className={`${style['comment-container']}`}>
                        <div>Alo alo</div>
                        <div>Hihi</div>
                    </div>
                    <div className={`${style['write-comment-container']}`}>
                        <img
                            className={`${style['avatar-comment']}`}
                            src="./image/avatar/default_avatar.png"
                            alt="avatar"
                        />
                        <TextArea
                            className={`${style['comment-text-area']}`}
                            placeholder="Add a comment..."
                            autoSize
                            onChange={() => { }}
                            onPressEnter={(e) => { console.log(e.target.value) }}
                        />
                    </div>
                </div >
            </div >
            <div className={`${style['contact-container']}`}>
                contact
            </div>
        </div >
    )
}
