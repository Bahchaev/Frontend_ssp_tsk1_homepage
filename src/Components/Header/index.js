import React from 'react';
import styles from "./syles.module.css"
import NavBar from "../NavBar";

function Header() {
    return (
        <div className={styles.header}>
            <NavBar/>
        </div>
    )
}

export default Header