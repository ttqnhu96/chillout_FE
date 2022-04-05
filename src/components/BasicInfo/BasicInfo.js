import { Fragment, useEffect, useState } from "react";
import style from './BasicInfo.module.css';

export default function BasicInfo(props) {
    const { gender, birthday, handleUpdateProfile } = props;

    const [maxDate, setMaxDate] = useState('2122-01-01');
    const [basicInfoValue, setBasicInfoValue] = useState({
        gender: gender,
        birthday: birthday
    });
    const [isEditMode, setIsEditMode] = useState({
        gender: false,
        birthday: false
    });

    useEffect(() => {
        //Set max date for datetime picker
        const today = new Date();
        setMaxDate(formatDate(today));
    }, [])

    //Handle events
    const handleChangeValue = (event) => {
        const { name, value } = event.target;
        setBasicInfoValue(prevState => ({
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
        handleUpdateProfile(fieldName, basicInfoValue[fieldName]);
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
        setBasicInfoValue({
            gender: gender,
            birthday: birthday
        });
    }

    //Functions
    const formatDate = (date) => {
        let dd = date.getDate();
        let mm = date.getMonth() + 1; //January is 0!
        const yyyy = date.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        return date = yyyy + '-' + mm + '-' + dd;
    }
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
                        {
                            isEditMode.gender ?
                                <select
                                    name="gender"
                                    className={`${style['gender-select-box']}`}
                                    value={basicInfoValue.gender}
                                    onChange={handleChangeValue}>
                                    <option>Female</option>
                                    <option>Male</option>
                                    <option>Other</option>
                                </select>
                                :
                                <div className={`${style['info-value']}`}>
                                    {basicInfoValue.gender}
                                </div>
                        }
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {
                            isEditMode.gender ?
                                <Fragment>
                                    <div className={`${style['save-btn']}`}
                                        onClick={() => { handleClickSaveButton('gender') }}>
                                        Save
                                    </div>
                                    <div className={`${style['cancel-btn']}`}
                                        onClick={() => { handleClickCancelButton('gender') }}>
                                        Cancel
                                    </div>
                                </Fragment>
                                :
                                <img width={16} height={16}
                                    src="./image/icon/edit.png"
                                    alt="edit"
                                    onClick={() => { handleClickEditButton('gender') }}
                                />
                        }
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
                        {
                            isEditMode.birthday ?
                                <input
                                    className={`${style['birthday-picker']}`}
                                    type="date"
                                    id="birthday"
                                    min="1905-01-01"
                                    max={maxDate}
                                    name="birthday"
                                    value={formatDate(new Date(basicInfoValue.birthday))}
                                    onChange={handleChangeValue}
                                />
                                :
                                <div className={`${style['info-value']}`}>
                                    {new Date(basicInfoValue.birthday).toLocaleDateString()}
                                </div>
                        }

                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {
                            isEditMode.birthday ?
                                <Fragment>
                                    <div className={`${style['save-btn']}`}
                                        onClick={() => { handleClickSaveButton('birthday') }}>
                                        Save
                                    </div>
                                    <div className={`${style['cancel-btn']}`}
                                        onClick={() => { handleClickCancelButton('birthday') }}>
                                        Cancel
                                    </div>
                                </Fragment>
                                :
                                <img width={16} height={16}
                                    src="./image/icon/edit.png"
                                    alt="edit"
                                    onClick={() => { handleClickEditButton('birthday') }}
                                />
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}