import style from './Search.module.css';

export default function Search() {
    return (
        <div className={`${style['search-container']}`}>
            <input
                className={`${style['search-input']}`}
                placeholder="Search..."
            />
            <div className={`${style['search-button']}`}>
                <i className="fa fa-search"></i>
            </div>
        </div>
    )
}