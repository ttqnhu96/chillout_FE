import React from 'react'
import { Route } from "react-router";
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';


export const MainContentTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {

        return (
            <div className="chillout-bg">
                <div className="chillout-container">
                    <Header />
                    <Component {...propsRoute} />
                    <Footer />
                </div>
            </div>
        )
    }} />
}
