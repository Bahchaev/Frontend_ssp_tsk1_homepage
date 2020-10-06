import React from 'react';
import styles from "./styles.module.css";

function SmallNewsCard({img, header, text}) {
    return (
        <div className={styles.smallNewsCardContainer}>
            <img src={img} alt={""} className={styles.smallNewsCardImg}/>
            <div className={styles.smallNewsCardContent}>
                <div className={styles.smallNewsCardHeader}>{header}</div>
                <div className={styles.smallNewsCardText}>{text}</div>
            </div>
        </div>
    )
}

export default SmallNewsCard