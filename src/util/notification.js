import { notification } from "antd"

export const notify = (type, message, description = '') => {
    notification[type]({ //action.typeNotification = success | warning | info | error,
        message: message,
        description: description,
        placement: 'bottomRight',
        style: {
            marginRight: '10%',
            borderRadius: '1.5rem',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
        },
    })
}