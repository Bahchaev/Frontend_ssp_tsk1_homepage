import React from 'react';
import styles from "./styles.module.css"
import InstructionCard from "./InstructionCard";

import accountImg from "./Img/Account_img.png"
import emailImg from "./Img/Email_img.png"
import resultsImg from "./Img/Results_img.png"
import headerBg from "./Img/header_bg.png"

function Instruction() {

    let header1 = "Create An Account";
    let header2 = "Confirm Email";
    let header3 = "See Results";
    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.";

    return (
        <div className={styles.instructionContainer}>
            <div className={styles.textContainer}>
                <div className={styles.headerBg}>
                    <img src={headerBg} alt={""} className={styles.headerBgLeft}/>
                    <img src={headerBg} alt={""} className={styles.headerBgRight}/>
                </div>
                <div className={styles.instructionHeader}>How Does It Works</div>
                <div className={styles.instructionText}>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
            <div className={styles.instructionCards}>
                <hr className={styles.line}/>
                <InstructionCard img={accountImg} header={header1} text={text}/>
                <InstructionCard img={emailImg} header={header2} text={text}/>
                <InstructionCard img={resultsImg} header={header3} text={text}/>
            </div>
        </div>
    )
}

export default Instruction