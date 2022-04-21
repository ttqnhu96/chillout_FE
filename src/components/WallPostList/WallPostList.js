/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostListWallSagaAction } from "../../redux/actions/PostAction";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import WallPost from "../WallPost/WallPost";
import style from './WallPostList.module.css';

export default function WallPostList() {
    const dispatch = useDispatch();

    //Get state from reducer
    const currentUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id; //In case view logged in user profile
    const friendId = useSelector(state => state.ProfileReducer).friendProfile?.id; //In case view friend profile
    const { postListWall } = useSelector(state => state.PostReducer);
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);

    //Local state
    const [requestToGetPostList, setRequestToGetPostList] = useState({
        userId: 0,
        isPaginated: false
    })

    //Set current user id
    useEffect(() => {
        let profileOwnerId = 0;
        if(isViewFriendProfile) {
            profileOwnerId = friendId;
        } else {
            profileOwnerId = currentUserId;
        }
        setRequestToGetPostList(prevState => ({
            ...prevState,
            userId: profileOwnerId
        }))
    }, [currentUserId, friendId, isViewFriendProfile])

    //Get post list
    useEffect(() => {
        if (requestToGetPostList.userId) {
            dispatch(getPostListWallSagaAction(requestToGetPostList))
        }
    }, [requestToGetPostList])

    const renderPostList = () => {
        return (
            postListWall.map((post, index) => (
                <WallPost key={index}
                    post={post}
                    currentUserId={currentUserId} />
            ))
        )
    }

    return (
        <Fragment>
            <div className={`${style['post-title']}`}>Post</div>
            <div className={`${style['wall-post-container']}`}>
                {renderPostList()}
            </div>
        </Fragment>
    )
}