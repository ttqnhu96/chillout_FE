import React from 'react';
import style from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={`${style['home-page']}`}>
            <div className={`${style['home-page-container']}`}>
                2
                {/* <div className="row">
                <div className="col-3">
                    <div style={{ background: 'pink', borderRadius: '20px', height: '100%', minHeight: '100%' }}>
                    Left
                    </div>
                </div>
                <div className="col-6" >
                    <div style={{background: 'green', borderRadius: '20px', height: '100%' }} >Middle</div>
                </div>
                <div className="col-3" >
                    <div style={{ background: 'pink', borderRadius: '20px', height: '100%' }}>
                    Right
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    )
}
