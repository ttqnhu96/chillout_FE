/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from 'react';
import { setMenuIdActiveAction } from "../../redux/actions/MenuAction";
import MenuItem from '../../components/Menutem/MenuItem';
import style from './Friends.module.css';
import FriendList from "../../components/FriendList/FriendList";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import Search from "../../components/Search/Search";
const friendsMenuItems = require('./friendsMenuItems.json');

export default function Friends() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMenuIdActiveAction('friends', 1))
    }, [])

    const { friendsMenuIdActive } = useSelector(state => state.MenuReducer);
    console.log(friendsMenuIdActive);

    //Render menu items
    const renderMenuItemList = () => {
        return friendsMenuItems.map((menuItem, index) => (
            <MenuItem
                key={index}
                menuItem={menuItem}
                pageName='friends'
            />
        ))
    }

    //Render all friends module
    const renderAllFriendsModule = () => {
        return (
            <Fragment>
                <div className={`${style['friends-title']}`}>Friends</div>
                <div className={`${style['friends-search-row']}`}>
                    <Search />
                </div>
                <div className={`${style['friendlist-row']}`}>
                    <FriendList />
                </div>
            </Fragment>
        )
    }

    //Render friend request module
    const renderFriendRequestModule = () => {
        return (
            <Fragment>
                <div className={`${style['friends-title']}`}>Friend Request</div>
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
                {
                    friendsMenuIdActive === 1 ?
                        renderAllFriendsModule() : renderFriendRequestModule()
                }
            </div>


        </div>
    )
}