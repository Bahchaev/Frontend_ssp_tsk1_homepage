import React from 'react';

import Features from "../Main/Article1";
import About from "./About";
import styles from "../Header/syles.module.css";
import Instruction from "./Instruction";
import Prices from "./Prices";

function Main() {
    return (
        <div className={styles.main}>
            <Features/>
            <About/>
            <Instruction/>
            <Prices/>
        </div>
    );
}

export default Main