/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostListWallSagaAction } from "../../redux/actions/PostAction";
import PostBody from "../PostBody/PostBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import style from './WallPosts.module.css';

export default function WallPosts() {
    const dispatch = useDispatch();
    //Get state from reducer
    const currentUserId = useSelector(state => state.ProfileReducer).userProfile.id;
    const { postListWall } = useSelector(state => state.PostReducer);

    //Local state
    const [requestToGetPostList, setRequestToGetPostList] = useState({
        userId: 0,
        isPaginated: false
        // pageIndex: 0,
        // pageSize: 10
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
                <div key={index} className={`${style['view-post-container']}`}>
                    <PostHeader post={post} />
                    <PostBody post={post} />
                    <PostFooter post={post} />
                </div>
            )
            )
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