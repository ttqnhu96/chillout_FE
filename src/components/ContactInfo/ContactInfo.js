import { Tooltip } from "antd";
import { Fragment, memo, useEffect, useState } from "react";
import { REGEX_EMAIL } from "../../util/constants/commonConstants";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import style from './ContactInfo.module.css';

function ContactInfo(props) {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //Props
    const { profileOwnerId, phone, email, handleUpdateProfile } = props;

    //Local state
    const [contactValue, setContactValue] = useState({
        phone: '',
        email: ''
    });

    const [isEditMode, setIsEditMode] = useState({
        phone: false,
        email: false
    });

    const [errors, setErrors] = useState({
        phone: '',
        email: ''
    })

    const [isSaveBtnEnabled, setIsSaveBtnEnabled] = useState({
        phone: false,
        email: false
    });

    //Use effect
    useEffect(() => {
        setContactValue(prevState => ({
            ...prevState,
            phone: phone
        }));
    }, [phone])
    
    useEffect(() => {
        setContactValue(prevState => ({
            ...prevState,
            email: email
        }));
    }, [email])

    //Handle events
    const handleChangeValue = (event) => {
        const { name, value } = event.target;
        setContactValue(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevState => ({
            ...prevState,
            [name]: ''
        }));
        setIsSaveBtnEnabled(prevState => ({
            ...prevState,
            [name]: true
        }));
    }

    const handleClickEditButton = (fieldName) => {
        setIsEditMode(prevState => ({
            ...prevState,
            [fieldName]: true
        }));
    }

    const handleClickSaveButton = (fieldName) => {
        let isValid = true;
        //Validate email
        if (fieldName === 'email' && contactValue[fieldName] !== '') {
            if (!REGEX_EMAIL.test(contactValue[fieldName])) { //Invalid email
                setErrors(prevState => ({
                    ...prevState,
                    [fieldName]: 'Invalid email'
                }));
                isValid = false;
            }
        }

        if (isValid) {
            handleUpdateProfile(fieldName, contactValue[fieldName]);
            setIsEditMode(prevState => ({
                ...prevState,
                [fieldName]: false
            }));
        }
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
        setErrors(prevState => ({
            ...prevState,
            [fieldName]: ''
        }));
        setIsSaveBtnEnabled(prevState => ({
            ...prevState,
            [fieldName]: false
        }));
    }

    //Functions
    const renderEditButton = (fieldName) => {
        //In case view friend profile, edit button is not displayed
        if (profileOwnerId === loginUserId) {
            if (isEditMode[fieldName]) {
                return (
                    <Fragment>
                        <div className={isSaveBtnEnabled[fieldName] ? `${style['save-btn']}` : `${style['save-btn-disabled']}`}
                            onClick={() => { handleClickSaveButton(fieldName) }}>
                            Save
                        </div>
                        <div className={`${style['cancel-btn']}`}
                            onClick={() => { handleClickCancelButton(fieldName) }}>
                            Cancel
                        </div>
                    </Fragment>
                )
            } else {
                return (
                    <img width={16} height={16}
                        className={`${style['edit-btn']}`}
                        src="/image/icon/edit.png"
                        alt="edit"
                        onClick={() => { handleClickEditButton(fieldName) }}
                    />
                )
            }
        }
    }

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Contact Info
            </div>
            <div className={`${style['wrapper']}`}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="/image/icon/phone.png"
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
                        {renderEditButton('phone')}
                    </div>
                </div>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="/image/icon/email.png"
                            alt="email"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Email
                        </div>
                        {
                            isEditMode.email ?
                                <Tooltip
                                    color="rgb(190, 75, 73)"
                                    title={errors.email}
                                    placement="bottom">
                                    <input
                                        style={errors.email !== "" ? { border: '0.1rem solid rgb(190, 75, 73)' } : {}}
                                        name="email"
                                        autoFocus
                                        className={`${style['info-input']}`}
                                        value={contactValue.email}
                                        onChange={handleChangeValue}
                                    />
                                </Tooltip>
                                :
                                <div className={`${style['info-value']}`}>
                                    {contactValue.email}
                                </div>
                        }
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {renderEditButton('email')}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(ContactInfo)