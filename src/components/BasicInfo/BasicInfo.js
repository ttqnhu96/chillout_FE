import { Tooltip } from "antd";
import { Fragment, memo, useEffect, useState } from "react";
import { LABELS } from "../../util/constants/commonConstants";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import style from './BasicInfo.module.css';

function BasicInfo(props) {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //Props
    const { profileOwnerId, gender, birthday, handleUpdateProfile } = props;

    //Local state
    const [maxDate, setMaxDate] = useState('2122-01-01');
    const [basicInfoValue, setBasicInfoValue] = useState({
        gender: '',
        birthday: ''
    });
    const [isEditMode, setIsEditMode] = useState({
        gender: false,
        birthday: false
    });
    const [errors, setErrors] = useState({
        gender: '',
        birthday: ''
    });
    const [isSaveBtnEnabled, setIsSaveBtnEnabled] = useState({
        gender: false,
        birthday: false
    });


    //Use effect
    useEffect(() => {
        setBasicInfoValue(prevState => ({
            ...prevState,
            gender: gender
        }));
    }, [gender])

    useEffect(() => {
        setBasicInfoValue(prevState => ({
            ...prevState,
            birthday: birthday
        }));
    }, [birthday])

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

        //Validate empty
        if (basicInfoValue[fieldName] === '') {
            setErrors(prevState => ({
                ...prevState,
                [fieldName]: LABELS[fieldName] + ' is required!'
            }));
            isValid = false;
        }

        //Validate date of birth
        if (fieldName === "birthday") {
            const minDate = new Date('1905/01/01');
            const maxDate = new Date();
            const dateOfBirth = new Date(basicInfoValue[fieldName]);
            if (dateOfBirth < minDate || dateOfBirth > maxDate) {
                setErrors(prevState => ({
                    ...prevState,
                    birthday: 'Invalid date'
                }));

                isValid = false;
            }
        }

        if (isValid) {
            handleUpdateProfile(fieldName, basicInfoValue[fieldName]);
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
        setBasicInfoValue({
            gender: gender,
            birthday: birthday
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
                Basic Info
            </div>
            <div className={`${style['wrapper']}`}>

                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="/image/icon/gender.png"
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
                        {renderEditButton('gender')}
                    </div>
                </div>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="/image/icon/birthday.png"
                            alt="birthday"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Date of Birth
                        </div>
                        {
                            isEditMode.birthday ?
                                <Tooltip
                                    color="rgb(190, 75, 73)"
                                    title={errors.birthday}
                                    placement="bottom">
                                    <input
                                        style={errors.birthday !== "" ? { border: '0.1rem solid rgb(190, 75, 73)' } : {}}
                                        className={`${style['birthday-picker']}`}
                                        type="date"
                                        id="birthday"
                                        min="1905-01-01"
                                        max={maxDate}
                                        name="birthday"
                                        onKeyDown={(e) => e.preventDefault()}
                                        value={basicInfoValue.birthday && formatDate(new Date(basicInfoValue.birthday))}
                                        onChange={handleChangeValue}
                                    />
                                </Tooltip>
                                :
                                <div className={`${style['info-value']}`}>
                                    {new Date(basicInfoValue.birthday).toLocaleDateString()}
                                </div>
                        }

                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                    {renderEditButton('birthday')}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(BasicInfo)