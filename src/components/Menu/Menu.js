import { useDispatch, useSelector } from "react-redux";
import { setHomeMenuIdActiveAction } from "../../redux/actions/MenuAction";
import { getPhotoListByUserIdAction } from "../../redux/actions/PhotoAction";
import { getPostListWallAction } from "../../redux/actions/PostAction";
import { setIsReloadWallAction, setIsViewFriendProfileAction } from "../../redux/actions/ProfileActions";
import { history } from "../../util/history";
import MenuItem from "../Menutem/MenuItem";
import style from './Menu.module.css';
const menuItems = require('./menuItems.json');

export default function Menu() {
    const dispatch = useDispatch();
    const { homeMenuIdActive } = useSelector(state => state.MenuReducer);
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);

    const handleClickMenuItem = (id, name, navigateTo) => {
        dispatch(setHomeMenuIdActiveAction(id));
        if(name === 'Profile') {
            if(isViewFriendProfile === true) {
                dispatch(getPostListWallAction([]));
                dispatch(getPhotoListByUserIdAction([]));
                dispatch(setIsViewFriendProfileAction(false));
            }
            history.push('/wall');
            dispatch(setIsReloadWallAction(true));
        }
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