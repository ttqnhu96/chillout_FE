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
    //Get state from reducer
    const { userProfile } = useSelector(state => state.ProfileReducer); //In case view logged in user profile
    const { friendProfile } = useSelector(state => state.ProfileReducer); //In case view friend profile
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);

    const [isUpdate, setIsUpdate] = useState(false);
    const [fieldUpdate, setFieldUpdate] = useState("");
    const [userProfileEdit, setUserProfileEdit] = useState(userProfile);

    const handleUpdateProfile = useCallback((fieldName, valueUpdate) => {
        setUserProfileEdit(prevState => ({
            ...prevState,
            [fieldName]: valueUpdate
        }));
        setIsUpdate(true);
        setFieldUpdate(fieldName);
    }, [])

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
                    bio={isViewFriendProfile ? friendProfile.bio : userProfile.bio}
                    handleUpdateProfile={handleUpdateProfile} />
                <Name
                    firstName={isViewFriendProfile ? friendProfile.firstName : userProfile.firstName}
                    lastName={isViewFriendProfile ? friendProfile.lastName : userProfile.lastName}
                    handleUpdateProfile={handleUpdateProfile} />
                <BasicInfo
                    gender={isViewFriendProfile ? friendProfile.gender : userProfile.gender}
                    birthday={isViewFriendProfile ? friendProfile.birthday : userProfile.birthday}
                    handleUpdateProfile={handleUpdateProfile} />
                <ContactInfo
                    phone={isViewFriendProfile ? friendProfile.phone : userProfile.phone}
                    email={isViewFriendProfile ? friendProfile.email : userProfile.email}
                    handleUpdateProfile={handleUpdateProfile} />
                <PlaceLived
                    cityId={isViewFriendProfile ? friendProfile.cityId : userProfile.cityId}
                    cityName={isViewFriendProfile ? friendProfile.cityName : userProfile.cityName}
                    handleUpdateProfile={handleUpdateProfile} />
                <WorkplaceInfo
                    workplaceId={isViewFriendProfile ? friendProfile.workplaceId : userProfile.workplaceId}
                    workplaceName={isViewFriendProfile ? friendProfile.workplaceName : userProfile.workplaceName}
                    handleUpdateProfile={handleUpdateProfile} />
                <EducationInfo
                    schoolId={isViewFriendProfile ? friendProfile.schoolId : userProfile.schoolId}
                    schoolName={isViewFriendProfile ? friendProfile.schoolName : userProfile.schoolName}
                    collegeId={isViewFriendProfile ? friendProfile.collegeId : userProfile.collegeId}
                    collegeName={isViewFriendProfile ? friendProfile.collegeName : userProfile.collegeName}
                    handleUpdateProfile={handleUpdateProfile} />
            </div>
        </Fragment>
    )
}