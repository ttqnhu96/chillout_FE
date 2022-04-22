/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Cover from "../../components/Cover/Cover";
import WallPostList from "../../components/WallPostList/WallPostList";
import Intro from "../../components/Intro/Intro";
import RecentContacts from "../../components/RecentContacts/RecentContacts";
import style from './Wall.module.css';
import FriendList from "../../components/FriendList/FriendList";
import About from "../../components/About/About";
import Photos from "../../components/Photos/Photos";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDelete from "../../components/ConfirmDelete/ConfirmDelete";
import { deleteCommentSagaAction } from "../../redux/actions/CommentAction";
import { MODAL_TYPE } from "../../util/constants/commonConstants";
import { deletePhotoSagaAction } from "../../redux/actions/PhotoAction";
import { setIsReloadWallAction } from "../../redux/actions/ProfileActions";

export default function Wall() {
    const { isConfirmDeleteModalVisible, modalType } = useSelector(state => state.ConfirmDeleteReducer);
    const { deletedCommentId } = useSelector(state => state.CommentReducer);
    const { deletedPhotoId } = useSelector(state => state.PhotoReducer);
    const { isReload } = useSelector(state => state.ProfileReducer);
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);

    const dispatch = useDispatch();
    const handleDeleteComment = () => {
        dispatch(deleteCommentSagaAction(deletedCommentId));
    }
    const handleDeletePhoto = () => {
        dispatch(deletePhotoSagaAction(deletedPhotoId));
    }

    const [activeMenuId, setActiveMenuId] = useState(1);
    useEffect(() => {
        if (isReload) {
            setActiveMenuId(1);
            dispatch(setIsReloadWallAction(false));
        }
    }, [isReload])

    return (
        <div className={`${style['wall']}`}>
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
            <div className={`${style['wall-left']}`}>
                <Intro />
                {!isViewFriendProfile && <RecentContacts />}
            </div>
            <div className={`${style['wall-right']}`}>
                <div className={`${style['wall-cover-container']}`}>
                    <Cover
                        activeMenuId={activeMenuId}
                        setActiveMenuId={setActiveMenuId} />
                </div>
                <div className={`${style['wall-content-container']}`}>
                    {activeMenuId === 1 && <WallPostList />}
                    {activeMenuId === 2 && <About />}
                    {activeMenuId === 3 && <FriendList />}
                    {activeMenuId === 4 && <Photos />}
                </div>
            </div>
        </div >
    )
}