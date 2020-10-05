import React, {useState} from 'react';
import styles from "./styles.module.css"
import caruselImg from "./img/carusel-img.png"
import CaruselItem from "./CaruselItem";

function Carusel() {

    const caruselItemsArray = [
        {
            itemClassName: styles.item1,
            buttonClassName: styles.caruselButton1,
            header: "Raisa Moni",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
            number: 0
        },
        {
            itemClassName: styles.item2,
            buttonClassName: styles.caruselButton2,
            header: "Raisa Moni",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
            number: 1
        },
        {
            itemClassName: styles.item3,
            buttonClassName: styles.caruselButton3,
            header: "Raisa Moni",
            underHeader: "Envato Customer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.",
            number: 2
        }
    ];

    const [caruselItemPosition, setCaruselItemPosition] = useState(0);

    const handleClick = (item) => {
        setCaruselItemPosition(item.number * 390)
    };

    return (
        <div className={styles.caruselContainer}>
            <img src={caruselImg} alt={""} className={styles.caruselImg}/>
            <div className={styles.caruselField}>
                <div className={styles.caruselHeader}>Trusted By More Than 55M Peoples</div>

                <div className={styles.caruselItemsField}>
                    {caruselItemsArray.map((item) => {
                        return (
                            <CaruselItem position={caruselItemPosition}/>
                        )
                    })}
                </div>

                <div className={styles.caruselButtonField}>

                    {caruselItemsArray.map((item) => {
                        return (
                            <button className={item.buttonClassName} onClick={handleClick(item)}/>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Carusel
