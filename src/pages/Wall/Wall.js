import { useState } from "react";
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

export default function Wall() {
    const { isConfirmDeleteModalVisible } = useSelector(state => state.ConfirmDeleteReducer);
    const { deletedCommentId } = useSelector(state => state.CommentReducer);
    
    const dispatch = useDispatch();
    const handleDeleteComment = () => {
        dispatch(deleteCommentSagaAction(deletedCommentId));
    }

    const [activeMenuId, setActiveMenuId] = useState(1);

    return (
        <div className={`${style['wall']}`}>
            {isConfirmDeleteModalVisible
                && <ConfirmDelete
                    title='Delete Comment?'
                    content='Are you sure you want to delete this comment?'
                    handleDelete={handleDeleteComment}
                />}
            <div className={`${style['wall-left']}`}>
                <Intro />
                <RecentContacts />
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