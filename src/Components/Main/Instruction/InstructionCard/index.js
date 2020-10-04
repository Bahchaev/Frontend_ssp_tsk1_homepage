import React from 'react';
import styles from "./styles.module.css"

function InstructionCard({img, header, text}) {
    return (
        <div className={styles.instructionCardContainer}>
            <img src={img} className={styles.instructionCardImg} alt={""}/>
            <div className={styles.instructionCardHeader}>{header}</div>
            <div className={styles.instructionCardText}>{text}</div>
        </div>
    )
}

export default InstructionCard