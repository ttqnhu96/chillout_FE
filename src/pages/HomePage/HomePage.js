/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import style from './HomePage.module.css';
import Menu from '../../components/Menu/Menu';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeMenuIdActiveAction } from '../../redux/actions/MenuAction';
import Settings from '../../components/Settings/Settings';
import Suggestions from '../../components/Suggestions/Suggestions';

export default function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHomeMenuIdActiveAction(0))
    }, [])

    const { homeMenuIdActive } = useSelector(state => state.MenuReducer);

    const renderComponent = () => {
        if (homeMenuIdActive === 3) {

        }
        else if (homeMenuIdActive === 4) {
            return <Settings />
        }
        else {
            return (
                <Fragment>
                    <NewsFeed />
                    <Suggestions />
                </Fragment>
            )
        }
    }
    return (
        <div className={`${style['home-page']}`}>
            <Menu />
            {renderComponent()}
        </div >
    )
}
