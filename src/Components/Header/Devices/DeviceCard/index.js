import React from 'react';
import styles from './styles.module.css'



function DeviceCard({bg, image}) {
    return (
        <div className={styles.deviceCard}>
            <img src={bg} width={"475px"} alt="" className={styles.deviceBG}/>
            <img src={image} width={"312px"} alt="" className={styles.deviceScreen}/>
        </div>
    )
}

export default DeviceCard