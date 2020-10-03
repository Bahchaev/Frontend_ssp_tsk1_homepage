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

    // return (
    //     <Navbar collapseOnSelect expand="lg" className={styles.navBar}>
    //         <Navbar.Brand href="#home">
    //             <div className={styles.logo}>
    //                 AppSon
    //             </div>
    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls="navMenu"/>
    //         <Navbar.Collapse id="navMenu">
    //             <Nav className={styles.navMenu}>
    //                 <Nav.Link href="" className={styles.link}>HOME</Nav.Link>
    //                 <Nav.Link href="" className={styles.link}>FEATURES</Nav.Link>
    //                 <Nav.Link href="" className={styles.link}>PRICING</Nav.Link>
    //                 <Nav.Link href="" className={styles.link}>PAGES</Nav.Link>
    //             </Nav>
    //             <Nav className={styles.signUpButtonContainer}>
    //                 <Button className={styles.signUpButton}>SIGN UP</Button>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Navbar>
    //)
};

export default NavBar;