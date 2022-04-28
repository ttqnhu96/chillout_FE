import { useSelector } from 'react-redux';
import style from './Intro.module.css';

export default function Intro(props) {
    //State from reducer
    const { bio, cityName, workplaceName, createdAt } = useSelector(state => state.ProfileReducer).userProfile;

    //Functions
    const renderBio = () => {
        return bio && (
            <div className={`${style['intro-bio']}`}>
                {bio || ""}
                <hr />
            </div>
        )
    }

    const renderPlaceLived = () => {
        return cityName && (
            <div className={`${style['intro-item']}`}>
                <div className={`${style['intro-item-icon']}`}>
                    <img height={19} width={20}
                        src="/image/icon/address.png"
                        alt="address"
                    />
                </div>
                <div className={`${style['intro-item-text']}`}>
                    Lives in <span style={{ fontWeight: 'bold' }}>{cityName}</span>
                </div>
            </div>
        )
    }

    const renderWorkplace = () => {
        return workplaceName && (
            <div className={`${style['intro-item']}`}>
                <div className={`${style['intro-item-icon']}`}>
                    <img height={18} width={18}
                        src="/image/icon/work.png"
                        alt="work"
                    />
                </div>
                <div className={`${style['intro-item-text']}`}>
                    Works at <span style={{ fontWeight: 'bold' }}>{workplaceName}</span>
                </div>
            </div>
        )
    }

    const renderRegisterDate = () => {
        return (
            <div className={`${style['intro-item']}`}>
                <div className={`${style['intro-item-icon']}`}>
                    <img height={18} width={18}
                        src="/image/icon/clock.png"
                        alt="clock"
                    />
                </div>
                <div className={`${style['intro-item-text']}`}>
                    Joined <span style={{ fontWeight: 'bold' }}>{createdAt ? new Date(createdAt).toLocaleDateString() : ""}</span>
                </div>
            </div>
        )
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