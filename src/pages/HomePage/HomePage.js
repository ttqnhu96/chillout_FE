import React, { Fragment, useEffect } from 'react';
import style from './HomePage.module.css';
import Menu from '../../components/Menu/Menu';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Contacts from '../../components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeMenuIdActiveAction } from '../../redux/actions/MenuAction';
import Settings from '../../components/Settings/Settings';

export default function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHomeMenuIdActiveAction(0))
    }, [])

    const { homeMenuIdActive } = useSelector(state => state.MenuReducer);

    const renderComponent = () => {
        if (homeMenuIdActive === 3) {

        }
        else if (homeMenuIdActive === 5) {
            return <Settings />
        }
        else {
            return (
                <Fragment>
                    <NewsFeed />
                    <Contacts />
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
