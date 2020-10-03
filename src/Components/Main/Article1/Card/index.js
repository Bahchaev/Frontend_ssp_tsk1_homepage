import React from 'react';
import styles from "./styles.module.css"

function Card({img, header, text}) {
    return (
        <div className={styles.cardContainer}>
            <img src={img} className={styles.cardImg} alt={""}/>
            <div className={styles.cardHeader}>{header}</div>
            <div className={styles.cardText}>{text}</div>
        </div>
    )
}

export default Card