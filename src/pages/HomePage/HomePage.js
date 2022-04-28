/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Suggestions from '../../components/Suggestions/Suggestions';

export default function HomePage() {
    return (
        <Fragment>
            <NewsFeed />
            <Suggestions />
        </Fragment>
    )
}
