import React from 'react';

import Features from "../Main/Article1";
import About from "./About";
import styles from "../Header/syles.module.css";

function Main() {
    return (
        <div className={styles.main}>
            <Features/>
            <About/>
        </div>
    );
}

export default Main