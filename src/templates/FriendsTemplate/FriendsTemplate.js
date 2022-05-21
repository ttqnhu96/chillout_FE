/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Route } from "react-router";
import style from './FriendsTemplate.module.css';
import Footer from '../MainContentTemplate/Layout/Footer/Footer';
import Header from '../MainContentTemplate/Layout/Header/Header';
import MenuItem from '../../components/Menutem/MenuItem';
const friendsMenuItems = require('./friendsMenuItems.json');

export const FriendsTemplate = (props) => {
    //Render menu items
    const renderMenuItemList = () => {
        return friendsMenuItems.map((menuItem, index) => (
            <MenuItem
                key={index}
                menuItem={menuItem}
            />
        ))
    }

    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {

        return (
            <div className="chillout-bg">
                <div className="chillout-container">
                    <Header />
                    <div className={`${style['container']}`}>
                        <div className={`${style['menu']}`}>
                            {renderMenuItemList()}
                        </div>

                        <div className={`${style['main']}`}>
                            <div className={`${style['content-container']}`}>
                                <Component {...propsRoute} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }} />
}
