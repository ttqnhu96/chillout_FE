import style from './MenuItem.module.css';

export default function MenuItem(props) {
    //Get props
    const { menuItem, menuIdActive, handleClickMenuItem } = props;

    const menuItemCSS = `${style['menu-item-container']}`;
    const activeMenuItemCSS = `${style['menu-item-container-active']}`;

    return (
        <div
            className={menuIdActive === menuItem.id ? activeMenuItemCSS : menuItemCSS}
            /* To do */
            style={(menuItem.name === 'Messenger' || menuItem.name === 'Most Recent') ? { cursor: 'not-allowed' } : {}}
            onClick={() => { handleClickMenuItem(menuItem.id, menuItem.name, menuItem.navigateTo) }}>
            <img className={`${style['menu-item-icon']}`}
                src={menuItem.iconSrc}
                alt={menuItem.iconAlt}
            />
            <div className={`${style['menu-item-text']}`}>
                {menuItem.name}
            </div>
        </div>
    )
}