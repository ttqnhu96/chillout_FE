import { Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../../redux/actions/AuthenticationActions';
import { hideSignUpModalAction } from '../../redux/actions/SignUpAction';
import { LABELS } from '../../util/constants/commonConstants';
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
                            onChange={() => { handleSelectGender(gender.id, gender.name) }}
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
    const [checkedRadioId, setCheckedRadioId] = useState(3);
    const [signUpValues, setSignUpValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        birthday: '',
        gender: 'Other'
    });

    const [signUpErrors, setSignUpErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        birthday: ''
    })

    //Handle events
    const handleChangeValue = (event) => {
        let { name, value } = event.target;

        setSignUpValues(prevState => ({
            ...prevState,
            [name]: value
        }));

        setSignUpErrors(prevState => ({
            ...prevState,
            [name]: ''
        }));
    }

    const handleSelectGender = (genderId, genderName) => {
        //Set checked gender id
        setCheckedRadioId(genderId)

        //Set checked gender value
        setSignUpValues(prevState => ({
            ...prevState,
            gender: genderName
        }));
    }

    const handleSignUp = () => {
        let isValid = true;
        for (let key in signUpValues) {
            //Validate required fields
            if (signUpValues[key] === '') {
                setSignUpErrors(prevState => ({
                    ...prevState,
                    [key]: LABELS[key] + ' is required!'
                }));

                isValid = false;
            }

            //Validate date of birth
            if(key === "birthday") {
                const minDate = new Date('1905/01/01');
                const maxDate = new Date();
                const dateOfBirth = new Date(signUpValues[key]);
                if(dateOfBirth < minDate || dateOfBirth > maxDate) {
                    setSignUpErrors(prevState => ({
                        ...prevState,
                        birthday: 'Invalid date'
                    }));

                    isValid = false;
                } 
            }
        }

        if (isValid) {
            dispatch(signUpAction(signUpValues));
        }
    }

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
                        <div className={`${style['signup-name-container']}`} >
                            <div className={`${style['signup-first-name']}`}>
                                <Tooltip
                                    color="rgb(190, 75, 73)"
                                    title={signUpErrors.firstName}
                                    placement="bottom">
                                    <input
                                        style={signUpErrors.firstName !== "" ? { border: '0.2rem solid rgb(190, 75, 73)' } : {}}
                                        className={`${style['signup-input']}`}
                                        placeholder="First name"
                                        maxLength="255"
                                        name="firstName"
                                        value={signUpValues.firstName}
                                        onChange={handleChangeValue}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSignUp()
                                            }
                                        }}
                                    />
                                </Tooltip>
                            </div>
                            <div className={`${style['signup-last-name']}`}>
                                <Tooltip
                                    color="rgb(190, 75, 73)"
                                    title={signUpErrors.lastName}
                                    placement="bottom">
                                    <input
                                        style={signUpErrors.lastName !== "" ? { border: '0.2rem solid rgb(190, 75, 73)' } : {}}
                                        className={`${style['signup-input']}`}
                                        placeholder="Last name"
                                        maxLength="255"
                                        name="lastName"
                                        value={signUpValues.lastName}
                                        onChange={handleChangeValue}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSignUp()
                                            }
                                        }}
                                    />
                                </Tooltip>
                            </div>
                        </div>
                        <div className={`${style['signup-username-container']}`}>
                            <Tooltip
                                color="rgb(190, 75, 73)"
                                title={signUpErrors.username}
                                placement="bottom">
                                <input
                                    style={signUpErrors.username !== "" ? { border: '0.2rem solid rgb(190, 75, 73)' } : {}}
                                    className={`${style['signup-input']}`}
                                    placeholder="Username"
                                    maxLength="30"
                                    name="username"
                                    value={signUpValues.username}
                                    onChange={handleChangeValue}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSignUp()
                                        }
                                    }}
                                />
                            </Tooltip>
                        </div>
                        <div className={`${style['signup-password-container']}`}>
                            <Tooltip color="rgb(190, 75, 73)"
                                title={signUpErrors.password}
                                placement="bottom">
                                <input
                                    style={signUpErrors.password !== "" ? { border: '0.2rem solid rgb(190, 75, 73)' } : {}}
                                    type="password"
                                    className={`${style['signup-input']}`}
                                    placeholder="Password"
                                    name="password"
                                    value={signUpValues.password}
                                    onChange={handleChangeValue}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSignUp()
                                        }
                                    }}
                                />
                            </Tooltip>
                        </div>
                        <div className={`${style['signup-birthday-container']}`}>
                            <label className={`${style['signup-birthday-label']}`}>Date of birth</label>
                            <Tooltip
                                color="rgb(190, 75, 73)"
                                title={signUpErrors.birthday}
                                placement="bottom">
                                <input
                                    style={signUpErrors.password !== "" ? { border: '0.2rem solid rgb(190, 75, 73)' } : {}}
                                    className={`${style['signup-birthday-picker']}`}
                                    type="date"
                                    id="birthday"
                                    min="1905-01-01"
                                    max={maxDate}
                                    name="birthday"
                                    value={signUpValues.birthday}
                                    onChange={handleChangeValue}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSignUp()
                                        }
                                    }}
                                />
                            </Tooltip>
                        </div>
                        <div className={`${style['signup-gender-container']}`}>
                            <label className={`${style['signup-gender-label']}`}>Gender</label>
                            <div
                                className={`${style['signup-gender-selection-container']}`}
                                name="gender"
                            // value={signUpValues.gender}
                            >
                                {renderGenderList()}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={`${style['signup-modal-dialog-footer']}`}>
                        <div
                            className={`${style['signup-modal-dialog-signup-btn']}`}
                            onClick={handleSignUp}
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