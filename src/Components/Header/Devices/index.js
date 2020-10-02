import React from 'react';
import DeviceCard from "./DeviceCard";
import styles from "./styles.module.css"

function Devices() {
    return (
        <div className={styles.devices}>
            <div className={styles.small}>
                <DeviceCard/>
            </div>
            <div>
                <DeviceCard/>
            </div>
            <div className={styles.small}>
                <DeviceCard/>
            </div>
        </div>
    )
}

export default Devices