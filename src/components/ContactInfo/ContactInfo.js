import { Fragment, useState } from "react";
import style from './ContactInfo.module.css';

export default function ContactInfo(props) {
    const { phone, email, handleUpdateProfile } = props;

    const [contactValue, setContactValue] = useState({
        phone: phone,
        email: email
    });

    const [isEditMode, setIsEditMode] = useState({
        phone: false,
        email: false
    });

    //Handle events
    const handleChangeValue = (event) => {
        const { name, value } = event.target;
        setContactValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleClickEditButton = (fieldName) => {
        setIsEditMode(prevState => ({
            ...prevState,
            [fieldName]: true
        }));
    }

    const handleClickSaveButton = (fieldName) => {
        handleUpdateProfile(fieldName, contactValue[fieldName]);
        setIsEditMode(prevState => ({
            ...prevState,
            [fieldName]: false
        }));
    }

    const handleClickCancelButton = (fieldName) => {
        setIsEditMode(prevState => ({
            ...prevState,
            [fieldName]: false
        }));
        setContactValue({
            phone: phone,
            email: email
        });
    }

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
                        {
                            isEditMode.phone ?
                                <input name="phone"
                                    autoFocus
                                    className={`${style['info-input']}`}
                                    value={contactValue.phone}
                                    maxLength={15}
                                    onChange={handleChangeValue}
                                    onKeyDown={(e) => {
                                        if (!((e.key >= 0 && e.key <= 9)
                                            || (e.key === 'Backspace')
                                            || (e.key === 'ArrowLeft')
                                            || (e.key === 'ArrowRight')
                                            || (e.key === 'Tab')
                                            || (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'x' || e.key === 'v')))) {
                                            e.preventDefault();
                                        }
                                    }} />
                                :
                                <div className={`${style['info-value']}`}>
                                    {contactValue.phone}
                                </div>
                        }
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {
                            isEditMode.phone ?
                                <Fragment>
                                    <div className={`${style['save-btn']}`}
                                        onClick={() => { handleClickSaveButton('phone') }}>
                                        Save
                                    </div>
                                    <div className={`${style['cancel-btn']}`}
                                        onClick={() => { handleClickCancelButton('phone') }}>
                                        Cancel
                                    </div>
                                </Fragment>
                                :
                                <img width={16} height={16}
                                    src="./image/icon/edit.png"
                                    alt="edit"
                                    onClick={() => { handleClickEditButton('phone') }}
                                />
                        }
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
                        {
                            isEditMode.email ?
                                <input
                                    name="email"
                                    autoFocus
                                    className={`${style['info-input']}`}
                                    value={contactValue.email}
                                    onChange={handleChangeValue}
                                />
                                :
                                <div className={`${style['info-value']}`}>
                                    {contactValue.email}
                                </div>
                        }
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {
                            isEditMode.email ?
                                <Fragment>
                                    <div className={`${style['save-btn']}`}
                                        onClick={() => { handleClickSaveButton('email') }}>
                                        Save
                                    </div>
                                    <div className={`${style['cancel-btn']}`}
                                        onClick={() => { handleClickCancelButton('email') }}>
                                        Cancel
                                    </div>
                                </Fragment>
                                :
                                <img width={16} height={16}
                                    src="./image/icon/edit.png"
                                    alt="edit"
                                    onClick={() => { handleClickEditButton('email') }}
                                />
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}