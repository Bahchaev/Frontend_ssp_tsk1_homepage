import React from 'react';
import styles from "./syles.module.css"
import NavBar from "./NavBar";
import HeaderCard from "./HederCard";
import Devices from "./Devices";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.navBarContainer}>
                <NavBar/>
            </div>
            <div className={styles.headerCardContainer}>
                <HeaderCard/>
            </div>
            <div className={styles.devicesContainer}>
                <Devices/>
            </div>
        </div>
    )
}

export default Header