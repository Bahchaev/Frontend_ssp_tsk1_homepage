import React from 'react';
import Header from "../Header";
import Main from "../Main";
import styles from "./styles.module.css";
import Footer from "../Footer";
import ScrollUpButton from "../ScrollUpButton";

function App() {
    return (
        <div className={styles.app}>
            <a name={"home"}/>
            <Header/>
            <Main/>
            <Footer/>
            <ScrollUpButton/>
        </div>
    );
}

export default App