import { Fragment } from "react";
import { useSelector } from "react-redux";
import style from './WorkplaceInfo.module.css';

export default function WorkplaceInfo() {
    //Get state from reducer
    const workplaceName = useSelector(state => state.ProfileReducer).userProfile.workplaceName;

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
                            {workplaceName}
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