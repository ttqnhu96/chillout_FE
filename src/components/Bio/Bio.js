import { Fragment, memo, useEffect, useState } from "react";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import style from './Bio.module.css';

function Bio(props) {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //Props
    const { profileOwnerId, bio, handleUpdateProfile } = props;

    //Local state
    const [bioValue, setBioValue] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [isSaveBtnEnabled, setIsSaveBtnEnabled] = useState(false);

    //Use effect
    useEffect(() => {
        setBioValue(bio);
    }, [bio])

    //Handle events
    const handleChangeValue = (event) => {
        setBioValue(event.target.value);
        setIsSaveBtnEnabled(true);
    }

    const handleClickEditButton = () => {
        setIsEditMode(true);
    }

    const handleClickSaveButton = () => {
        handleUpdateProfile('bio', bioValue);
        setIsEditMode(false);
    }

    const handleClickCancelButton = () => {
        setIsEditMode(false);
        setBioValue(bio);
        setIsSaveBtnEnabled(false);
    }

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
                Bio
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['info-container']}`} style={{ width: '96%' }}>
                        {
                            isEditMode ?
                                <input
                                    autoFocus
                                    className={`${style['info-input']}`}
                                    value={bioValue}
                                    onChange={handleChangeValue}
                                />
                                :
                                <div className={`${style['info-value']}`}>
                                    {bioValue}
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

export default memo(Bio)