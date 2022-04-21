import { useSelector } from 'react-redux';
import style from './Intro.module.css';

export default function Intro() {
    //Get state from reducer
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);

    //In case view logged in user profile
    const bio = useSelector(state => state.ProfileReducer).userProfile.bio;
    const cityName = useSelector(state => state.ProfileReducer).userProfile.cityName;
    const workplaceName = useSelector(state => state.ProfileReducer).userProfile.workplaceName;
    const registeredAt = useSelector(state => state.ProfileReducer).userProfile.createdAt;

    //In case view friend profile
    const friendBio = useSelector(state => state.ProfileReducer).friendProfile.bio;
    const friendCityName = useSelector(state => state.ProfileReducer).friendProfile.cityName;
    const friendWorkplaceName = useSelector(state => state.ProfileReducer).friendProfile.workplaceName;
    const friendRegisteredAt = useSelector(state => state.ProfileReducer).friendProfile.createdAt;

    console.log('Intro')
    const renderBio = () => {
        if (!isViewFriendProfile) {
            return bio && (
                <div className={`${style['intro-bio']}`}>
                    {bio || ""}
                    <hr />
                </div>
            )
        } else {
            return friendBio && (
                <div className={`${style['intro-bio']}`}>
                    {friendBio || ""}
                    <hr />
                </div>
            )
        }
    }

    const renderPlaceLived = () => {
        if (!isViewFriendProfile) {
            return cityName && (
                <div className={`${style['intro-item']}`}>
                    <div className={`${style['intro-item-icon']}`}>
                        <img height={19} width={20}
                            src="./image/icon/address.png"
                            alt="address"
                        />
                    </div>
                    <div className={`${style['intro-item-text']}`}>
                        Lives in <span style={{ fontWeight: 'bold' }}>{cityName}</span>
                    </div>
                </div>
            )
        } else {
            return friendCityName && (
                <div className={`${style['intro-item']}`}>
                    <div className={`${style['intro-item-icon']}`}>
                        <img height={19} width={20}
                            src="./image/icon/address.png"
                            alt="address"
                        />
                    </div>
                    <div className={`${style['intro-item-text']}`}>
                        Lives in <span style={{ fontWeight: 'bold' }}>{friendCityName}</span>
                    </div>
                </div>
            )
        }
    }

    const renderWorkplace = () => {
        if (!isViewFriendProfile) {
            return workplaceName && (
                <div className={`${style['intro-item']}`}>
                    <div className={`${style['intro-item-icon']}`}>
                        <img height={18} width={18}
                            src="./image/icon/work.png"
                            alt="work"
                        />
                    </div>
                    <div className={`${style['intro-item-text']}`}>
                        Works at <span style={{ fontWeight: 'bold' }}>{workplaceName}</span>
                    </div>
                </div>
            )
        } else {
            return friendWorkplaceName && (
                <div className={`${style['intro-item']}`}>
                    <div className={`${style['intro-item-icon']}`}>
                        <img height={18} width={18}
                            src="./image/icon/work.png"
                            alt="work"
                        />
                    </div>
                    <div className={`${style['intro-item-text']}`}>
                        Works at <span style={{ fontWeight: 'bold' }}>{friendWorkplaceName}</span>
                    </div>
                </div>
            )
        }
    }

    const renderRegisterDate = () => {
        if (!isViewFriendProfile) {
            return (
                <div className={`${style['intro-item']}`}>
                    <div className={`${style['intro-item-icon']}`}>
                        <img height={18} width={18}
                            src="./image/icon/clock.png"
                            alt="clock"
                        />
                    </div>
                    <div className={`${style['intro-item-text']}`}>
                        Joined <span style={{ fontWeight: 'bold' }}>{registeredAt ? new Date(registeredAt).toLocaleDateString() : ""}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`${style['intro-item']}`}>
                    <div className={`${style['intro-item-icon']}`}>
                        <img height={18} width={18}
                            src="./image/icon/clock.png"
                            alt="clock"
                        />
                    </div>
                    <div className={`${style['intro-item-text']}`}>
                        Joined <span style={{ fontWeight: 'bold' }}>{registeredAt ? new Date(friendRegisteredAt).toLocaleDateString() : ""}</span>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={`${style['intro-container']}`}>
            <div className={`${style['intro-title']}`}>
                Intro
            </div>

            {/* Bio */}
            {renderBio()}

            {/* City */}
            {renderPlaceLived()}

            {/* Workplace */}
            {renderWorkplace()}

            {/* Register date */}
            {renderRegisterDate()}
        </div>
    )
}