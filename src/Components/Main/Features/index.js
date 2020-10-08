import React from 'react';
import styles from "./styles.module.css"
import Card from "./Card";
import icon1 from "./img/icon1.png"
import icon2 from "./img/icon2.png"
import icon3 from "./img/icon3.png"

function Features() {

    let header1 = "Analysis";
    let header2 = "Clean Design";
    let header3 = "Messaging";

    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore";

    return (
        <div className={styles.article1Container}>
            <div className={styles.card1Container}><Card img={icon1} header={header1} text={text}/></div>
            <div className={styles.card2Container}><Card img={icon2} header={header2} text={text}/></div>
            <div className={styles.card3Container}><Card img={icon3} header={header3} text={text}/></div>
        </div>
    )
}

export default Features