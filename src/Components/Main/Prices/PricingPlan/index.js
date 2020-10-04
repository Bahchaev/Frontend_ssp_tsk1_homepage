import React, {useState} from 'react';
import styles from "./styles.module.css"
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function PricingPlan({setPeriod}) {

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        {name: 'Monthly', value: '1', className: styles.monthlyButton},
        {name: 'Yearly', value: '2', className: styles.yearlyButton}
    ];

    return (
        <div className={styles.pricingPlanContainer}>
            <div className={styles.pricingPlanHeader}>Pricing Plan</div>
            <div className={styles.pricingPlanText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet.
            </div>
            <div>
                <ButtonGroup toggle>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant={radioValue === radio.value ? "primary" : "outline-primary"}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => {
                                setRadioValue(e.currentTarget.value);
                                setPeriod(e.currentTarget.value);
                            }}
                            className={radio.className}
                            active={radioValue === radio.value}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
}

export default PricingPlan