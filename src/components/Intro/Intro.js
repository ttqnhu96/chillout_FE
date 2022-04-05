import { useSelector } from 'react-redux';
import style from './Intro.module.css';

export default function Intro() {
    //Get state from reducer
    const bio = useSelector(state => state.ProfileReducer).userProfile.bio;
    const cityName = useSelector(state => state.ProfileReducer).userProfile.cityName;
    const workplaceName = useSelector(state => state.ProfileReducer).userProfile.workplaceName;
    const registeredAt = useSelector(state => state.ProfileReducer).userProfile.createdAt;

    return (
        <div className={`${style['intro-container']}`}>
            <div className={`${style['intro-title']}`}>
                Intro
            </div>

            {/* Bio */}
            {bio && (
                <div className={`${style['intro-bio']}`}>
                    {bio || ""}
                    <hr />
                </div>
            )}

            {/* City */}
            {cityName && (
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
            )}

            {/* Workplace */}
            {workplaceName && (
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
            )}

            {/* Register date */}
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
        </div>
    )
}