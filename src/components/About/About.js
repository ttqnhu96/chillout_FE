import { Fragment } from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import Bio from "../Bio/Bio";
import ContactInfo from "../ContactInfo/ContactInfo";
import EducationInfo from "../EducationInfo/EducationInfo";
import Name from "../Name/Name";
import PlaceLived from "../PlaceLived/PlaceLived";
import WorkplaceInfo from "../WorkplaceInfo/WorkplaceInfo";
import style from './About.module.css';

export default function About() {
    return (
        <Fragment>
            <div className={`${style['title']}`}>About</div>
            <div className={`${style['container']}`}>
                <Bio />
                <Name />
                <BasicInfo />
                <ContactInfo />
                <PlaceLived />
                <WorkplaceInfo />
                <EducationInfo />
            </div>
        </Fragment>
    )
}