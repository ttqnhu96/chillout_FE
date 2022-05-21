import { NavLink } from 'react-router-dom';
import style from './MenuItemSideBar.module.css';

export default function MenuItemSideBar(props) {
    const menuItemCSS = `${style['menu-item-container']}`;
    const activeMenuItemCSS = `${style['menu-item-container--active']}`;

    //Get props
    const { menuItem } = props;


    return (
        <li>
            <NavLink
                exact
                className={menuItemCSS}
                activeClassName={activeMenuItemCSS}
                /* Temp implement */
                style={(menuItem.name === 'Messenger' || menuItem.name === 'Memories') ? { cursor: 'not-allowed' } : {}}
                to={menuItem.path}>

                <i className={menuItem.icon} />
                <span>{menuItem.name}</span>
            </NavLink>
        </li>
    )
}