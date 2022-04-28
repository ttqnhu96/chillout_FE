/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useCallback, useEffect, useState } from "react";
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
    //State from reducer
    const { userProfile } = useSelector(state => state.ProfileReducer);

    //Local state
    const [isUpdate, setIsUpdate] = useState(false);
    const [fieldUpdate, setFieldUpdate] = useState("");
    const [userProfileEdit, setUserProfileEdit] = useState({});

    //Handle events
    const handleUpdateProfile = useCallback((fieldName, valueUpdate) => {
        setUserProfileEdit(prevState => ({
            ...prevState,
            [fieldName]: valueUpdate
        }));
        setIsUpdate(true);
        setFieldUpdate(fieldName);
    }, [])


    //Use effect
    useEffect(() => {
        setUserProfileEdit(userProfile);
    }, [userProfile])

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
                    profileOwnerId={userProfile.id}
                    bio={userProfile.bio}
                    handleUpdateProfile={handleUpdateProfile} />
                <Name
                    profileOwnerId={userProfile.id}
                    firstName={userProfile.firstName}
                    lastName={userProfile.lastName}
                    handleUpdateProfile={handleUpdateProfile} />
                <BasicInfo
                    profileOwnerId={userProfile.id}
                    gender={userProfile.gender}
                    birthday={userProfile.birthday}
                    handleUpdateProfile={handleUpdateProfile} />
                <ContactInfo
                    profileOwnerId={userProfile.id}
                    phone={userProfile.phone}
                    email={userProfile.email}
                    handleUpdateProfile={handleUpdateProfile} />
                <PlaceLived
                    profileOwnerId={userProfile.id}
                    cityId={userProfile.cityId}
                    cityName={userProfile.cityName}
                    handleUpdateProfile={handleUpdateProfile} />
                <WorkplaceInfo
                    profileOwnerId={userProfile.id}
                    workplaceId={userProfile.workplaceId}
                    workplaceName={userProfile.workplaceName}
                    handleUpdateProfile={handleUpdateProfile} />
                <EducationInfo
                    profileOwnerId={userProfile.id}
                    schoolId={userProfile.schoolId}
                    schoolName={userProfile.schoolName}
                    collegeId={userProfile.collegeId}
                    collegeName={userProfile.collegeName}
                    handleUpdateProfile={handleUpdateProfile} />
            </div>
        </Fragment>
    )
}