import React, {useState} from 'react';
import styles from "./styles.module.css"
import PricingPlan from "../PricingPlan";
import Button from "react-bootstrap/Button";

function PriceCard({img, header, text, price, variant}) {

    return (
        <div className={styles.priceCardContainer}>
            <img src={img} className={styles.priceCardImg} alt={""}/>
            <div className={styles.priceCardHeader}>{header}</div>
            <hr className={styles.priceCardLine}/>
            <div className={styles.priceCardText}>{text}</div>
            <div className={styles.priceCardPrice}><p>$</p><p>{price}</p></div>
            <Button variant={variant} className={styles.priceCardButton}>Try Now</Button>
        </div>
    )
}

export default PriceCard