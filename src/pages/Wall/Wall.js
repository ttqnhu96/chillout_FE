import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cover from "../../components/Cover/Cover";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";
import Profile from "../../components/Profile/Profile";
import ShortFriendList from "../../components/ShortFriendList/ShortFriendList";
import { displayCreatePostModalAction } from "../../redux/actions/PostAction";
import style from './Wall.module.css';

export default function Wall() {
    const dispatch = useDispatch();
    useEffect(() => {
        //Hide scrollbar when sign up modal is opened
        document.body.style.overflow = isCreatePostModalVisible ? 'hidden' : 'unset';
    })

    const handleClickCreatePost = () => {
        dispatch(displayCreatePostModalAction())
    }

    //Get state from reducers
    const { isCreatePostModalVisible } = useSelector(state => state.PostReducer);

    return (
        // <div>
        //     <button onClick={handleClickCreatePost}>+</button>
        //     {isCreatePostModalVisible && <CreatePost />}
        // </div>
        <div className={`${style['wall']}`}>
            <div className={`${style['wall-cover']}`}>
                <Cover />
            </div>
            <div className={`${style['wall-body']}`}>
                <div className={`${style['wall-body-left']}`}>
                    <Profile />
                    <ShortFriendList />
                </div>
                <div className={`${style['wall-body-right']}`}>
                    <Post />
                </div>
            </div>
        </div >
    )
}