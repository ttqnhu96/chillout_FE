import React from 'react';
import style from './DropdownNotification.module.css';
import useComponentVisible from '../../util/customHook/useComponentVisible';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'; //Multi language
import * as types from '../../redux/constants/types';
import { getNotificationListByReceiverIdSagaAction } from '../../redux/actions/NotificationAction';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { COMMON_CONSTANT } from '../../util/constants/commonConstants';

export const DropdownNotification = () => {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const dispatch = useDispatch();
    const { t } = useTranslation();

    //State from reducer
    const { haveNotification, notificationList } = useSelector(state => state.NotificationReducer);

    //Customized hook
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const renderDropdownNotification = () => {
        if (notificationList.length > 0) {
            return notificationList.map((item, index) => (
                <div key={index} className={`${style['notification-item']}`}>
                    <div className={`${style['notification-item__img']}`}>
                        <img src={item.executorAvatar ? `${AWS_S3_BUCKET_LINK}/${item.executorAvatar}` : "/image/avatar/default_avatar.png"}
                            alt="avatar" />
                    </div>
                    <div className={`${style['notification-item__info']}`}>
                        <p>
                            <span>{item.executorName}</span>
                            {t(item.message)}.
                        </p>
                        <span className={`${style['notification-item__info-time']}`}
                        >{new Date(item.createdAt).toLocaleString()}
                        </span>
                    </div>
                </div>
            ));
        } else {
            return (
                <div className={`${style['no-notification']}`}>
                    <img className={`${style['no-notification__img']}`} src="/image/icon/no-notification.png" alt="no_notification" />
                    <p>No notification yet!</p>
                </div>
            )
        }
    }

    const handleClickItem = () => {
        dispatch(getNotificationListByReceiverIdSagaAction({
            receiverId: loginUserId,
            isPaginated: true,
            pageIndex: 0,
            pageSize: COMMON_CONSTANT.MAX_NOTIFICATION
        }));

        setIsComponentVisible(!isComponentVisible);
        dispatch({ type: types.REDUCER_READ_NOTIFICATION });
    }

    return (
        <div ref={ref} className={`${style['notification-wrap']}`}>
            <div className={`${style['notification-icon-wrapper']}`} onClick={handleClickItem}>
                <i className={`fa-regular fa-bell ${style['notification-icon']}`}>
                    {
                        haveNotification &&
                        <i className={`fa-solid fa-circle ${style['notification-icon--have-notification']}`}></i>
                    }
                </i>
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