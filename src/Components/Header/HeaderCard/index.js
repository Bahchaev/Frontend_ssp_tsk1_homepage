import React from 'react';
import {Button, Navbar, Nav} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./syles.module.css"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const HeaderCard = () => {
    return (
        <div className={styles.headerCard}>
            <div>
                <div className={styles.headerCardTitle}>
                    Best Desktop App for You
                </div>
            </div>
            <div>
                <div className={styles.headerCardText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </div>
            </div>
            <div className={styles.headerCardButtons}>
                <Button variant={"primary"} className={styles.downloadButton}>Download</Button>
                <Button variant={"outline-primary"} className={styles.freeTrialButton}>Free Trial</Button>
            </div>

        </div>
    );
};

export default HeaderCard;