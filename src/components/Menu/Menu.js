import { useDispatch, useSelector } from "react-redux";
import { setHomeMenuIdActiveAction } from "../../redux/actions/MenuAction";
import { history } from "../../util/history";
import MenuItem from "../Menutem/MenuItem";
import style from './Menu.module.css';
const menuItems = require('./menuItems.json');

export default function Menu() {
    const dispatch = useDispatch();
    const { homeMenuIdActive } = useSelector(state => state.MenuReducer);

    const handleClickMenuItem = (id, navigateTo) => {
        dispatch(setHomeMenuIdActiveAction(id));
        if (navigateTo) {
            history.push(navigateTo);
        }
    }


    //Render menu items
    const renderMenuItemList = () => {
        return menuItems.map((menuItem, index) => (
            <MenuItem
                key={index}
                menuItem={menuItem}
                menuIdActive={homeMenuIdActive}
                handleClickMenuItem={handleClickMenuItem}
            />
        ))
    }

    return (
        <div className={`${style['menu-container']}`}>
            {renderMenuItemList()}
            <div className={`${style['menu-banner-container']}`}>
                <img className={`${style['menu-banner']}`}
                    src="./image/banner/menu-banner.png"
                    alt="menu-banner"
                />
            </div>

        </div>
    )
}