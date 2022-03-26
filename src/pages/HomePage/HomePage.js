import React from 'react';
import style from './HomePage.module.css';
import Menu from '../../components/Menu/Menu';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Contacts from '../../components/Contacts/Contacts';

export default function HomePage() {
    return (
        <div className={`${style['home-page']}`}>
            <Menu />
            <NewsFeed />
            <Contacts />
        </div >
    )
}
