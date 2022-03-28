import style from './ShortFriendList.module.css';

export default function ShortFriendList() {
    return (
        <div className={`${style['short-friend-list-container']}`}>
            <div className={`${style['short-friend-list-title']}`}>
                Friends
            </div>
            <div className={`${style['friend-item-container']}`}>
                <div className={`${style['friend-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-avatar']}`}
                    />
                    <div className={`${style['friend-name']}`}>
                        Thoai
                    </div>
                </div>
                <div className={`${style['friend-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-avatar']}`}
                    />
                    <div className={`${style['friend-name']}`}>
                        Thoai
                    </div>
                </div>
                <div className={`${style['friend-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-avatar']}`}
                    />
                    <div className={`${style['friend-name']}`}>
                        Thoai
                    </div>
                </div>
                <div className={`${style['friend-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-avatar']}`}
                    />
                    <div className={`${style['friend-name']}`}>
                        Thoai
                    </div>
                </div>
                <div className={`${style['friend-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-avatar']}`}
                    />
                    <div className={`${style['friend-name']}`}>
                        Thoai
                    </div>
                </div>
                <div className={`${style['friend-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friend-avatar']}`}
                    />
                    <div className={`${style['friend-name']}`}>
                        Thoai
                    </div>
                </div>
            </div>
        </div>
    )
}