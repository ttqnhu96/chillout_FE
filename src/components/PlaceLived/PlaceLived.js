/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import style from './PlaceLived.module.css';

export default function PlaceLived(props) {
    //Get state from reducer
    const { cityList } = useSelector(state => state.CityReducer);
    //Get props
    const { cityId, cityName, handleUpdateProfile } = props;

    //Local state
    const [cityValue, setCityValue] = useState({
        id: cityId,
        name: cityName
    });
    const [isEditMode, setIsEditMode] = useState(false);

    //Handle events
    const handleChangeValue = (event) => {
        const { value } = event.target;
        const name = cityList.find(item => item.id === Number(value)).name;
        setCityValue({
            ...cityValue,
            id: value,
            name: name
        });
    }

    const handleClickEditButton = () => {
        setIsEditMode(true);
        //Set default value
        if(cityValue.id === 0) {
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
    }

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
                        {
                            isEditMode ?
                                <Fragment>
                                    <div className={`${style['save-btn']}`}
                                        onClick={handleClickSaveButton}>
                                        Save
                                    </div>
                                    <div className={`${style['cancel-btn']}`}
                                        onClick={handleClickCancelButton}>
                                        Cancel
                                    </div>
                                </Fragment>
                                :
                                <img width={16} height={16}
                                    src="./image/icon/edit.png"
                                    alt="edit"
                                    onClick={handleClickEditButton}
                                />
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}