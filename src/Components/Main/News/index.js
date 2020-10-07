import React from 'react';
import styles from "./styles.module.css";
import headerStyles from "../Instruction/styles.module.css"
import headerBg from "../Instruction/Img/header_bg.png";
import BigNewsCard from "./BigNewsCard";
import imgNews1 from "./img/news-1.png"
import imgNews2 from "./img/news-2.png"
import imgNews3 from "./img/news-3.png"
import imgNews4 from "./img/news-4.png"
import SmallNewsCard from "./SmallNewsCard";


function News() {

    const news = [
        {
            img: imgNews1,
            header: "The master bedroom suite is phenomenally\n" +
                " spacious",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            img: imgNews2,
            header: "The master bedroom suite is phenomenally\n" +
                " spacious",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            img: imgNews3,
            header: "The master bedroom suite is phenomenally\n" +
                " spacious",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            img: imgNews4,
            header: "The master bedroom suite is phenomenally\n" +
                " spacious",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        }
    ];


    return (
        <div className={styles.newsContainer}>
            <div className={headerStyles.textContainer}>
                <div className={headerStyles.headerBg}>
                    <img src={headerBg} alt={""} className={headerStyles.headerBgLeft}/>
                    <img src={headerBg} alt={""} className={headerStyles.headerBgRight}/>
                </div>
                <div className={headerStyles.instructionHeader}>Latest News From Us</div>
                <div className={headerStyles.instructionText}>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet.
                </div>
            </div>

            <div className={styles.newsContentContainer}>
                <div className={styles.bigNewsContainer}>
                    <BigNewsCard img={news[0].img} text={news[0].text} header={news[0].header}/>
                </div>

                <div className={styles.smallNewsContainer}>
                    <SmallNewsCard img={news[1].img} text={news[1].text} header={news[1].header}/>
                    <SmallNewsCard img={news[2].img} text={news[2].text} header={news[2].header}/>
                    <SmallNewsCard img={news[3].img} text={news[3].text} header={news[3].header}/>
                </div>
            </div>


        </div>
    )
}

export default News