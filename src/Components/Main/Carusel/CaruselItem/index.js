import React from 'react';
import styles from "./styles.module.css";


function CaruselItem({position}) {

    return (
        <div style={{left: position + "px"}} className={styles.caruselItemContainer}>

        </div>
    )
}

export default CaruselItem