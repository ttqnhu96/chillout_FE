import style from './Login.module.css';

export default function Login() {
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
                <input className={`${style['login-input']}`}></input>
                <input className={`${style['login-input']}`}></input>
                <button className={`${style['login-button']}`}>Login</button>
                <div className={`${style['signup-text-container']}`}>
                    <div className={`${style['not-have-account-text']}`}>Don't have an account?</div>
                    <div className={`${style['signup-text']}`}>Sign Up</div>
                </div>
            </div>
        </div>
    )
}