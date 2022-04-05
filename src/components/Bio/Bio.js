import { Fragment, useState } from "react";
import style from './Bio.module.css';

export default function Bio(props) {
    const { bio, handleUpdateProfile } = props;
    
    const [bioValue, setBioValue] = useState(bio);
    const [isEditMode, setIsEditMode] = useState(false);

    //Handle events
    const handleChangeValue = (event) => {
        setBioValue(event.target.value);
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