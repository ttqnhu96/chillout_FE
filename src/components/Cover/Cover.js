import { Fragment } from 'react';
import style from './Cover.module.css';

const menuItems = require('./coverMenuItems.json');
export default function Cover(props) {
    const { activeMenuId, setActiveMenuId } = props;
    const menuItemCSS = `${style['cover-menu-item']}`;
    const activeMenuItemCSS = `${style['cover-menu-item-active']}`;

    //Render menu items
    const renderMenu = () => {
        return menuItems.map((menuItem, index) => (
            <div key={index}
            className={activeMenuId === menuItem.id ? activeMenuItemCSS : menuItemCSS}
                onClick={() => { setActiveMenuId(menuItem.id) }}
            >
                {menuItem.name}
            </div>
        ))
    }

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
                    {renderMenu()}
                </div>
            </div>
        </Fragment>
    )
}