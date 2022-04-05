/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityListSagaAction } from "../../redux/actions/CityActions";
import { getWorkplaceListSagaAction } from "../../redux/actions/WorkplaceActions";
import { getSchoolListSagaAction } from "../../redux/actions/SchoolActions";
import { getCollegeListSagaAction } from "../../redux/actions/CollegeActions";
import { updateProfileSagaAction } from "../../redux/actions/ProfileActions";
import BasicInfo from "../BasicInfo/BasicInfo";
import Bio from "../Bio/Bio";
import ContactInfo from "../ContactInfo/ContactInfo";
import EducationInfo from "../EducationInfo/EducationInfo";
import Name from "../Name/Name";
import PlaceLived from "../PlaceLived/PlaceLived";
import WorkplaceInfo from "../WorkplaceInfo/WorkplaceInfo";
import style from './About.module.css';

export default function About() {
    const dispatch = useDispatch();
    //Get state from reducer
    const { userProfile } = useSelector(state => state.ProfileReducer);
    const [isUpdate, setIsUpdate] = useState(false);
    const [fieldUpdate, setFieldUpdate] = useState("");
    const [userProfileEdit, setUserProfileEdit] = useState(userProfile);

    const handleUpdateProfile = (fieldName, valueUpdate) => {
        setUserProfileEdit(prevState => ({
            ...prevState,
            [fieldName]: valueUpdate
        }));
        setIsUpdate(true);
        setFieldUpdate(fieldName);
    }

    useEffect(() => {
        dispatch(getCityListSagaAction());
        dispatch(getWorkplaceListSagaAction());
        dispatch(getSchoolListSagaAction());
        dispatch(getCollegeListSagaAction());
    }, [])

    useEffect(() => {
        if (isUpdate) {
            dispatch(updateProfileSagaAction(userProfileEdit.id, userProfileEdit, fieldUpdate));
            setIsUpdate(false);
            setFieldUpdate("");
        }
    }, [isUpdate])

    return (
        <Fragment>
            <div className={`${style['title']}`}>About</div>
            <div className={`${style['container']}`}>
                <Bio
                    bio={userProfile.bio}
                    handleUpdateProfile={handleUpdateProfile} />
                <Name
                    firstName={userProfile.firstName}
                    lastName={userProfile.lastName}
                    handleUpdateProfile={handleUpdateProfile} />
                <BasicInfo
                    gender={userProfile.gender}
                    birthday={userProfile.birthday}
                    handleUpdateProfile={handleUpdateProfile} />
                <ContactInfo
                    phone={userProfile.phone}
                    email={userProfile.email}
                    handleUpdateProfile={handleUpdateProfile} />
                <PlaceLived
                    cityId={userProfile.cityId}
                    cityName={userProfile.cityName}
                    handleUpdateProfile={handleUpdateProfile} />
                <WorkplaceInfo
                    workplaceId={userProfile.workplaceId}
                    workplaceName={userProfile.workplaceName}
                    handleUpdateProfile={handleUpdateProfile} />
                <EducationInfo
                    schoolId={userProfile.schoolId}
                    schoolName={userProfile.schoolName}
                    collegeId={userProfile.collegeId}
                    collegeName={userProfile.collegeName}
                    handleUpdateProfile={handleUpdateProfile} />
            </div>
        </Fragment>
    )
}