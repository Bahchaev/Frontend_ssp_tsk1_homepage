import React from 'react';
import styles from "./styles.module.css"
import allDevices from "./img/allDevices.png"


function Devices() {

    return (
        <div>
            <div className={styles.devices}>
                {/*<div className={styles.leftDevice}>*/}
                {/*    <DeviceCard bg={deviceBG} image={leftDeviceScreen}/>*/}
                {/*</div>*/}
                {/*<div className={styles.centerDevice}>*/}
                {/*    <DeviceCard bg={deviceBG} image={centerDeviceScreen}/>*/}
                {/*</div>*/}
                {/*<div className={styles.rightDevice}>*/}
                {/*    <DeviceCard bg={deviceBG} image={rightDeviceScreen}/>*/}
                {/*</div>*/}
                <img src={allDevices} width={"933px"} alt="" className={styles.devicesIMG}/>
            </div>
        </div>
    )
}

export default Devices