import { Fragment } from "react";
import { useSelector } from "react-redux";
import style from './Name.module.css';

export default function Name() {
    //Get state from reducer
    const firstName = useSelector(state => state.ProfileReducer).userProfile.firstName;
    const lastName = useSelector(state => state.ProfileReducer).userProfile.lastName;

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Name
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    {/* <div className={`${style['icon-container']}`} >
                            <img width={30} height={30}
                                src="./image/icon/gender.png"
                                alt="gender"
                            />
                        </div> */}
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            First Name
                        </div>
                        <div className={`${style['info-value']}`}>
                            {firstName}
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
                    {/* <div className={`${style['icon-container']}`} >
                            <img width={30} height={30}
                                src="./image/icon/gender.png"
                                alt="gender"
                            />
                        </div> */}
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Last Name
                        </div>
                        <div className={`${style['info-value']}`}>
                            {lastName}
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