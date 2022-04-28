/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Route } from "react-router";
import style from './WallTemplate.module.css';
import Footer from '../MainContentTemplate/Layout/Footer/Footer';
import Header from '../MainContentTemplate/Layout/Header/Header';
import ConfirmDelete from '../../components/ConfirmDelete/ConfirmDelete';
import { MODAL_TYPE } from '../../util/constants/commonConstants';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentSagaAction } from '../../redux/actions/CommentAction';
import { deletePhotoSagaAction } from '../../redux/actions/PhotoAction';
import Intro from '../../components/Intro/Intro';
import { USER_LOGIN } from '../../util/constants/systemSettings';
import RecentContacts from '../../components/RecentContacts/RecentContacts';
import Cover from '../../components/Cover/Cover';
import { getProfileDetailByUserIdSagaAction, getUserProfileAction } from '../../redux/actions/ProfileActions';


export const WallTemplate = (props) => {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const dispatch = useDispatch();

    //Get profile owner id
    const { id } = props.computedMatch.params;
    //Use effect
    useEffect(() => {
        if(id) {
            dispatch(getProfileDetailByUserIdSagaAction(id));
        }

        return () => {
            //Set user profile to empty when component is unmounted
            dispatch(getUserProfileAction({}))
        }
    }, [id])

    //Props
    const { Component, ...restProps } = props;

    //State from reducer
    const { isConfirmDeleteModalVisible, modalType } = useSelector(state => state.ConfirmDeleteReducer);
    const { deletedCommentId } = useSelector(state => state.CommentReducer);
    const { deletedPhotoId } = useSelector(state => state.PhotoReducer);

    //Handle events
    const handleDeleteComment = () => {
        dispatch(deleteCommentSagaAction(deletedCommentId));
    }
    const handleDeletePhoto = () => {
        dispatch(deletePhotoSagaAction(deletedPhotoId));
    }

    return <Route {...restProps} render={(propsRoute) => {

        return (
            <div className="chillout-bg">
                <div className="chillout-container">
                    <Header />
                    <div className={`${style['container']}`}>
                        {isConfirmDeleteModalVisible
                            && modalType === MODAL_TYPE.CONFIRM_DELETE_COMMENT
                            && <ConfirmDelete
                                title='Delete Comment?'
                                content='Are you sure you want to delete this comment?'
                                handleDelete={handleDeleteComment}
                            />}
                        {isConfirmDeleteModalVisible
                            && modalType === MODAL_TYPE.CONFIRM_DELETE_PHOTO
                            && <ConfirmDelete
                                title='Delete Photo?'
                                content='Are you sure you want to delete this photo?'
                                handleDelete={handleDeletePhoto}
                            />}
                        <div className={`${style['left-col']}`}>
                            <Intro />
                            { (Number(id) === loginUserId ) && <RecentContacts />}
                        </div>
                        <div className={`${style['right-col']}`}>
                            <div className={`${style['cover-container']}`}>
                                <Cover />
                            </div>
                            <div className={`${style['content-container']}`}>
                                <Component {...propsRoute} />
                            </div>
                        </div>
                    </div >
                    <Footer />
                </div>
            </div>
        )
    }} />
}
