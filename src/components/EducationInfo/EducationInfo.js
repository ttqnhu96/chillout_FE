import { Fragment } from "react";
import { useSelector } from "react-redux";
import style from './EducationInfo.module.css';

export default function EducationInfo() {
    //Get state from reducer
    const schoolName = useSelector(state => state.ProfileReducer).userProfile.schoolName;
    const collegeName = useSelector(state => state.ProfileReducer).userProfile.collegeName;

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Education
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="./image/icon/school.png"
                            alt="school"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            High School
                        </div>
                        <div className={`${style['info-value']}`}>
                            {schoolName}
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
                            src="./image/icon/college.png"
                            alt="college"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            College
                        </div>
                        <div className={`${style['info-value']}`}>
                            {collegeName}
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