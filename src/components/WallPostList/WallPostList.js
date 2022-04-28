/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostListWallAction, getPostListWallSagaAction } from "../../redux/actions/PostAction";
import { setIsReloadWallAction } from "../../redux/actions/ProfileActions";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import WallPost from "../WallPost/WallPost";
import style from './WallPostList.module.css';

export default function WallPostList() {
    const dispatch = useDispatch();
    
    //State from reducer
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const { userId } = useSelector(state => state.ProfileReducer).userProfile;
    const { postListWall } = useSelector(state => state.PostReducer);
    const { isReload } = useSelector(state => state.ProfileReducer);

    //Get post list
    useEffect(() => {
        if (userId) {
            dispatch(getPostListWallSagaAction({
                userId: userId,
                isPaginated: false
            }))
        }

        //Clean friend list when component is unmounted
        return () => {
            dispatch(getPostListWallAction([]))
        }
    }, [userId])


    //Reload post list
    const wallPostContainerRef = useRef();
    useEffect(() => {
        if (isReload) {
            dispatch(setIsReloadWallAction(false));
            wallPostContainerRef.current.scrollTop = 0;
            if (userId) {
                dispatch(getPostListWallSagaAction({
                    userId: userId,
                    isPaginated: false
                }))
            }  
        }
    }, [isReload])

    const renderPostList = () => {
        return (
            postListWall.map((post, index) => (
                <WallPost key={index}
                    post={post}
                    currentUserId={loginUserId} />
            ))
        )
    }

    return (
        <Fragment>
            <div className={`${style['post-title']}`}>Post</div>
            <div className={`${style['wall-post-container']}`}
                ref={wallPostContainerRef}>
                {renderPostList()}
            </div>
        </Fragment>
    )
}