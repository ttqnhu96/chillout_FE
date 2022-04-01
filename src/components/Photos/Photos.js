import { Fragment } from 'react';
import style from './Photos.module.css';
import { DeleteOutlined } from '@ant-design/icons';

export default function Photos() {
    return (
        <Fragment>
            <div className={`${style['title']}`}>Photos</div>
            <div className={`${style['photo-list-container']}`}>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}