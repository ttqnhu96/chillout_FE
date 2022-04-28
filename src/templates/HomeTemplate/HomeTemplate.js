import React from 'react'
import style from './HomeTemplate.module.css';
import { Route } from "react-router";
import Menu from '../../components/Menu/Menu';
import Header from '../MainContentTemplate/Layout/Header/Header';
import Footer from '../MainContentTemplate/Layout/Footer/Footer';


export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {

        return (
            <div className="chillout-bg">
                <div className="chillout-container">
                    <Header />
                    <div className={`${style['container']}`}>
                        <Menu />
                        <Component {...propsRoute} />
                    </div >
                    <Footer />
                </div>
            </div>
        )
    }} />
}
