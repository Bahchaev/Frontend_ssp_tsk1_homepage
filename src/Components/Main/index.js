import React from 'react';
import styles from "../Header/syles.module.css";
import Features from "../Main/Article1";
import About from "./About";
import Instruction from "./Instruction";
import Prices from "./Prices";
import Carusel from "./Carusel";
import News from "./News";
import Trial from "./Trial";

function Main() {
    return (
        <div className={styles.main}>
            <Features/>
            <About/>
            <Instruction/>
            <Prices/>
            <Carusel/>
            <News/>
            <Trial/>
        </div>
    );
}

export default Main