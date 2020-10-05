import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import PricingPlan from "./PricingPlan";
import PriceCard from "./PriceCard";
import standardImg from "./img/standard_img.png"
import premiumImg from "./img/premium_img.png"
import PriceCardText from "./PriceCardText";


function Prices() {

    const [period, setPeriod] = useState('1');
    const [priceStandard, setPriceStandard] = useState("19.00");
    const [pricePremium, setPricePremium] = useState("49.00");

    useEffect(() => {
        if (period === "2") {
            setPriceStandard("228.00");
            setPricePremium("588.00")
        } else if (period === "1") {
            setPriceStandard("19.00");
            setPricePremium("49.00")
        }
    }, [period]);


    return (

        <div className={styles.pricesContainer}>
            <PricingPlan setPeriod={setPeriod}/>
            <div className={styles.priceCardField}>
                <PriceCard img={standardImg} header={"Standard"} text={<PriceCardText/>} price={priceStandard}/>
                <PriceCard img={premiumImg} header={"Premium"} text={<PriceCardText/>} price={pricePremium}/>
            </div>
        </div>
    )
}

export default Prices