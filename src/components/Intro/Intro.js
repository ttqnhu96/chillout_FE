import style from './Intro.module.css';

export default function Intro() {
    return (
        <div className={`${style['intro-container']}`}>
            <div className={`${style['intro-title']}`}>
                Intro
            </div>
            <div className={`${style['intro-bio']}`}>
                This is bio
                <hr />
            </div>
            <div className={`${style['intro-item']}`}>
                <div className={`${style['intro-item-icon']}`}>
                    <img height={19} width={20}
                        src="./image/icon/address.png"
                        alt="address"
                    />
                </div>
                <div className={`${style['intro-item-text']}`}>
                    Lives in <span style={{ fontWeight: 'bold' }}>Can Tho</span>
                </div>
            </div>
            <div className={`${style['intro-item']}`}>
                <div className={`${style['intro-item-icon']}`}>
                    <img height={18} width={18}
                        src="./image/icon/work.png"
                        alt="work"
                    />
                </div>
                <div className={`${style['intro-item-text']}`}>
                    Works at <span style={{ fontWeight: 'bold' }}>FPT</span>
                </div>
            </div>
            <div className={`${style['intro-item']}`}>
                <div className={`${style['intro-item-icon']}`}>
                    <img height={18} width={18}
                        src="./image/icon/clock.png"
                        alt="clock"
                    />
                </div>
                <div className={`${style['intro-item-text']}`}>
                    Joined <span style={{ fontWeight: 'bold' }}>June 2013</span>
                </div>
            </div>
        </div>
    )
}