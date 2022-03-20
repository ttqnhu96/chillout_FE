import React from 'react'
import { Route } from "react-router";
import LoginBanner from './Layout/LoginBanner/LoginBanner';


export const LoginTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return (
            <div className="chillout-bg">
                <div className="chillout-container">
                    <div style={{ display: 'flex', height: '100%' }}>
                        <LoginBanner />
                        <Component {...propsRoute} />
                    </div>
                </div>
            </div>
        )
    }} />
}
