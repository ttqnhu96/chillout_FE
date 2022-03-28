import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cover from "../../components/Cover/Cover";
import WallPosts from "../../components/WallPosts/WallPosts";
import Intro from "../../components/Intro/Intro";
import ShortFriendList from "../../components/ShortFriendList/ShortFriendList";
import style from './Wall.module.css';

export default function Wall() {
    useEffect(() => {
        //Hide scrollbar when sign up modal is opened
        // document.body.style.overflow = isCreatePostModalVisible ? 'hidden' : 'unset';
    })

    //Get state from reducers
    // const { isCreatePostModalVisible } = useSelector(state => state.PostReducer);

    return (
        <div className={`${style['wall']}`}>
            <div className={`${style['wall-left']}`}>
                <Intro />
                <ShortFriendList />
            </div>
            <div className={`${style['wall-right']}`}>
                <div className={`${style['wall-cover-container']}`}>
                    <Cover />
                </div>
                <div className={`${style['wall-post-container']}`}>
                    <WallPosts />
                </div>
            </div>
        </div >
    )
}