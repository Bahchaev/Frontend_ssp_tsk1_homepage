import React from 'react';
import styles from "./styles.module.css";

function BigNewsCard({img, header, text}) {
    return (
        <div className={styles.bigNewsCardContainer}>
            <img src={img} alt={""} className={styles.bigNewsCardImg}/>
            <div className={styles.bigNewsCardHeader}>{header}</div>
            <div className={styles.bigNewsCardText}>{text}</div>
            <div className={styles.bigNewsCardLink}><a href={""}>Continue Reading -></a></div>
        </div>
    )
}

export default BigNewsCard