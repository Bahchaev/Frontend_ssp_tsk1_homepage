import React from 'react';
import styles from "./styles.module.css"
import AboutCard from "./AboutCard";
import large1 from "./img/large_1.png"
import small1 from "./img/small_1.png"


function About() {

    let header1 = "Easy Messaging";
    let header2 = "Clean Design";


    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    return (
        <div className={styles.aboutCardContainer}>
            <div className={styles.strafeRight}>
                <AboutCard text={text} header={header1} imgLarge={large1} imgSmall={small1}/>
            </div>
            <div className={styles.strafeLeft}>
                <AboutCard text={text} header={header2} imgLarge={large1} imgSmall={small1} isReversed/>
            </div>
        </div>
    )
}

export default About