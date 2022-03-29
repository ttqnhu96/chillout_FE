import { useDispatch, useSelector } from "react-redux";
import { setMenuIdActiveAction } from "../../redux/actions/MenuAction";
import { history } from "../../util/history";
import style from './MenuItem.module.css';

export default function MenuItem(props) {
    const dispatch = useDispatch();

    //Get props
    const { menuItem, pageName } = props;

    const menuIdActive = useSelector(state => state.MenuReducer)[`${pageName}MenuIdActive`];

    const handleClickMenuItem = (id, navigateTo) => {
        dispatch(setMenuIdActiveAction(pageName, id));
        if(navigateTo) {
            history.push(navigateTo);
        }
    }
    const menuItemCSS = `${style['menu-item-container']}`;
    const activeMenuItemCSS = `${style['menu-item-container-active']}`;

    return (
        <div
            className={menuIdActive === menuItem.id ? activeMenuItemCSS : menuItemCSS}
            onClick={() => { handleClickMenuItem(menuItem.id, menuItem.navigateTo) }}>
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