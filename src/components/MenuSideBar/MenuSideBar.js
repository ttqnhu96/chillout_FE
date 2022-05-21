
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setIsReloadNewsFeedPostAction } from '../../redux/actions/PostAction';
import { ACCESS_TOKEN, AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import MenuItemSideBar from '../MenuItemSideBar/MenuItemSideBar';
import style from './MenuSideBar.module.css';
const menuItems = require('./menuItems.json');

export default function MenuSideBar() {
    const dispatch = useDispatch();
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    //Get state from reducer
    const { firstName, avatar } = useSelector(state => state.ProfileReducer).loginUserProfile;

    //Handle events
    const handleClickChilloutLogo = () => {
        history.push('/');
        dispatch(setIsReloadNewsFeedPostAction(true));
    }

    const handleLogOut = () => {
        sessionStorage.removeItem(USER_LOGIN);
        sessionStorage.removeItem(ACCESS_TOKEN);
        history.push('/login');
    }

    //Render menu items
    const renderMenuItemList = () => {
        return menuItems.map((menuItem, index) => (
            <MenuItemSideBar
                key={index}
                menuItem={menuItem}
            />
        ))
    }

    return (
        <div className={`${style['container']}`}>
            <div className={`${style['logo-container']}`}
            >
                <img
                    className={`${style['logo-img']}`}
                    src="/image/logo/Chillout_logo_circle.png" height={40} alt="chillout_logo"
                    onClick={handleClickChilloutLogo}
                />
                <img
                    className={`${style['brand-name']}`}
                    src="/image/logo/Chillout_text.png" height={25} alt="chillout_brandname"
                    onClick={handleClickChilloutLogo}
                />
            </div>
            <div className={`${style['search-container']}`}>
                <div className={`${style['search-box']}`}>
                    <input type="text" className={`${style['search-input']}`} placeholder="Search..." />
                    <div className={`${style['search-button']}`}><i className="fa fa-search"></i></div>
                </div>
            </div>
            <ul className={`${style['menu-list']}`}>
                {renderMenuItemList()}
            </ul>
            <NavLink
                exact
                className={`${style['user-container']}`}
                activeClassName={`${style['user-container--active']}`}
                to={`/user/${loginUserId}`} >
                <img src={avatar ?
                    `${AWS_S3_BUCKET_LINK}/${avatar}` : "/image/avatar/default_avatar.png"}
                    alt="avatar"
                    className={`${style['avatar']}`}
                />
                <span className={`${style['username']}`}>{firstName}</span>
            </NavLink>

            <div className={`${style['log-out']}`} onClick={handleLogOut}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Log out</span>
            </div>
        </div>
    )
}