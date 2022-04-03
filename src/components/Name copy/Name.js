import { Fragment } from "react";
import style from './Name.module.css';

export default function Name() {
    return (
        <Fragment>
            <div className={`${style['info-title']}`}>
                Name
            </div>
            <div style={{ display: "flex" }}>
                <div className={`${style['item-container']}`}>
                    {/* <div className={`${style['icon-container']}`} >
                            <img width={30} height={30}
                                src="./image/icon/gender.png"
                                alt="gender"
                            />
                        </div> */}
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            First Name
                        </div>
                        <div className={`${style['info-value']}`}>
                            Như
                        </div>
                    </div>
                    <div className={`${style['edit-btn-container']}`} >
                        <img width={16} height={16}
                            src="./image/icon/edit.png"
                            alt="edit"
                        />
                    </div>
                </div>
                <div className={`${style['item-container']}`}>
                    {/* <div className={`${style['icon-container']}`} >
                            <img width={30} height={30}
                                src="./image/icon/gender.png"
                                alt="gender"
                            />
                        </div> */}
                    <div className={`${style['info-container']}`}>
                        <div className={`${style['info-label']}`}>
                            Last Name
                        </div>
                        <div className={`${style['info-value']}`}>
                            Trịnh
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