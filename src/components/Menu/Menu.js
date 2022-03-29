import MenuItem from "../Menutem/MenuItem";
import style from './Menu.module.css';
const menuItems = require('./menuItems.json');

export default function Menu() {

    //Render menu items
    const renderMenuItemList = () => {
        return menuItems.map((menuItem, index) => (
            <MenuItem
                key={index}
                menuItem={menuItem}
                pageName='home'
            />
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