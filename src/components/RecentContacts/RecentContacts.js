import style from './RecentContacts.module.css';

export default function RecentContacts() {
    return (
        <div className={`${style['recent-contacts-container']}`}>
            <div className={`${style['recent-contacts-title']}`}>
                Recent Contacts
            </div>
            <div className={`${style['recent-contacts-item-container']}`}>
                <div className={`${style['recent-contacts-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['recent-contacts-avatar']}`}
                    />
                    <div className={`${style['recent-contacts-name']}`}>
                        User
                    </div>
                </div>
                <div className={`${style['recent-contacts-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['recent-contacts-avatar']}`}
                    />
                    <div className={`${style['recent-contacts-name']}`}>
                        User
                    </div>
                </div>
                <div className={`${style['recent-contacts-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['recent-contacts-avatar']}`}
                    />
                    <div className={`${style['recent-contacts-name']}`}>
                        User
                    </div>
                </div>
                <div className={`${style['recent-contacts-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['recent-contacts-avatar']}`}
                    />
                    <div className={`${style['recent-contacts-name']}`}>
                        User
                    </div>
                </div>
                <div className={`${style['recent-contacts-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['recent-contacts-avatar']}`}
                    />
                    <div className={`${style['recent-contacts-name']}`}>
                        User
                    </div>
                </div>
                <div className={`${style['recent-contacts-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['recent-contacts-avatar']}`}
                    />
                    <div className={`${style['recent-contacts-name']}`}>
                        User
                    </div>
                </div>
            </div>
        </div>
    )
}