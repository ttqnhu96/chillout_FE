import { Tooltip } from "antd";
import { Fragment, memo, useEffect, useState } from "react";
import { LABELS } from "../../util/constants/commonConstants";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import style from './Name.module.css';

function Name(props) {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //Props
    const { profileOwnerId, firstName, lastName, handleUpdateProfile } = props;

    //Local state
    const [nameValue, setNameValue] = useState({
        firstName: '',
        lastName: ''
    });

    const [isEditMode, setIsEditMode] = useState({
        firstName: false,
        lastName: false
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: ''
    })

    const [isSaveBtnEnabled, setIsSaveBtnEnabled] = useState({
        firstName: false,
        lastName: false
    });


    //Use effect
    useEffect(() => {
        setNameValue(prevState => ({
            ...prevState,
            firstName: firstName
        }));
    }, [firstName])
    
    useEffect(() => {
        setNameValue(prevState => ({
            ...prevState,
            lastName: lastName
        }));
    }, [lastName])


    //Handle events
    const handleChangeValue = (event) => {
        const { name, value } = event.target;
        setNameValue(prevState => ({
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
        //Validate empty values
        if (nameValue[fieldName] === '') {
            setErrors(prevState => ({
                ...prevState,
                [fieldName]: LABELS[fieldName] + ' is required!'
            }));
            isValid = false;
        }
        if (isValid) {
            handleUpdateProfile(fieldName, nameValue[fieldName]);
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
        setNameValue({
            firstName: firstName,
            lastName: lastName
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
                Name
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            First Name
                        </div>
                        {
                            isEditMode.firstName ?
                                <Tooltip
                                    color="rgb(190, 75, 73)"
                                    title={errors.firstName}
                                    placement="bottom">
                                    <input
                                        style={errors.firstName !== "" ? { border: '0.1rem solid rgb(190, 75, 73)' } : {}}
                                        name="firstName"
                                        autoFocus
                                        className={`${style['info-input']}`}
                                        value={nameValue.firstName}
                                        onChange={handleChangeValue}
                                    />
                                </Tooltip>
                                :
                                <div className={`${style['info-value']}`}>
                                    {nameValue.firstName}
                                </div>
                        }
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {renderEditButton('firstName')}
                    </div>
                </div>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Last Name
                        </div>
                        {
                            isEditMode.lastName ?
                                <Tooltip
                                    color="rgb(190, 75, 73)"
                                    title={errors.lastName}
                                    placement="bottom">
                                    <input
                                        style={errors.lastName !== "" ? { border: '0.1rem solid rgb(190, 75, 73)' } : {}}
                                        name="lastName"
                                        autoFocus
                                        className={`${style['info-input']}`}
                                        value={nameValue.lastName}
                                        onChange={handleChangeValue}
                                    />
                                </Tooltip>
                                :
                                <div className={`${style['info-value']}`}>
                                    {nameValue.lastName}
                                </div>
                        }
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {renderEditButton('lastName')}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Name)