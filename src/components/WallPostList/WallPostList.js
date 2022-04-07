/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostListWallSagaAction } from "../../redux/actions/PostAction";
import WallPost from "../WallPost/WallPost";
import style from './WallPostList.module.css';

export default function WallPostList() {
    const dispatch = useDispatch();

    //Get state from reducer
    const currentUserId = useSelector(state => state.ProfileReducer).userProfile.id;
    const { postListWall } = useSelector(state => state.PostReducer);

    //Local state
    const [requestToGetPostList, setRequestToGetPostList] = useState({
        userId: 0,
        isPaginated: false
    })

    //Set current user id
    useEffect(() => {
        setRequestToGetPostList(prevState => ({
            ...prevState,
            userId: currentUserId
        }))
    }, [currentUserId])

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