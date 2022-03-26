import { useState } from "react";
import style from './Menu.module.css';
var menuItems = require('./menuItems.json');

export default function Menu() {
    const [activeMenuItemId, setActiveMenuItemId] = useState(0);
    const handleClickMenuItem = (id) => {
        setActiveMenuItemId(id);
    }
    const menuItemCSS = `${style['menu-item-container']}`;
    const activeMenuItemCSS = `${style['menu-item-container-active']}`;

    //Render menu items
    const renderMenuItemList = () => {
        return menuItems.map((menuItem, index) => (
            <div
                key={index}
                className={activeMenuItemId === menuItem.id ? activeMenuItemCSS : menuItemCSS}
                onClick={() => { handleClickMenuItem(menuItem.id) }}>
                <img className={`${style['menu-item-icon']}`}
                    src={menuItem.iconSrc}
                    alt={menuItem.iconAlt}
                />
                <div className={`${style['menu-item-text']}`}>
                    {menuItem.name}
                </div>
            </div>
        ))
    }

    return (
        <div className={`${style['menu-container']}`}>
            {renderMenuItemList()}
            <img className={`${style['menu-banner']}`}
                src="./image/banner/menu-banner.png"
                alt="menu-banner"
            />
        </div>
    )
}