import React from 'react';
import styles from "./syles.module.css"
import NavBar from "./NavBar";
import HeaderCard from "./HederCard";
import Devices from "./Devices";

function Header() {
    return (
        <div className={styles.header}>
            <NavBar/>
            <div className={styles.headerCardContainer}>
                <HeaderCard/>
            </div>
            <div className={styles.headerCardContainer}>
                <Devices/>
            </div>
        </div>
    )
}

export default Header