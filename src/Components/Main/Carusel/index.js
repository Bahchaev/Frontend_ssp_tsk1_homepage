import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import caruselImg from "./img/carusel-img.png"
import CaruselItem from "./CaruselItem";

function Carusel() {

    const caruselItemsArray = [
        {
            header: "Raisa Moni",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
        },
        {
            header: "Raisa Moni",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
        },
        {
            header: "Raisa Moni",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
        }
    ];

    const [position, setPosition] = useState(0);
    const handleClick = (e) => {
        setPosition(-390 * e.currentTarget.id);
    }

    return (
        <div className={styles.caruselContainer}>
            <img src={caruselImg} alt={""} className={styles.caruselImg}/>
            <div className={styles.caruselField}>
                <div className={styles.caruselHeader}>Trusted By More Than 55M Peoples</div>
                <div style={{left: position + "px"}} className={styles.caruselItemsField}>

                    {
                        caruselItemsArray.map((item, index) => {
                            return (
                                <CaruselItem index={index}/>
                            )
                        })}

                </div>

                <div className={styles.caruselButtonField}>
                    {caruselItemsArray.map((item, index) => {
                        return (
                            <label className={styles.caruselButton}>
                                <input type={"radio"} name={"caruselButton"} id={index} onClick={handleClick}/>
                                <div/>
                            </label>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Carusel
