import React, { useState } from 'react';
import style from './DropdownNotification.module.css';
import useComponentVisible from '../../util/customHook/useComponentVisible';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../redux/constants/types';

const listData = [
{
    image: "https://longwoodgardens.org/sites/default/files/highlight_images/76758.jpg",
    user: "Alex",
    action: "commented on",
    object: "Timeline Share",
    time: "10 minutes ago"
},
{
    image: "https://longwoodgardens.org/sites/default/files/highlight_images/76758.jpg",
    user: "Ben hur",
    action: "commented on",
    object: "your Ben hur commented on your Ben hur commented on your Ben hur commented on your",
    time: "55 minutes ago"
},
{
    image: "https://longwoodgardens.org/sites/default/files/highlight_images/76758.jpg",
    user: "Alex",
    action: "commented on",
    object: "Timeline Share",
    time: "10 minutes ago"
},
]

export const DropdownNotification = () => {

    const dispatch = useDispatch();

    const { haveNotification, notificationList } = useSelector(state => state.NotificationReducer);

    const [effect, setEffect] = useState(false)

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const renderDropdownNotification = () => {
        return listData.map((item, index) => (
            <div key={index} className={`${style['notification-item']}`}>
                <div className={`${style['notification-item__img']}`}>
                    <img src={item.image} alt="profile_pic" />
                </div>
                <div className={`${style['notification-item__info']}`}>
                    <p>
                        <span>{item.user}</span>
                        {item.action} {item.object}
                    </p>
                    <span className={`${style['notification-item__info-time']}`}>{item.time}</span>
                </div>
            </div>
        ));
    }

    const handleClickItem = () => {
        setIsComponentVisible(!isComponentVisible);
        dispatch({ type: types.REDUCER_READ_NOTIFICATION });
    }

    return (
        <div ref={ref} className={`${style['notification-wrap']}`}>
            <div className={`${style['notification-icon-wrapper']}`} onClick={handleClickItem}>
                <i className={`fa-regular fa-bell ${style['notification-icon']}`}></i>
                {
                    haveNotification &&
                    <i className={`fa-solid fa-circle ${style['notification-icon--have-notification']}`}></i>
                }
                {
                    isComponentVisible &&
                    <div className={`${style['notification-list-wrapper']}`}>
                        <div className={`${style['notification-list']}`}>
                            {renderDropdownNotification()}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}