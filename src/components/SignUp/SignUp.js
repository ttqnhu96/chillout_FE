import { Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSignUpModalAction } from '../../redux/actions/SignUpAction';
import style from './SignUp.module.css';

export default function SignUp() {
    //Gender gender list
    const genders = [
        {
            id: 1,
            name: 'Female',
            marginLeft: '0',
            marginRight: '0'
        },
        {
            id: 2,
            name: 'Male',
            marginLeft: '1rem',
            marginRight: '1rem'
        },
        {
            id: 3,
            name: 'Other',
            marginLeft: '0',
            marginRight: '0'
        }
    ]

    const renderGenderList = () => {
        return (
            <div className={`${style['signup-gender-selection-container']}`}>
                {genders.map((gender, index) => (
                    <div key={index}
                        style={{ marginLeft: gender.marginLeft, marginRight: gender.marginRight }}
                        className={`${style['signup-gender-selection-item']}`}>
                        <div className={`${style['signup-gender-selection-label']}`}>
                            {gender.name}
                        </div>
                        <input
                            type="radio"
                            checked={checkedRadioId === gender.id}
                            value={gender.name}
                            onChange={() => { setCheckedRadioId(gender.id) }}
                        />
                    </div>
                )
                )}
            </div>
        )
    }

    const dispatch = useDispatch();
    //State
    const [maxDate, setMaxDate] = useState('2122-01-01');
    const [checkedRadioId, setCheckedRadioId] = useState(0);

    //Get state from reducers
    const { isSignUpModalVisible } = useSelector(state => state.SignUpReducer);

    useEffect(() => {
        //Set max date for datetime picker
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        const yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;

        setMaxDate(today);
    }, [])

    return (
        <div> {isSignUpModalVisible && (
            <div className={`${style['signup-modal']}`}>
                <div className={`${style['signup-modal-dialog']}`}>
                    {/* Header */}
                    <div className={`${style['signup-modal-dialog-header']}`}>
                        <div className={`${style['signup-modal-dialog-title']}`}>
                            Sign Up
                        </div>
                        <div
                            className={`${style['signup-modal-dialog-close-btn']}`}
                            onClick={() => { dispatch(hideSignUpModalAction()) }}>
                            ✕
                        </div>
                    </div>
                    <hr />

                    {/* Body */}
                    <div className={`${style['signup-modal-dialog-body']}`}>
                        <div className={`${style['signup-name-container']}`}>
                            <div className={`${style['signup-first-name']}`}>
                                <Tooltip
                                    visible={false}
                                    color="rgb(190, 75, 73)"
                                    title="What's your name?"
                                    placement="left">
                                    <input
                                        className={`${style['signup-input']}`}
                                        placeholder="First name"
                                        maxlength="255"
                                        onChange={() => { }}
                                    />
                                </Tooltip>
                            </div>
                            <div className={`${style['signup-last-name']}`}>
                                <Tooltip
                                    color="rgb(190, 75, 73)"
                                    title="What's your name?"
                                    placement="right">
                                    <input
                                        className={`${style['signup-input']}`}
                                        placeholder="Last name"
                                        maxlength="255"
                                        onChange={() => { }}
                                    />
                                </Tooltip>
                            </div>
                        </div>
                        <div className={`${style['signup-username-container']}`}>
                            <Tooltip
                                color="rgb(190, 75, 73)"
                                title="Please enter username."
                                placement="left">
                                <input
                                    className={`${style['signup-input']}`}
                                    placeholder="Username"
                                    maxlength="30"
                                    onChange={() => { }}
                                />
                            </Tooltip>
                        </div>
                        <div className={`${style['signup-password-container']}`}>
                            <Tooltip color="rgb(190, 75, 73)"
                                title="Please enter password."
                                placement="left">
                                <input
                                    type="password"
                                    className={`${style['signup-input']}`}
                                    placeholder="Password"
                                    onChange={() => { }}
                                />
                            </Tooltip>
                        </div>
                        <div className={`${style['signup-birthday-container']}`}>
                            <label className={`${style['signup-birthday-label']}`}>Date of birth</label>
                            <input
                                className={`${style['signup-birthday-picker']}`}
                                type="date"
                                id="birthday"
                                name="birthday"
                                min="1905-01-01"
                                max={maxDate}
                            />
                        </div>
                        <div className={`${style['signup-gender-container']}`}>
                            <label className={`${style['signup-gender-label']}`}>Gender</label>
                            <div className={`${style['signup-gender-selection-container']}`}>
                                {renderGenderList()}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={`${style['signup-modal-dialog-footer']}`}>
                        <div
                            className={`${style['signup-modal-dialog-signup-btn']}`}
                            onClick={() => { }}
                        >
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}