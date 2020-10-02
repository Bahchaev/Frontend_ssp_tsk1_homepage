import React from 'react';
import DeviceCard from "./DeviceCard";
import styles from "./styles.module.css"

function Devices() {
    return (
        <div className={styles.devices}>
            <div className={styles.leftDevice}>
                <DeviceCard/>
            </div>
            <div className={styles.centerDevice}>
                <DeviceCard/>
            </div>
            <div className={styles.rightDevice}>
                <DeviceCard/>
            </div>
        </div>
    )
}

export default Devices