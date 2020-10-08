import React, {useState} from 'react';
import styles from "./styles.module.css";
import scrollUpButton from "./scrollUpButton.png"

function ScrollUpButton() {

    const [display, setDisplay] = useState("none");

    function isVisible() {

        if (window.pageYOffset > 400) {
            setDisplay("block")
        } else {
            setDisplay("none")
        }
    }

    window.onscroll = isVisible;

    return (
        <div className={styles.scrollUpButtonContainer}>
            <a href={"#home"}>
                <img src={scrollUpButton} alt={""}
                     className={styles.scrollUpButton}
                     style={{display: display}}/>
            </a>
        </div>
    )
}

export default ScrollUpButton