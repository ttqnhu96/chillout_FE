/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from 'react';
import { setFriendsMenuIdActiveAction } from "../../redux/actions/MenuAction";
import MenuItem from '../../components/Menutem/MenuItem';
import style from './Friends.module.css';
import FriendList from "../../components/FriendList/FriendList";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import { history } from "../../util/history";
const friendsMenuItems = require('./friendsMenuItems.json');

export default function Friends() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setFriendsMenuIdActiveAction(1))
    }, [])

    const { friendsMenuIdActive } = useSelector(state => state.MenuReducer);

    const handleClickMenuItem = (id, navigateTo) => {
        dispatch(setFriendsMenuIdActiveAction(id));
        if (navigateTo) {
            history.push(navigateTo);
        }
    }

    //Render menu items
    const renderMenuItemList = () => {
        return friendsMenuItems.map((menuItem, index) => (
            <MenuItem
                key={index}
                menuItem={menuItem}
                menuIdActive={friendsMenuIdActive}
                handleClickMenuItem={handleClickMenuItem}
            />
        ))
    }

    //Render all friends module
    const renderAllFriendsModule = () => {
        return (
            <div className={`${style['friendlist-row']}`}>
                <FriendList />
            </div>
        )
    }

    //Render friend request module
    const renderFriendRequestModule = () => {
        return (
            <Fragment>
                <div className={`${style['friend-request-row']}`}>
                    <FriendRequests />
                </div>
            </Fragment>
        )
    }

    return (
        <div className={`${style['friends']}`}>
            <div className={`${style['friends-left-col']}`}>
                {renderMenuItemList()}
            </div>

            <div className={`${style['friends-right-col']}`}>
                { friendsMenuIdActive === 1 && renderAllFriendsModule() }
                { friendsMenuIdActive === 2 && renderFriendRequestModule() }
            </div>


        </div>
    )
}