import React, {useState} from 'react';
import DeviceCard from "./DeviceCard";
import styles from "./styles.module.css"
import deviceBG from './img/deviceBG.png'
import centerDeviceScreen from "./img/centerDeviceScreen.png"
import leftDeviceScreen from "./img/leftDeviceScreen.png"
import rightDeviceScreen from "./img/rightDeviceScreen.png"
import allDevices from "./img/allDevices.png"
import scrollDownButton from "./img/scrool-down.png"


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