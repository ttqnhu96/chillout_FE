import { Fragment } from 'react';
import style from './Cover.module.css';

export default function Cover() {
    return (
        <Fragment>
            <div className={`${style['cover-avatar-container']}`}>
                <img
                    className={`${style['cover-avatar']}`}
                    src="./image/avatar/default_avatar.png"
                    alt="avatar"
                />
            </div>
            <div className={`${style['cover-user-name']}`}>
                Như Trịnh
                <hr style={{ width: '95%' }} />
                <div className={`${style['cover-menu-container']}`}>
                    <div className={`${style['cover-menu-item']}`}>
                        Posts
                    </div>
                    <div className={`${style['cover-menu-item']}`}>
                        About
                    </div>
                    <div className={`${style['cover-menu-item']}`}>
                        Friends
                    </div>
                    <div className={`${style['cover-menu-item']}`}>
                        Photos
                    </div>
                </div>
            </div>
        </Fragment>
    )
}