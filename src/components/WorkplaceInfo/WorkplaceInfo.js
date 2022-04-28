import { Fragment, memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { USER_LOGIN } from "../../util/constants/systemSettings";
import style from './WorkplaceInfo.module.css';

function WorkplaceInfo(props) {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;

    //Props
    const { profileOwnerId, workplaceId, workplaceName, handleUpdateProfile } = props;

    //State from reducer
    const { workplaceList } = useSelector(state => state.WorkplaceReducer);

    //Local state
    const [workplaceValue, setWorkplaceValue] = useState({
        id: 0,
        name: ''
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [isSaveBtnEnabled, setIsSaveBtnEnabled] = useState(false);

    //Use effect
    useEffect(() => {
        setWorkplaceValue({
            id: workplaceId,
            name: workplaceName
        })
    }, [workplaceId, workplaceName])

    //Handle events
    const handleChangeValue = (event) => {
        const { value } = event.target;
        const name = workplaceList.find(item => item.id === Number(value)).name;
        setWorkplaceValue({
            ...workplaceValue,
            id: value,
            name: name
        });
        setIsSaveBtnEnabled(true);
    }

    const handleClickEditButton = () => {
        setIsEditMode(true);
        //Set default value
        if (workplaceValue.id === 0) {
            setWorkplaceValue({
                ...workplaceValue,
                id: workplaceList[0].id,
                name: workplaceList[0].name
            });
        };
    }

    const handleClickSaveButton = () => {
        handleUpdateProfile('workplaceId', Number(workplaceValue.id));
        setIsEditMode(false);
    }

    const handleClickCancelButton = () => {
        setIsEditMode(false);
        setWorkplaceValue({
            id: workplaceId,
            name: workplaceName
        });
        setIsSaveBtnEnabled(false);
    }


    //Functions
    const renderWorkplaceList = () => {
        return (
            <select
                className={`${style['select-box']}`}
                value={workplaceValue.id}
                onChange={handleChangeValue}>
                {
                    workplaceList.map((workplace, index) => {
                        return <option key={index} value={workplace.id}>{workplace.name}</option>
                    })
                }
            </select>
        )
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
                Workplace
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    <div className={`${style['icon-container']}`} >
                        <img width={30} height={30}
                            src="/image/icon/work-info.png"
                            alt="work_info"
                        />
                    </div>
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Current Workplace
                        </div>
                        {
                            isEditMode ?
                                renderWorkplaceList()
                                :
                                <div className={`${style['info-value']}`}>
                                    {workplaceValue.name}
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

export default memo(WorkplaceInfo)