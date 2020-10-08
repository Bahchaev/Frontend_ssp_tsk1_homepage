import React from 'react';
import styles from "./styles.module.css"
import textStyles from "../../../textStyles.css"
import cn from 'classnames';

function Card({img, header, text}) {
    return (
        <div className={styles.cardContainer}>
            <img src={img} className={cn(styles.cardImg)} alt={""}/>
            <div className={cn(styles.cardHeader)}>{header}</div>
            <div className={styles.cardText}>{text}</div>
        </div>
    )
}

export default Card