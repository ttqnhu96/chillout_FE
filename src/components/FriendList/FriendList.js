/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfileAction, setIsReloadWallAction } from '../../redux/actions/ProfileActions';
import { getFriendListAction, getFriendListSagaAction } from '../../redux/actions/RelationshipAction';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import Search from '../Search/Search';
import style from './FriendList.module.css';

export default function FriendList() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //State from reducer
    const { friendList } = useSelector(state => state.RelationshipReducer);

    //Local state
    const [userId, setUserId] = useState(0);
    useEffect(() => {
        setUserId(prevState => { return id ? id : loginUserId });
    }, [id])


    //Use effect
    useEffect(() => {
        if (userId) {
            dispatch(getFriendListSagaAction(
                {
                    userId: userId,
                    isPaginated: false
                }
            ))
        }

        //Clean friend list when component is unmounted
        return () => {
            dispatch(getFriendListAction([]))
        }
    }, [userId])

    //Handle events
    const handleClickFriend = (friendId) => {
        if (friendId !== userId) {
            dispatch(getUserProfileAction({}));
        }
        dispatch(setIsReloadWallAction(true));
        history.push(`/user/${friendId}`);
    }

    const renderFriendList = () => {
        return (
            friendList?.map((friend, index) => {
                return (
                    <div key={index} className={`${style['friendlist-item']}`}>
                        <img
                            src={friend.avatar ?
                                `${AWS_S3_BUCKET_LINK}/${friend.avatar}` : "/image/avatar/default_avatar.png"}
                            alt="avatar"
                            className={`${style['friendlist-item-avatar']}`}
                            onClick={() => { handleClickFriend(friend.userId, friend.profileId) }}
                        />
                        <div className={`${style['friendlist-item-name']}`}
                            onClick={() => { handleClickFriend(friend.userId, friend.profileId) }}>
                            {`${friend.firstName || ""} ${friend.lastName || ""}`}
                        </div>
                        {/* <div className={`${style['friendlist-options']}`}>
                            <img

                                height={15} width={15}
                                src="/image/icon/more-options.png"
                                alt="more-options"
                            />
                        </div> */}
                    </div>
                )
            })
        )
    }
    return (
        <Fragment>
            <div className={`${style['friendlist-title']}`}>Friends</div>
            <div className={`${style['friends-search-row']}`}>
                <Search />
            </div>
            <div className={`${style['friendlist-item-container']}`}>
                {renderFriendList()}
            </div>
        </Fragment>
    )
}