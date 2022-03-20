import style from './LoginBanner.module.css';

export default function LoginBanner() {
    return (
        <div className={`${style['login-banner']}`}>
            <div className={`${style['welcome-text']}`}>
                Welcome!
            </div>
            <img
                className={`${style['welcome-image']}`}
                src='./image/login/login-banner.png' alt="welcome_image"
            />
        </div>
    )
}