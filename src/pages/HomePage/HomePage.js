import React, { useEffect } from 'react';
import style from './HomePage.module.css';
import Menu from '../../components/Menu/Menu';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Contacts from '../../components/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { setHomeMenuIdActiveAction } from '../../redux/actions/MenuAction';

export default function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHomeMenuIdActiveAction(0))
    })

    return (
        <div className={`${style['home-page']}`}>
            <Menu />
            <NewsFeed />
            <Contacts />
        </div >
    )
}
