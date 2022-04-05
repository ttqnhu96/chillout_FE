import { Tooltip } from 'antd';
import style from './Contacts.module.css';;

export default function Contacts() {
    const contactList = [
        {
            avatar: "./image/avatar/default_avatar.png",
            firstName: "Thoại",
            lastName: "Nguyễn",
            username: "thoainp1"
        },
        {
            avatar: "./image/avatar/default_avatar.png",
            firstName: "Thoại 2",
            lastName: "Nguyễn",
            username: "thoainp2"
        },
        {
            avatar: "./image/avatar/default_avatar.png",
            firstName: "Thoại 3",
            lastName: "Nguyễn",
            username: "thoainp3"
        },
        {
            avatar: "./image/avatar/default_avatar.png",
            firstName: "Thoại 4",
            lastName: "Nguyễn",
            username: "thoainp4"
        },
    ];

    //Render menu items
    const renderContactList = () => {
        return contactList.map((contact, index) => (
            <div key={index} className={`${style['contacts-item-container']}`}>
                <img
                    className={`${style['contacts-item-avatar']}`}
                    src={contact.avatar}
                    alt="avatar"
                />
                <div className={`${style['contacts-item-text-container']}`}>
                    <Tooltip title={`${contact.firstName} ${contact.lastName}`} placement="right">
                        <div className={`${style['contacts-first-name']}`}>
                            {`${contact.firstName}`}
                        </div>
                        <div className={`${style['contacts-username']}`}>
                            {`@${contact.username}`}
                        </div>
                    </Tooltip>
                </div>
            </div>
        ))
    }

    return (
        <div className={`${style['contacts-container']}`}>
            <div className={`${style['contacts-title']}`}>
                SUGGESTIONS
            </div>
            {renderContactList()}
        </div>
    )
}