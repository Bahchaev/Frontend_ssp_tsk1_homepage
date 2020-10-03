import React from 'react';
import Header from "../Header";
import Main from "../Main";
import styles from "./styles.module.css";

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App