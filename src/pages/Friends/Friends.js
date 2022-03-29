import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { setMenuIdActiveAction } from "../../redux/actions/MenuAction";
import MenuItem from '../../components/Menutem/MenuItem';
import style from './Friends.module.css';
const friendsMenuItems = require('./friendsMenuItems.json');

export default function Friends() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMenuIdActiveAction('friends', 0))
    })
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

    return (
        <div className={`${style['friends']}`}>
            <div className={`${style['friends-left-col']}`}>
                {renderMenuItemList()}
            </div>
            <div className={`${style['friends-right-col']}`}>
                Friends
            </div>
        </div>
    )
}