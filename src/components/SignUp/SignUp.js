import {Tooltip } from 'antd';
import style from './SignUp.module.css';

export default function SignUp() {
    return (
        // <div className="modal fade" style={{ backdropFilter: 'blur(15px)' }} id="signUpModal" tabIndex={-1} role="dialog" aria-labelledby="signUpModal" aria-hidden="true">
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title">Sign Up</h5>
        //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">×</span>
        //                 </button>
        //             </div>
        //             <div className="modal-body">
        //                 Body
        //             </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className={`${style['signup-modal']}`}>
                <div className={`${style['signup-modal-dialog']}`}>
                    {/* Header */}
                    <div className={`${style['signup-modal-dialog-header']}`}>
                        <div className={`${style['signup-modal-dialog-title']}`}>
                            Sign Up
                        </div>
                        <div className={`${style['signup-modal-dialog-close-btn']}`}>
                            x
                        </div>
                    </div>
                    <hr />
                    {/* Body */}
                    <div className={`${style['signup-modal-dialog-body']}`}>
                        <div className={`${style['signup-name-container']}`}>
                            <div className={`${style['signup-first-name']}`}>
                                <Tooltip title="What's your name?" placement="left">
                                    <input
                                        className={`${style['signup-name-input']}`}
                                        placeholder="First name"
                                        onChange={() => { }}
                                    />
                                </Tooltip>
                            </div>
                            <div className={`${style['signup-last-name']}`}>
                                <input
                                    className={`${style['signup-name-input']}`}
                                    placeholder="Last name"
                                    onChange={() => { }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}