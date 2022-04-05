import { Tooltip } from "antd";
import { Fragment, useState } from "react";
import { labels } from "../../util/constants/commonConstants";
import style from './Name.module.css';

export default function Name(props) {
    const { firstName, lastName, handleUpdateProfile } = props;

    const [nameValue, setNameValue] = useState({
        firstName: firstName,
        lastName: lastName
    });

    const [isEditMode, setIsEditMode] = useState({
        firstName: false,
        lastName: false
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: ''
    })

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
                [fieldName]: labels[fieldName] + ' is required!'
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
                        {
                            isEditMode.firstName ?
                                <Fragment>
                                    <div className={`${style['save-btn']}`}
                                        onClick={() => { handleClickSaveButton('firstName') }}>
                                        Save
                                    </div>
                                    <div className={`${style['cancel-btn']}`}
                                        onClick={() => { handleClickCancelButton('firstName') }}>
                                        Cancel
                                    </div>
                                </Fragment>
                                :
                                <img width={16} height={16}
                                    src="./image/icon/edit.png"
                                    alt="edit"
                                    onClick={() => { handleClickEditButton('firstName') }}
                                />
                        }
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
                        {
                            isEditMode.lastName ?
                                <Fragment>
                                    <div className={`${style['save-btn']}`}
                                        onClick={() => { handleClickSaveButton('lastName') }}>
                                        Save
                                    </div>
                                    <div className={`${style['cancel-btn']}`}
                                        onClick={() => { handleClickCancelButton('lastName') }}>
                                        Cancel
                                    </div>
                                </Fragment>
                                :
                                <img width={16} height={16}
                                    src="./image/icon/edit.png"
                                    alt="edit"
                                    onClick={() => { handleClickEditButton('lastName') }}
                                />
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}