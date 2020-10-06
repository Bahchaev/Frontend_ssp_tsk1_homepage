import React, {useEffect, useRef, useState} from 'react';
import styles from "./styles.module.css"
import caruselImg from "./img/carusel-img.png"
import CaruselItem from "./CaruselItem";

function Carusel() {

    const caruselItemsArray = [
        {
            header: "Raisa Moni 1",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
        },
        {
            header: "Raisa Moni 2",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
        },
        {
            header: "Raisa Moni 3",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
        }
    ];



    const [activeItem, setActiveItem] = useState(0);
    const [position, setPosition] = useState(0);
    const activeItemRef = useRef(null);
    const vieFieldRef = useRef(null);

    useEffect(() => {
        setPosition(activeItem * -390 + "px")
    }, [activeItem]);

    return (
        <div className={styles.caruselContainer}>
            <img src={caruselImg} alt={""} className={styles.caruselImg}/>
            <div className={styles.caruselField}>
                <div className={styles.caruselHeader}>Trusted By More Than 55M Peoples</div>

                <div className={styles.caruselItemsField} ref={vieFieldRef}>

                    <div className={styles.viewField} style={{left: position}}>
                    {caruselItemsArray.map((item, index) => {
                        const isActive = (index === activeItem);
                        return (
                            <div className={`styles.${isActive ? "active" : ""}`}  ref={isActive ? activeItemRef : null} id={`item-${index}`} key={`item-${index}`} >
                                <CaruselItem index={index} header={item.header} underHeader={item.underHeader} text={item.text}/>
                            </div>
                        )
                    })}
                    </div>

                </div>

                <div className={styles.caruselButtonField}>
                    {caruselItemsArray.map((item, index) => {
                        const isActive = (index === activeItem);
                        return (
                            <label className={styles.caruselButton}>
                                <input type={"radio"} name={"caruselButton"} checked={isActive} onClick={() => setActiveItem(index)}/>
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
