import { Fragment, memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import style from './EducationInfo.module.css';

function EducationInfo(props) {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //Props
    const { profileOwnerId, schoolId, schoolName, collegeId, collegeName, handleUpdateProfile } = props;

    //State from reducer
    const { schoolList } = useSelector(state => state.SchoolReducer);
    const { collegeList } = useSelector(state => state.CollegeReducer);

    //Local state
    const [schoolValue, setSchoolValue] = useState({
        id: schoolId,
        name: schoolName
    });
    const [collegeValue, setCollegeValue] = useState({
        id: collegeId,
        name: collegeName
    });
    const [isEditSchoolMode, setIsEditSchoolMode] = useState(false);
    const [isEditCollegeMode, setIsEditCollegeMode] = useState(false);
    const [isSaveBtnEnabled, setIsSaveBtnEnabled] = useState({
        school: false,
        college: false
    });


    //Use effect
    useEffect(() => {
        setSchoolValue({
            id: schoolId,
            name: schoolName
        })
    }, [schoolId, schoolName])

    useEffect(() => {
        setCollegeValue({
            id: collegeId,
            name: collegeName
        })
    }, [collegeId, collegeName])


    //Handle events
    const handleChangeSchoolValue = (event) => {
        const { value } = event.target;
        const name = schoolList.find(item => item.id === Number(value)).name;
        setSchoolValue({
            ...schoolValue,
            id: value,
            name: name
        });
        setIsSaveBtnEnabled(prevState => ({
            ...prevState,
            school: true
        }));
    }

    const handleChangeCollegeValue = (event) => {
        const { value } = event.target;
        const name = collegeList.find(item => item.id === Number(value)).name;
        setCollegeValue({
            ...collegeValue,
            id: value,
            name: name
        });
        setIsSaveBtnEnabled(prevState => ({
            ...prevState,
            college: true
        }));
    }

    const handleClickEditSchoolButton = () => {
        setIsEditSchoolMode(true);
        //Set default value
        if (schoolValue.id === 0) {
            setSchoolValue({
                ...schoolValue,
                id: schoolList[0].id,
                name: schoolList[0].name
            });
        };
    }

    const handleClickEditCollegeButton = () => {
        setIsEditCollegeMode(true);
        //Set default value
        if (collegeValue.id === 0) {
            setCollegeValue({
                ...collegeValue,
                id: collegeList[0].id,
                name: collegeList[0].name
            });
        };
    }

    const handleClickSaveSchoolButton = () => {
        handleUpdateProfile('schoolId', Number(schoolValue.id));
        setIsEditSchoolMode(false);
    }
    const handleClickSaveCollegeButton = () => {
        handleUpdateProfile('collegeId', Number(collegeValue.id));
        setIsEditCollegeMode(false);
    }

    const handleClickCancelSchoolButton = () => {
        setIsEditSchoolMode(false);
        setSchoolValue({
            id: schoolId,
            name: schoolName
        });
        setIsSaveBtnEnabled(prevState => ({
            ...prevState,
            school: false
        }));
    }
    const handleClickCancelCollegeButton = () => {
        setIsEditCollegeMode(false);
        setCollegeValue({
            id: collegeId,
            name: collegeName
        });
        setIsSaveBtnEnabled(prevState => ({
            ...prevState,
            college: false
        }));
    }

    //Functions
    const renderSchoolList = () => {
        return (
            <select
                className={`${style['select-box']}`}
                value={schoolValue.id}
                onChange={handleChangeSchoolValue}>
                {
                    schoolList.map((school, index) => {
                        return <option key={index} value={school.id}>{school.name}</option>
                    })
                }
            </select>
        )
    }
    const renderCollegeList = () => {
        return (
            <select
                className={`${style['select-box']}`}
                value={collegeValue.id}
                onChange={handleChangeCollegeValue}>
                {
                    collegeList.map((college, index) => {
                        return <option key={index} value={college.id}>{college.name}</option>
                    })
                }
            </select>
        )
    }

    const renderEditSchoolButton = () => {
        //In case view friend profile, edit button is not displayed
        if (profileOwnerId === loginUserId) {
            if (isEditSchoolMode) {
                return (
                    <Fragment>
                        <div className={isSaveBtnEnabled.school ? `${style['save-btn']}` : `${style['save-btn-disabled']}`}
                            onClick={handleClickSaveSchoolButton}>
                            Save
                        </div>
                        <div className={`${style['cancel-btn']}`}
                            onClick={handleClickCancelSchoolButton}>
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
                        onClick={handleClickEditSchoolButton}
                    />
                )
            }
        }
    }

    const renderEditCollegeButton = () => {
        //In case view friend profile, edit button is not displayed
        if (profileOwnerId === loginUserId) {
            if (isEditCollegeMode) {
                return (
                    <Fragment>
                        <div className={isSaveBtnEnabled.college ? `${style['save-btn']}` : `${style['save-btn-disabled']}`}
                            onClick={handleClickSaveCollegeButton}>
                            Save
                        </div>
                        <div className={`${style['cancel-btn']}`}
                            onClick={handleClickCancelCollegeButton}>
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
                        onClick={handleClickEditCollegeButton}
                    />
                )
            }
        }
    }

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Education
            </div>
            <div className={`${style['wrapper']}`}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="/image/icon/school.png"
                            alt="school"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            High School
                        </div>
                        {
                            isEditSchoolMode ?
                                renderSchoolList()
                                :
                                <div className={`${style['info-value']}`}>
                                    {schoolValue.name}
                                </div>
                        }
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {renderEditSchoolButton()}
                    </div>
                </div>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="/image/icon/college.png"
                            alt="college"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            College
                        </div>
                        {
                            isEditCollegeMode ?
                                renderCollegeList()
                                :
                                <div className={`${style['info-value']}`}>
                                    {collegeValue.name}
                                </div>
                        }

                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {renderEditCollegeButton()}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(EducationInfo)