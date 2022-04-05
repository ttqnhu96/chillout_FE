import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import style from './WorkplaceInfo.module.css';

export default function WorkplaceInfo(props) {
    //Get state from reducer
    const { workplaceList } = useSelector(state => state.WorkplaceReducer);
    //Get props
    const { workplaceId, workplaceName, handleUpdateProfile } = props;

    //Local state
    const [workplaceValue, setWorkplaceValue] = useState({
        id: workplaceId,
        name: workplaceName
    });
    const [isEditMode, setIsEditMode] = useState(false);

    //Handle events
    const handleChangeValue = (event) => {
        const { value } = event.target;
        const name = workplaceList.find(item => item.id === Number(value)).name;
        setWorkplaceValue({
            ...workplaceValue,
            id: value,
            name: name
        });
    }

    const handleClickEditButton = () => {
        setIsEditMode(true);
        //Set default value
        if(workplaceValue.id === 0) {
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
    }

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

    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Workplace
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