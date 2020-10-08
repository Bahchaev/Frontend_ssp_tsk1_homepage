import React from 'react';
import styles from "../Header/syles.module.css";
import Features from "../Main/Features";
import About from "./About";
import Instruction from "./Instruction";
import Prices from "./Prices";
import Carusel from "./Carusel";
import News from "./News";
import Trial from "./Trial";
import Subscribe from "./Subscribe";

function Main() {
    return (
        <div className={styles.main}>
            <a name={"features"}/>
            <Features/>
            <About/>
            <Instruction/>
            <a name={"pricing"}/>
            <Prices/>
            <Carusel/>
            <a name={"news"}/>
            <News/>
            <Trial/>
            <Subscribe/>
        </div>
    );
}

export default Main