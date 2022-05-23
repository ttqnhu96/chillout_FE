import style from './Settings.module.css';

export default function Settings() {
    return (
        <div className={`${style['settings']}`}>
            <div className={`${style['settings-title']}`}>
                Settings
            </div>
            <div className={`${style['settings-container']}`}>
                <div className={`${style['settings-label']}`}>
                    Language
                </div>
                <select defaultValue="ENG" className={`${style['language-select-box']}`}>
                    <option value="ENG">English</option>
                    {/* <option value="VI">Tiếng Việt</option> */}
                </select>
                <div className={`${style['save-button-container']}`}>
                    <div className={`${style['save-button']}`}>
                        Save
                    </div>
                </div>
            </div>
        </div>
    )
}