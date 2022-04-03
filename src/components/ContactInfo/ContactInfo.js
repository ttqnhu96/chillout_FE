import { Fragment } from "react";
import { useSelector } from "react-redux";
import style from './ContactInfo.module.css';

export default function ContactInfo() {
    //Get state from reducer
    const phone = useSelector(state => state.ProfileReducer).userProfile.phone;
    const email = useSelector(state => state.ProfileReducer).userProfile.email;

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Contact Info
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="./image/icon/phone.png"
                            alt="phone"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Mobile
                        </div>
                        <div className={`${style['info-value']}`}>
                            {phone}
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
                            src="./image/icon/email.png"
                            alt="email"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Email
                        </div>
                        <div className={`${style['info-value']}`}>
                            {email}
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