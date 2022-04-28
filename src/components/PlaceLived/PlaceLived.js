/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import style from './PlaceLived.module.css';

function PlaceLived(props) {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //Props
    const { profileOwnerId, cityId, cityName, handleUpdateProfile } = props;

    //State from reducer
    const { cityList } = useSelector(state => state.CityReducer);

    //Local state
    const [cityValue, setCityValue] = useState({
        id: 0,
        name: ''
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [isSaveBtnEnabled, setIsSaveBtnEnabled] = useState(false);

    //Use effect
    useEffect(() => {
        setCityValue({
            id: cityId,
            name: cityName
        })
    }, [cityId, cityName])

    //Handle events
    const handleChangeValue = (event) => {
        const { value } = event.target;
        const name = cityList.find(item => item.id === Number(value)).name;
        setCityValue({
            ...cityValue,
            id: value,
            name: name
        });
        setIsSaveBtnEnabled(true);
    }

    const handleClickEditButton = () => {
        setIsEditMode(true);
        //Set default value
        if (cityValue.id === 0) {
            setCityValue({
                ...cityValue,
                id: cityList[0].id,
                name: cityList[0].name
            });
        };
    }

    const handleClickSaveButton = () => {
        handleUpdateProfile('cityId', Number(cityValue.id));
        setIsEditMode(false);
    }

    const handleClickCancelButton = () => {
        setIsEditMode(false);
        setCityValue({
            id: cityId,
            name: cityName
        });
        setIsSaveBtnEnabled(false);
    }

    //Functions
    const renderCityList = () => {
        return (
            <select
                className={`${style['select-box']}`}
                value={cityValue.id}
                onChange={handleChangeValue}>
                {
                    cityList.map((city, index) => {
                        return <option key={index} value={city.id}>{city.name}</option>
                    })
                }
            </select>
        )
    }

    //Functions
    const renderEditButton = () => {
        //In case view friend profile, edit button is not displayed
        if (profileOwnerId === loginUserId) {
            if (isEditMode) {
                return (
                    <Fragment>
                        <div className={isSaveBtnEnabled ? `${style['save-btn']}` : `${style['save-btn-disabled']}`}
                            onClick={handleClickSaveButton}>
                            Save
                        </div>
                        <div className={`${style['cancel-btn']}`}
                            onClick={handleClickCancelButton}>
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
                        onClick={handleClickEditButton}
                    />
                )
            }
        }
    }

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Place Lived
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="/image/icon/place-lived.png"
                            alt="place_lived"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Current City
                        </div>
                        {
                            isEditMode ?
                                renderCityList()
                                :
                                <div className={`${style['info-value']}`}>
                                    {cityValue.name}
                                </div>
                        }

                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        {renderEditButton()}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(PlaceLived)