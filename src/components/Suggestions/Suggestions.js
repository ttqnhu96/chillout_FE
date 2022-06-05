/* eslint-disable react-hooks/exhaustive-deps */
import { Tooltip } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Suggestions.module.css';
import { getSuggestionsListSagaAction } from '../../redux/actions/RelationshipAction';
import { USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import { getUserProfileAction, setIsReloadWallAction } from '../../redux/actions/ProfileActions';
import { getPostListWallAction } from '../../redux/actions/PostAction';

export default function Suggestions() {
    const dispatch = useDispatch();
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //State from reducer
    const { userId } = useSelector(state => state.ProfileReducer).userProfile;
    const { suggestionsList } = useSelector(state => state.RelationshipReducer);

    //Use effect
    useEffect(() => {
        if (loginUserId) {
            dispatch(getSuggestionsListSagaAction({
                userId: loginUserId,
                isPaginated: false
            }))
        }
    }, [loginUserId])

    //Handle events
    const handleClickSuggestedUser = (suggestedUserId) => {
        if (userId && userId !== suggestedUserId) {
            dispatch(getUserProfileAction({}));
            dispatch(getPostListWallAction([]));
        }
        dispatch(setIsReloadWallAction(true));
        history.push(`/user/${suggestedUserId}`);
    }

    //Render suggestion items
    const renderSuggestionsList = () => {
        return suggestionsList.map((item, index) => (
            <div key={index} className={`${style['contacts-item-container']}`}>
                <img
                    className={`${style['contacts-item-avatar']}`}
                    src={item.avatar ? item.avatar : "/image/avatar/default_avatar.png"}
                    alt="avatar"
                    onClick={() => { handleClickSuggestedUser(item.userId, item.profileId) }}
                />
                <div className={`${style['contacts-item-text-container']}`}>
                    <Tooltip title={`${item.firstName} ${item.lastName}`} placement="right">
                        <div
                            className={`${style['contacts-first-name']}`}
                            onClick={() => { handleClickSuggestedUser(item.userId, item.profileId) }}>
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