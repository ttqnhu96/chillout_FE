import { Fragment } from "react";
import { useSelector } from "react-redux";
import style from './BasicInfo.module.css';

export default function BasicInfo() {
    //Get state from reducer
    const gender = useSelector(state => state.ProfileReducer).userProfile.gender;
    const birthday = useSelector(state => state.ProfileReducer).userProfile.birthday;

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Basic Info
            </div>
            <div style={{ display: "flex" }}>

                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="./image/icon/gender.png"
                            alt="gender"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Gender
                        </div>
                        <div className={`${style['info-value']}`}>
                            {gender}
                        </div>
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        <img width={16} height={16}
                            src="./image/icon/edit.png"
                            alt="edit"
                        />
                    </div>
                </div>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="./image/icon/birthday.png"
                            alt="birthday"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Date of Birth
                        </div>
                        <div className={`${style['info-value']}`}>
                            {new Date(birthday).toLocaleDateString()}
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