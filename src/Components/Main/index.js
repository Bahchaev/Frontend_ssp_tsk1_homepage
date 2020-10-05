import React from 'react';
import Features from "../Main/Article1";
import About from "./About";
import styles from "../Header/syles.module.css";
import Instruction from "./Instruction";
import Prices from "./Prices";
import Carusel from "./Carusel";

function Main() {
    return (
        <div className={styles.main}>
            <Features/>
            <About/>
            <Instruction/>
            <Prices/>
            <Carusel/>
        </div>
    );
}

export default Main