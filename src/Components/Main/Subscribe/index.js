import React from 'react';
import styles from "./styles.module.css"


function Subscribe() {

    const submit = () => {
        console.log("some post request")
    };

    return (
        <div className={styles.subscribeContainer}>
            <form method={"post"} className={styles.subscribeForm}>
                <label htmlFor={"inputEmail"} className={styles.subscribeLabel}>AppSon</label>
                <div className={styles.subscribeInputContainer}>
                    <input
                        placeholder={"Enter Your Email"}
                        name={"subscribeEmail"}
                        type={"email"}
                        id={"inputEmail"}
                        className={styles.subscribeInput}
                    />
                    <input type={"submit"} value={"SUBSCRIBE"} className={styles.subscribeSubmit}/>
                </div>
            </form>
        </div>
    )
}

export default Subscribe