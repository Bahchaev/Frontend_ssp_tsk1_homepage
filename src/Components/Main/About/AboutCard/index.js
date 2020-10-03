import React from 'react';
import styles from "./styles.module.css"
import rectangle from "../img/rectangle-2.png"

function AboutCard({imgSmall, imgLarge, header, text, isReversed}) {

    let direction = (!isReversed) ? {flexDirection: "row"} : {flexDirection: "row-reverse"};
    let rectanglePosition = (!isReversed) ? {
        position: "absolute",
        left: "-193px",
        top: "-130px",
        zIndex: "-1"
    } : {
        position: "absolute",
        right: "-193px",
        bottom: "-130px",
        zIndex: "-1"
    };

    return (
        <div style={direction} className={styles.AboutCardContainer}>
            <div className={styles.images}>
                <img src={rectangle} alt={""} className={styles.rectangle} style={rectanglePosition}/>
                <img src={imgLarge} alt={""}/>
                <img src={imgSmall} alt={""} className={styles.imgSmall}/>
            </div>
            <div className={styles.textArea}>
                <div className={styles.textAreaHeader}>{header}</div>
                <div className={styles.textAreaText}>{text}</div>
                <div className={styles.textAreaLink}><a href={""}>Read More -></a></div>
            </div>
        </div>
    )
}

export default AboutCard