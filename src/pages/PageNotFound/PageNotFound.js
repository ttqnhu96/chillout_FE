import style from './PageNotFound.module.css';

export default function PageNotFound() {
    return (
        <div className={`${style['container']}`}>
            <img src="/image/error/error-404.svg" alt="" />
            {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
        </div >
    );
}