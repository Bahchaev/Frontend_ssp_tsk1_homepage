import React, {useState} from 'react';
import {Form, FormControl, NavDropdown, Button, Navbar, Nav} from 'react-bootstrap'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css"


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" className={styles.navBar}>
            <Navbar.Brand href="#home">
                <div className={styles.logo}>
                    AppSon
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navMenu"/>
            <Navbar.Collapse id="navMenu">
                <Nav className={styles.navMenu}>
                    <Nav.Link href="" className={styles.link}>HOME</Nav.Link>
                    <Nav.Link href="" className={styles.link}>FEATURES</Nav.Link>
                    <Nav.Link href="" className={styles.link}>PRICING</Nav.Link>
                    <Nav.Link href="" className={styles.link}>PAGES</Nav.Link>
                </Nav>
                <div className={styles.signUpButtonContainer}>
                    <Button className={styles.signUpButton}>SIGN UP</Button>
                </div>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBar;