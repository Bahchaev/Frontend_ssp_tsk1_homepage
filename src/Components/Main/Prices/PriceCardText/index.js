import React, {useState} from 'react';
import styles from "./styles.module.css"

function PriceCardText() {
    return (
        <div className={styles.priceCardTextContainer}>
            <div>2gb Hosting</div>
            <div>10 Custom Domain</div>
            <div>SSD Hosting</div>
            <div>50 gb Bandwith</div>
            <div>Free Support</div>
        </div>
    )
}

export default PriceCardText