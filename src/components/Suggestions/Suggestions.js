/* eslint-disable react-hooks/exhaustive-deps */
import { Tooltip } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Suggestions.module.css';
import { getSuggestionsListSagaAction } from '../../redux/actions/RelationshipAction';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import { getFriendProfileAction, getProfileDetailByIdSagaAction, setIsViewFriendProfileAction } from '../../redux/actions/ProfileActions';
import { getPostListWallAction } from '../../redux/actions/PostAction';
import { getPhotoListByUserIdAction } from '../../redux/actions/PhotoAction';

export default function Suggestions() {
    const dispatch = useDispatch();
    const currentUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN)).id;
    const { suggestionsList } = useSelector(state => state.RelationshipReducer);
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);

    useEffect(() => {
        if (currentUserId) {
            dispatch(getSuggestionsListSagaAction({
                userId: currentUserId,
                isPaginated: false
            }))
        }
    }, [currentUserId])

    //Handle events
    const handleClickSuggestedUser = (profileId) => {
        if (isViewFriendProfile === false) {
            dispatch(getPostListWallAction([]));
            dispatch(getPhotoListByUserIdAction([]));
            dispatch(setIsViewFriendProfileAction(true));
        }
        dispatch(getFriendProfileAction({}));
        dispatch(getProfileDetailByIdSagaAction(profileId, false));
        history.push('/wall');
    }

    //Render menu items
    const renderSuggestionsList = () => {
        return suggestionsList.map((item, index) => (
            <div key={index} className={`${style['contacts-item-container']}`}>
                <img
                    className={`${style['contacts-item-avatar']}`}
                    src={item.avatar ?
                        `${AWS_S3_BUCKET_LINK}/${item.avatar}` : "./image/avatar/default_avatar.png"}
                    alt="avatar"
                    onClick={() => { handleClickSuggestedUser(item.profileId) }}
                />
                <div className={`${style['contacts-item-text-container']}`}>
                    <Tooltip title={`${item.firstName} ${item.lastName}`} placement="right">
                        <div
                            className={`${style['contacts-first-name']}`}
                            onClick={handleClickSuggestedUser}>
                            {`${item.firstName}`}
                        </div>
                        <div className={`${style['contacts-username']}`}>
                            {`@${item.username}`}
                        </div>
                    </Tooltip>
                </div>
            </div>
        ))
    }

    return (
        <div className={`${style['contacts-container']}`}>
            <div className={`${style['contacts-title']}`}>
                SUGGESTIONS
            </div>
            {renderSuggestionsList()}
        </div>
    )
}