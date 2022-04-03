import { Fragment } from "react";
import { useSelector } from "react-redux";
import style from './PlaceLived.module.css';

export default function PlaceLived() {
    //Get state from reducer
    const cityName = useSelector(state => state.ProfileReducer).userProfile.cityName;

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Place Lived
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="./image/icon/place-lived.png"
                            alt="place_lived"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Current City
                        </div>
                        <div className={`${style['info-value']}`}>
                            {cityName}
                        </div>
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        <img width={16} height={16}
                            src="./image/icon/edit.png"
                            alt="edit"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}