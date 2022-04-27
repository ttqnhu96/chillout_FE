import React from 'react';
import style from './DropdownMessage.module.css';
import useComponentVisible from '../../util/customHook/useComponentVisible';

const listData = [{
    image: "https://longwoodgardens.org/sites/default/files/highlight_images/76758.jpg",
    name: "Alex commented on",
    labelTime: "Timeline Share",
    time: "10 minutes ago"
},
{
    image: "https://longwoodgardens.org/sites/default/files/highlight_images/76758.jpg",
    name: "Ben hur commented on your",
    labelTime: "Timeline Share",
    time: "55 minutes ago"
},
{
    image: "https://longwoodgardens.org/sites/default/files/highlight_images/76758.jpg",
    name: "Meryn trant liked your",
    labelTime: "Cover Picture",
    time: "2 hours ago"
},
{
    image: "https://longwoodgardens.org/sites/default/files/highlight_images/76758.jpg",
    name: "John wick commented on your",
    labelTime: "Profile Picture",
    time: "6 hours ago"
},
]

export const DropdownMessage = () => {

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const renderDropdownMessage = () => {
        return listData.map((item, index) => (
            <div key={index} className={`${style['notify_item']}`}>
                <div className={`${style['notify_img']}`}>
                    <img src={item.image} alt="profile_pic" style={{ width: 50 }} />
                </div>
                <div className={`${style['notify_info']}`}>
                    <p>{item.name}<span>{item.labelTime}</span></p>
                    <span className={`${style['notify_time']}`}>{item.time}</span>
                </div>
            </div>
        ));
    }

    const handleClickItem = () => {
        setIsComponentVisible(!isComponentVisible);
    }

    return (
        <div ref={ref} className={`${style['notification_wrap']}`} onClick={handleClickItem}>
            <div className={`${style['message-icon']}`} >
                <i height={20} className="far fa-comment-dots"></i>

                {/* <div className={`${style['notification-icon-new']}`}></div> */}
            </div>
            {isComponentVisible && <div className={`${style['dropdown']}`}>
                {renderDropdownMessage()}
            </div>
            }
        </div>
    );
}