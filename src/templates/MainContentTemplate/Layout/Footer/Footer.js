import React from 'react'
import style from './Footer.module.css';
import '../../../../index.css';

export default function Footer() {
    return (
        <div className={`${style['chillout-footer']}`}>
            <div className={`${style['chillout-footer-copyright-container']}`}>
                <div className={`${style['chillout-footer-copyright']}`}>
                    © 2022 Chillout by NhuTTQ
                </div>
            </div>
            <div className={`${style['chillout-footer-references-container']}`}>
                <div className={`${style['chillout-footer-references']}`}>
                    <span style={{ fontWeight: 700 }}>UI design idea: </span>uixNinja on Dribbble
                </div>
                <div className={`${style['chillout-footer-references']}`}>
                    <span style={{ fontWeight: 700 }}>Icons: </span>Flaticon | Kameleon on Sketch App Sources
                </div>
            </div>
        </div>
    )
}
