import React from 'react';
import styles from './styles.module.css'
import deviceBG from './img/device.png'
import deviceScreen from "./img/app-screen.png"


function DeviceCard() {
    return (
        // <div className={styles.deviceCard}>
        //     <div className={styles.deviceAppScreen}>
        //     </div>
        // </div>
        <div style={{position: "relative"}}>
            <img src={deviceBG} alt="" className={styles.deviceBG}/>
            <img src={deviceScreen} alt="" className={styles.deviceScreen}/>
        </div>
    )
}

export default DeviceCard