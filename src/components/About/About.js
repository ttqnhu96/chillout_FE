import { Fragment } from "react";
import style from './About.module.css';

export default function About() {
    const renderBio = () => {
        return (
            <Fragment>
                <div className={`${style['info-title']}`}>
                    Bio
                </div>
                <div style={{ display: "flex" }}>
                    <div className={`${style['item-container']}`}>
                        <div className={`${style['info-container']}`} style={{ width: '96%' }}>
                            <div className={`${style['info-value']}`} >
                                This is bio
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

    const renderName = () => {
        return (
            <Fragment>
                <div className={`${style['info-title']}`}>
                    Name
                </div>
                <div style={{ display: "flex" }}>
                    <div className={`${style['item-container']}`}>
                        {/* <div className={`${style['icon-container']}`} >
                            <img width={30} height={30}
                                src="./image/icon/gender.png"
                                alt="gender"
                            />
                        </div> */}
                        <div className={`${style['info-container']}`}>
                            <div className={`${style['info-label']}`}>
                                First Name
                            </div>
                            <div className={`${style['info-value']}`}>
                                Như
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
                        {/* <div className={`${style['icon-container']}`} >
                            <img width={30} height={30}
                                src="./image/icon/gender.png"
                                alt="gender"
                            />
                        </div> */}
                        <div className={`${style['info-container']}`}>
                            <div className={`${style['info-label']}`}>
                                Last Name
                            </div>
                            <div className={`${style['info-value']}`}>
                                Trịnh
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

    const renderBasicInfo = () => {
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
                            <div className={`${style['info-value']}`}>
                                Female
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
                                src="./image/icon/birthday.png"
                                alt="birthday"
                            />
                        </div>
                        <div className={`${style['info-container']}`}>
                            <div className={`${style['info-label']}`}>
                                Date of Birth
                            </div>
                            <div className={`${style['info-value']}`}>
                                December 29, 1996
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

    const renderContactInfo = () => {
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
                                0123456789
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
                                qnhu@gmail.com
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

    const renderPlaceLived = () => {
        return (
            <Fragment>
                <div className={`${style['info-title']}`}>
                    Place Lived
                </div>
                <div style={{ display: "flex" }}>
                    <div className={`${style['item-container']}`}>
                        <div className={`${style['icon-container']}`} >
                            <img width={30} height={30}
                                src="./image/icon/place-lived.png"
                                alt="place_lived"
                            />
                        </div>
                        <div className={`${style['info-container']}`}>
                            <div className={`${style['info-label']}`}>
                                Current City
                            </div>
                            <div className={`${style['info-value']}`}>
                                Cần Thơ
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

    const renderWork = () => {
        return (
            <Fragment>
                <div className={`${style['info-title']}`}>
                    Work
                </div>
                <div style={{ display: "flex" }}>
                    <div className={`${style['item-container']}`}>
                        <div className={`${style['icon-container']}`} >
                            <img width={30} height={30}
                                src="./image/icon/work-info.png"
                                alt="work_info"
                            />
                        </div>
                        <div className={`${style['info-container']}`}>
                            <div className={`${style['info-label']}`}>
                                Current Workplace
                            </div>
                            <div className={`${style['info-value']}`}>
                                FPT Software
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

    const renderEducationInfo = () => {
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
                                THPT Cầu Kè
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
                                ĐH Cần Thơ
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

    return (
        <Fragment>
            <div className={`${style['title']}`}>About</div>
            <div className={`${style['container']}`}>
                {renderBio()}
                {renderName()}
                {renderBasicInfo()}
                {renderContactInfo()}
                {renderPlaceLived()}
                {renderWork()}
                {renderEducationInfo()}
            </div>
        </Fragment>
    )
}