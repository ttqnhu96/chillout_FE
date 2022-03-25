import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SignUp from '../../components/SignUp/SignUp';
import { logInAction } from '../../redux/actions/AuthenticationActions';
import style from './Login.module.css';

export default function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        dispatch(logInAction(username, password));
    }
    const handleClickSignUp = () => {
        setIsSignUpModalVisible(true);
    }

    return (
        <div className={`${style['login']}`}>
            <div className={`${style['login-logo-container']}`}>
                <img
                    className={`${style['login-logo']}`}
                    src="./image/logo/Chillout_logo_circle.png" height={50} alt="chillout_logo"
                />
                <img
                    className={`${style['login-brand-name']}`}
                    src="./image/logo/Chillout_text.png" height={35} alt="chillout_brandname"
                />
            </div>
            <div className={`${style['login-input-container']}`}>
                <input
                    className={`${style['login-input']}`}
                    placeholder="Username"
                    onChange={handleChangeUsername}
                />
                <input
                    className={`${style['login-input']}`}
                    type="password"
                    placeholder="Password"
                    onChange={handleChangePassword}
                />
                <button
                    className={`${style['login-button']}`}
                    onClick={handleSubmit}
                >
                    Login
                </button>
                <div className={`${style['signup-text-container']}`}>
                    <div className={`${style['not-have-account-text']}`}>Don't have an account?</div>
                    <div
                        className={`${style['signup-text']}`}
                        onClick={handleClickSignUp}
                    >
                        Sign Up
                    </div>
                </div>
                {isSignUpModalVisible && <SignUp />}
            </div>
        </div>
    )
}