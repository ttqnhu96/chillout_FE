import { Fragment, useState } from "react";
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

    //Handle events
    const handleChangeValue = (event) => {
        const { name, value } = event.target;
        setNameValue(prevState => ({
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
        handleUpdateProfile(fieldName, nameValue[fieldName]);
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
        setNameValue({
            firstName: firstName,
            lastName: lastName
        });
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
                                <input
                                    name="firstName"
                                    autoFocus
                                    className={`${style['info-input']}`}
                                    value={nameValue.firstName}
                                    onChange={handleChangeValue}
                                />
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
                                <input
                                    name="lastName"
                                    autoFocus
                                    className={`${style['info-input']}`}
                                    value={nameValue.lastName}
                                    onChange={handleChangeValue}
                                />
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