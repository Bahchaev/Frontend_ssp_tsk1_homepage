import React from 'react';
import {Button, Navbar, Nav} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css"

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" className={styles.navBar}>
            <Navbar.Brand href="#home" className={styles.logo}>
                <p>AppSon</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navMenu"/>
            <Navbar.Collapse id="navMenu">
                <Nav
                    className={styles.navMenu}
                    activeKey={"homeLink"}
                >
                    <Nav.Link href="" className={styles.link} eventKey={"homeLink"}>HOME</Nav.Link>
                    <Nav.Link href="#features" className={styles.link} eventKey={"featureLink"}>FEATURES</Nav.Link>
                    <Nav.Link href="#pricing" className={styles.link} eventKey={"pricingLink"}>PRICING</Nav.Link>
                    <Nav.Link href="#news" className={styles.link} eventKey={"pagesLink"}>PAGES</Nav.Link>
                </Nav>
                <div className={styles.signUpButtonContainer}>
                    <Button className={styles.signUpButton}>SIGN UP</Button>
                </div>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBar;