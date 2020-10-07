import React from 'react';
import Header from "../Header";
import Main from "../Main";
import styles from "./styles.module.css";
import Footer from "../Footer";

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App