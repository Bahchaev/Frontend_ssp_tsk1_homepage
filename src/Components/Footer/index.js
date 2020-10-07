import React from 'react';
import styles from "./styles.module.css"
import fbLinkImg from "./img/social-fb.png"
import twitterLinkImg from "./img/social-twitter.png"
import ytLinkImg from "./img/social-yt.png"



function Footer() {


    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div>
                    <div className={styles.footerCopyright}>© 2018 Copyright, All Rights Reserved by AppSon</div>
                </div>
                <div className={styles.footerLinksContainer}>
                    <a href={""}>Terms & Condition</a>
                    <a href={""}>Private Policy</a>
                    <a href={""}>Held</a>
                </div>
                <div className={styles.footerSpcialContainer}>
                    <a href={"https://www.facebook.com/"}><img src={fbLinkImg} alt={"FaceBook"}/></a>
                    <a href={"https://twitter.com/"}><img src={twitterLinkImg} alt={"Twitter"}/></a>
                    <a href={"https://www.youtube.com/"}><img src={ytLinkImg} alt={"YouTube"}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer