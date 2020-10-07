import React from 'react';
import styles from "./styles.module.css"
import Button from "react-bootstrap/Button";


function Trial() {

    return (

        <div className={styles.trialContainer}>
            <div className={styles.trialTextContainer}>
                <div className={styles.trialHeader}>Try 30 Days Free Trial</div>
                <div className={styles.trialText}>No credit card required</div>
            </div>
            <div className={styles.trialButtonContainer}>
                <Button className={styles.trialButton}>Get Started -></Button>
            </div>
        </div>
    )
}

export default Trial