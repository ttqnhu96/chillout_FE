/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './SuggestionsSideBar.module.css';
import { getSuggestionsListSagaAction } from '../../redux/actions/RelationshipAction';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';
import { history } from '../../util/history';
import { getUserProfileAction, setIsReloadWallAction } from '../../redux/actions/ProfileActions';
import { getPostListWallAction } from '../../redux/actions/PostAction';

export default function SuggestionsSideBar() {
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
            <li key={index} className={`${style['suggestions-item']}`}>
                <img
                    className={`${style['suggestions-item__avatar']}`}
                    src={item.avatar ?
                        `${AWS_S3_BUCKET_LINK}/${item.avatar}` : "/image/avatar/default_avatar.png"}
                    alt="avatar"
                    onClick={() => { handleClickSuggestedUser(item.userId, item.profileId) }}
                />
                <div className={`${style['suggestions-item__name']}`}>
                    <div
                        className={`${style['suggestions-item__name__first-name']}`}
                        onClick={() => { handleClickSuggestedUser(item.userId, item.profileId) }}>
                        {`${item.firstName}`} {`${item.lastName}`}
                    </div>
                    <div className={`${style['suggestions-item__name__username']}`}>
                        {`@${item.username}`}
                    </div>
                </div>
            </li>
        ))
    }

    return (
        <div className={`${style['suggestions']}`}>
            <h3 className={`${style['suggestions__heading']}`}>
                SUGGESTIONS
            </h3>
            <ul className={`${style['suggestions__list']}`}>
                {renderSuggestionsList()}
            </ul>
        </div>
    )
}