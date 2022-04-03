import { Fragment } from "react";
import { useSelector } from "react-redux";
import style from './Bio.module.css';

export default function Bio() {
    //Get state from reducer
    const bio = useSelector(state => state.ProfileReducer).userProfile.bio;

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Bio
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['info-container']}`} style={{ width: '96%' }}>
                        <div className={`${style['info-value']}`} >
                            {bio}
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