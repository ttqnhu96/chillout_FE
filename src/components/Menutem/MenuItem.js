import { NavLink } from 'react-router-dom';
import { USER_LOGIN } from '../../util/constants/systemSettings';
import style from './MenuItem.module.css';

export default function MenuItem(props) {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const menuItemCSS = `${style['menu-item-container']}`;
    const activeMenuItemCSS = `${style['menu-item-container-active']}`;

    //Get props
    const { menuItem } = props;


    return (
        <NavLink
            exact
            className={menuItemCSS}
            activeClassName={activeMenuItemCSS}
            /* Temp implement */
            style={(menuItem.name === 'Messenger' || menuItem.name === 'Memories') ? { cursor: 'not-allowed' } : {}}
            to={menuItem.name === 'Profile' ? `/user/${loginUserId}` : menuItem.path}>
            <img className={`${style['menu-item-icon']}`}
                src={menuItem.iconSrc}
                alt={menuItem.iconAlt}
            />
            <div className={`${style['menu-item-text']}`}>
                {menuItem.name}
            </div>
        </NavLink>
    )
}