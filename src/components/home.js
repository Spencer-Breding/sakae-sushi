"use client";
import React from 'react'
import Image from 'next/image';
import styles from '../styles/home.module.css'
import ImageGallery from './imageGallery'
import Contact from './contact';

export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.landing_div}>
                <Image className={styles.open_box} src="./images/Opened_Box.webp" alt="Opened Box of Sushi" width={1} height={1} />
                <Image className={styles.logo} src="./images/Landing.webp" alt="Sakae Sushi Logo" priority={true} width={1} height={1} />
                <Image className={styles.wrapped_box} src="./images/Wrapped_Box.webp" alt="Wrapped Box of Sushi" width={1} height={1} />
            </div>
            <h2 id="AboutUs" className={styles.headerText}>About Us</h2>
            <p className={styles.about}>
                <em><b>[This is placeholder text until the final about us text has been approved.]</b></em><br/>
                Welcome to Sakae Sushi, a cherished gem nestled in the heart of Gardena, California. Our small, locally-owned sushi restaurant embodies the spirit of traditional Japanese cuisine.
                At Sakae Sushi, we believe in simplicity and excellence. Our menu, carefully curated, features six exquisite types of sushi: Nori-maki, Inari, Ebi, Saba, Tamago-maki, and California Roll.
                <br />
                <em><b>Please note that we only accept cash payments!</b></em>
            </p>
            <h2 id="Menu" className={styles.headerText}>Menu</h2>
            <div className={styles.menu_container}>
                <Image className={styles.menu_left} src="./images/Menu_Left.webp" alt="Sushi Take Out Menu" width={1} height={1} />
                <Image className={styles.menu_right} src="./images/Menu_Right.webp" alt="Sushi by the Box Menu" width={1} height={1} />
            </div>
            <ImageGallery />
            <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
            <Contact />
            <p className={styles.copyright}>&copy; 2023 Sakae Sushi, Inc.</p>
        </div>
    )
}
