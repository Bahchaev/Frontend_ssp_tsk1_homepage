import React from 'react';
import styles from "./styles.module.css";
import twitterIcon from "./img/twitter-icon.png"


function CaruselItem({img, header, underHeader, text}) {

    return (
        <div className={styles.caruselItemContainer}>
            <div className={styles.itemHeaderContainer}>
                <img src={twitterIcon} alt={""}/>
                <div className={styles.itemHeader}>{header}</div>
                <div className={styles.itemUnderHeader}>{underHeader}</div>
            </div>
            <div className={styles.itemTextContainer}>
                <div className={styles.itemText}>{text}</div>
            </div>


        </div>
    )
}

export default CaruselItem